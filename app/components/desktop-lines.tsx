"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Keep the approved desktop line breaks while fitting the available width. */
export function DesktopLines({ lines, mobileLines }: {
  lines: ReactNode[];
  mobileLines?: ReactNode[];
}) {
  const [isMobile, setIsMobile] = useState(false);
  const visibleLines = isMobile && mobileLines ? mobileLines : lines;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(
      media.matches && !document.documentElement.hasAttribute("data-desktop-zoom-locked"),
    );
    update();
    media.addEventListener("change", update);
    document.addEventListener("desktop-zoom-change", update);
    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("desktop-zoom-change", update);
    };
  }, []);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const content = host.firstElementChild as HTMLSpanElement;
    let active = true;
    let lastWidth = -1;
    const fit = () => {
      if (!active || host.clientWidth === 0) return;
      const base = parseFloat(getComputedStyle(host).fontSize);
      content.style.fontSize = `${base}px`;
      const widest = Math.max(...Array.from(content.children, (line) =>
        (line.firstElementChild as HTMLElement).offsetWidth));
      content.style.fontSize = `${base * Math.min(1, host.clientWidth / Math.max(1, widest))}px`;
      lastWidth = host.clientWidth;
    };
    const observer = new ResizeObserver(() => {
      if (host.clientWidth !== lastWidth) fit();
    });
    observer.observe(host);
    fit();
    void document.fonts.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [visibleLines]);

  return (
    <span className="desktop-lines" ref={ref}>
      <span className="desktop-lines__content">
        {visibleLines.map((line, index) => (
          <span className="desktop-lines__line" key={index}>
            <span>{line}</span>{index < visibleLines.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </span>
  );
}
