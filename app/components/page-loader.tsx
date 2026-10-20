"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let released = false;
    let ready = false;
    let target = 6;
    let current = 0;
    let previousFrame = performance.now();
    let frameId = 0;
    let holdTimer: ReturnType<typeof setTimeout> | undefined;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    const disposeImages: (() => void)[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const originalOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const underlying = new Map<HTMLElement, boolean>();

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    for (const element of overlay.current?.parentElement?.children ?? []) {
      if (element instanceof HTMLElement && element !== overlay.current && element.tagName !== "NOSCRIPT") {
        underlying.set(element, element.inert);
        element.inert = true;
      }
    }

    const releasePage = () => {
      if (released) return;
      released = true;
      document.documentElement.style.overflow = originalOverflow;
      document.body.style.overflow = originalBodyOverflow;
      for (const [element, inert] of underlying) element.inert = inert;
    };

    const watchImage = (src: string) => new Promise<void>((resolve) => {
      const image = new window.Image();
      image.decoding = "async";
      const finish = () => {
        image.onload = null;
        image.onerror = null;
        resolve();
      };
      image.onload = () => {
        if (typeof image.decode === "function") image.decode().then(finish, finish);
        else finish();
      };
      image.onerror = finish;
      disposeImages.push(() => { image.onload = null; image.onerror = null; });
      image.src = src;
    });

    let loaded = 0;
    const track = (task: Promise<unknown>, weight: number) => task.then(
      () => { if (!cancelled) target = Math.max(target, 6 + (loaded += weight) * 0.88); },
      () => { if (!cancelled) target = Math.max(target, 6 + (loaded += weight) * 0.88); },
    );

    Promise.allSettled([
      track(watchImage("/imagens/logo_andre.png"), 35),
      track(watchImage("/imagens/img01.png"), 45),
      track(document.fonts?.ready ?? Promise.resolve(), 20),
    ]).then(() => {
      if (!cancelled) { ready = true; target = 100; }
    });

    // A abertura sempre libera a página, mesmo com algum recurso indisponível.
    const timeout = setTimeout(() => { ready = true; target = 100; }, 6000);

    const advance = (now: number) => {
      if (cancelled) return;
      const elapsed = Math.min(now - previousFrame, 64);
      previousFrame = now;
      current = reducedMotion ? target : Math.min(target, current + elapsed * 0.06);
      setProgress(Math.min(100, Math.round(current)));

      if (ready && current >= 100) {
        holdTimer = setTimeout(() => {
          document.dispatchEvent(new Event("page:reveal"));
          setLeaving(true);
          exitTimer = setTimeout(() => {
            releasePage();
            setVisible(false);
          }, reducedMotion ? 0 : 1000);
        }, reducedMotion ? 0 : 240);
      } else {
        frameId = requestAnimationFrame(advance);
      }
    };
    frameId = requestAnimationFrame(advance);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      cancelAnimationFrame(frameId);
      disposeImages.forEach((dispose) => dispose());
      releasePage();
    };
  }, []);

  useEffect(() => {
    if (!visible) document.dispatchEvent(new Event("page:ready"));
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        ref={overlay}
        className="page-loader"
        data-page-loader
        data-leaving={leaving ? "true" : undefined}
      >
        <div className="page-loader__content">
          <Image
            className="page-loader__logo"
            src="/imagens/logo_andre.png"
            alt="André Cavalcanti"
            width={710}
            height={355}
            loading="eager"
            fetchPriority="high"
            unoptimized
          />
          <p className="page-loader__name">MsC. André Cavalcanti</p>
          <div
            className="page-loader__bar"
            role="progressbar"
            aria-label="Carregando a página"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <span className="page-loader__fill" style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
        </div>
      </div>
      <noscript><style>{".page-loader { display: none !important; }"}</style></noscript>
    </>
  );
}
