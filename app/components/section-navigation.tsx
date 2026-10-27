"use client";

import { useEffect } from "react";

const sectionIds = new Set(["inicio", "solucoes", "tese", "sobre", "contato"]);

export function SectionNavigation() {
  useEffect(() => {
    let version = 0;
    let frame = 0;
    let disposed = false;
    const align = () => {
      const id = window.location.hash.slice(1);
      if (!sectionIds.has(id)) return;
      const section = document.getElementById(id);
      if (!section) return;
      const current = ++version;
      const scroll = (smooth: boolean) => {
        if (disposed || current !== version) return;
        const bounds = section.getBoundingClientRect();
        const sectionTop = Math.max(0, window.scrollY + bounds.top);
        const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
        // On short screens, keep the contact footer visible even if the content
        // cannot fit in a single viewport. Other menu destinations keep their top.
        const destination = id === "inicio" ? 0
          : id === "contato" ? Math.max(sectionTop, window.scrollY + bounds.bottom - viewportHeight)
          : sectionTop;
        window.scrollTo({
          left: window.scrollX,
          // The first fold includes the navigation header, above #inicio.
          top: destination,
          behavior: smooth && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "smooth" : "instant",
        });
      };
      // Allow :target sizing and the previous section's height to settle first.
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => scroll(true));
      });
      const images = Array.from(section.querySelectorAll("img"));
      const ready = Promise.allSettled([
        document.fonts.ready,
        ...images.map((image) => image.decode().catch(() => undefined)),
      ]);
      void ready.then(() => {
        if (disposed || current !== version) return;
        frame = requestAnimationFrame(() => scroll(true));
      });
    };
    const menuClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>('nav[aria-label="Navegação principal"] a[href^="#"]')
        : null;
      if (!link || !sectionIds.has(link.hash.slice(1))) return;
      // One scroll owner avoids native fragment jumps competing with alignment.
      event.preventDefault();
      if (window.location.hash !== link.hash) history.pushState(null, "", link.hash);
      align();
    };
    const cancel = () => { version++; cancelAnimationFrame(frame); };
    const keyCancel = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) cancel();
    };
    document.addEventListener("click", menuClick);
    window.addEventListener("hashchange", align);
    window.addEventListener("popstate", align);
    document.addEventListener("page:ready", align);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", keyCancel);
    if (window.location.hash) align();
    return () => {
      disposed = true;
      cancel();
      document.removeEventListener("click", menuClick);
      window.removeEventListener("hashchange", align);
      window.removeEventListener("popstate", align);
      document.removeEventListener("page:ready", align);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", keyCancel);
    };
  }, []);

  return null;
}
