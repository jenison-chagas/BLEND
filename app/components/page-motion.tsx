"use client";

import { useEffect } from "react";

function enhanceMotion(introDelay = 0) {
  const animations = new Set<Animation>();
  const pending = new Map<HTMLElement, Animation>();
  const ambient = new Map<HTMLElement, Animation>();

  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        const animation = pending.get(element);
        if (animation) {
          element.dataset.motionState = "entering";
          animation.play();
        }
        revealObserver.unobserve(element);
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
  );

  const ambientObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const element = entry.target as HTMLElement;
      let animation = ambient.get(element);
      if (entry.isIntersecting) {
        if (!animation) {
          animation = element.animate(
            [{ translate: "0 0" }, { translate: "0 -10px" }],
            {
              duration: 9000,
              iterations: Infinity,
              direction: "alternate",
              easing: "ease-in-out",
            },
          );
          ambient.set(element, animation);
          animations.add(animation);
        }
        animation.play();
      } else {
        animation?.pause();
      }
    }
  });

  const finishFocusedReveal = (event: FocusEvent) => {
    if (!(event.target instanceof Element)) return;
    const element = event.target.closest<HTMLElement>("[data-motion]");
    if (element) pending.get(element)?.finish();
  };

  const cleanup = () => {
    revealObserver.disconnect();
    ambientObserver.disconnect();
    document.removeEventListener("focusin", finishFocusedReveal);
    for (const animation of animations) animation.cancel();
    for (const element of pending.keys()) {
      element.dataset.motionState = "visible";
    }
  };

  try {
    for (const element of document.querySelectorAll<HTMLElement>("[data-motion]")) {
      const delay = Math.min(240, Math.max(0, Number(element.dataset.motionDelay) || 0))
        + (element.closest("#inicio") ? introDelay : 0);
      const animation = element.animate(
        [
          { opacity: 0, translate: "0 24px" },
          { opacity: getComputedStyle(element).opacity, translate: "0 0" },
        ],
        {
          duration: element.dataset.motion === "portrait" ? 1100 : 850,
          delay,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "both",
        },
      );
      animation.pause();
      element.dataset.motionState = "waiting";
      pending.set(element, animation);
      animations.add(animation);
      animation.onfinish = () => {
        element.dataset.motionState = "visible";
        pending.delete(element);
        animations.delete(animation);
        // Libera os estilos para manter os alinhamentos e o hover originais.
        animation.cancel();
      };
      revealObserver.observe(element);
    }

    for (const element of document.querySelectorAll<HTMLElement>(
      ".solutions-filigree, .thesis-filigree, .contact-filigree",
    )) {
      ambientObserver.observe(element);
    }
    document.addEventListener("focusin", finishFocusedReveal);
  } catch {
    // O conteúdo continua visível se o navegador não suportar algum efeito.
    cleanup();
  }

  return cleanup;
}

export function PageMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pageReady = !document.querySelector("[data-page-loader]");
    let introDelay = 0;
    let cleanup: (() => void) | undefined;
    const updateMotion = () => {
      cleanup?.();
      cleanup = preference.matches || !pageReady ? undefined : enhanceMotion(introDelay);
    };
    const startAfterLoading = () => {
      if (pageReady) return;
      pageReady = true;
      updateMotion();
    };
    const revealDuringTransition = () => {
      if (pageReady) return;
      introDelay = 160;
      startAfterLoading();
      introDelay = 0;
    };

    updateMotion();
    document.addEventListener("page:reveal", revealDuringTransition);
    document.addEventListener("page:ready", startAfterLoading);
    preference.addEventListener("change", updateMotion);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("page:reveal", revealDuringTransition);
      document.removeEventListener("page:ready", startAfterLoading);
      cleanup?.();
    };
  }, []);

  return null;
}
