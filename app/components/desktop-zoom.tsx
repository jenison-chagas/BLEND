"use client";

import { useEffect } from "react";

// Preserve layout geometry while the browser magnifies a desktop page.
// Normal window resizing and device emulation still use the responsive CSS.
const geometry = [
  "display", "position", "top", "right", "bottom", "left", "box-sizing",
  "width", "height", "min-width", "max-width", "min-height", "max-height",
  "margin-top", "margin-right", "margin-bottom", "margin-left",
  "padding-top", "padding-right", "padding-bottom", "padding-left",
  "font-size", "font-weight", "font-style", "line-height", "letter-spacing", "white-space",
  "text-align", "text-transform",
  "flex-direction", "flex-wrap", "flex-grow", "flex-shrink", "flex-basis",
  "align-items", "align-self", "justify-content", "justify-self",
  "grid-template-columns", "grid-template-rows", "column-gap", "row-gap",
  "aspect-ratio", "object-fit", "object-position", "border-radius",
  "offset-path", "offset-anchor", "offset-rotate", "transform", "transform-origin",
  "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius",
  "background-size", "background-position", "mask-size", "mask-position",
  "animation-name", "animation-duration", "animation-timing-function",
  "animation-iteration-count", "animation-direction", "animation-fill-mode", "animation-delay",
] as const;

export function DesktopZoom() {
  useEffect(() => {
    const root = document.documentElement;
    const main = document.querySelector("main");
    if (!main) return;
    const pointer = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
    const device = navigator as Navigator & { userAgentData?: { mobile?: boolean } };
    const mobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
      || device.userAgentData?.mobile === true
      || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const style = document.createElement("style");
    style.dataset.desktopZoomStyles = "true";
    document.head.append(style);
    const tracked = new Set<HTMLElement | SVGElement>();
    let baselineDpr = window.devicePixelRatio;
    let baselineWidth = window.innerWidth;
    let eligible = false;
    let frame = 0;
    let centerFrame = 0;
    let disposed = false;

    const centerDesktopCanvas = () => {
      cancelAnimationFrame(centerFrame);
      centerFrame = requestAnimationFrame(() => {
        if (disposed || !root.hasAttribute("data-desktop-zoom-locked")) return;
        const viewportWidth = root.clientWidth;
        const canvasWidth = document.body.getBoundingClientRect().width;
        window.scrollTo({
          left: Math.max(0, (canvasWidth - viewportWidth) / 2),
          top: window.scrollY,
          behavior: "instant",
        });
      });
    };

    const notify = () => document.dispatchEvent(new Event("desktop-zoom-change"));
    const unlock = () => {
      if (!root.hasAttribute("data-desktop-zoom-locked")) return;
      root.removeAttribute("data-desktop-zoom-locked");
      notify();
    };

    const capture = () => {
      if (disposed || root.hasAttribute("data-desktop-zoom-locked")) return;
      // Desktop and Full HD/ultrawide/fullscreen canvases share the same rule.
      // No upper size limit or physical-screen restriction on large previews.
      eligible = pointer.matches && !mobileDevice && window.innerWidth >= 1024;
      baselineDpr = window.devicePixelRatio;
      baselineWidth = window.innerWidth;
      if (!eligible) {
        style.textContent = "";
        return;
      }
      const elements = [main, ...main.querySelectorAll<HTMLElement | SVGElement>("*")];
      const rules: string[] = [];
      for (const [index, element] of elements.entries()) {
        if (!(element instanceof HTMLElement || element instanceof SVGElement)) continue;
        if (element.closest("[data-page-loader], noscript") || element.tagName === "STYLE") continue;
        const computed = getComputedStyle(element);
        element.setAttribute("data-desktop-zoom-id", String(index));
        tracked.add(element);
        const declarations = geometry
          .filter((property) => element !== main || !["height", "min-height", "max-height"].includes(property))
          .map((property) => `${property}:${computed.getPropertyValue(property)} !important`).join(";");
        rules.push(`html[data-desktop-zoom-locked] [data-desktop-zoom-id="${index}"]{${declarations}}`);
        for (const pseudo of ["::before", "::after"]) {
          const decoration = getComputedStyle(element, pseudo);
          if (decoration.content === "none" || decoration.content === "normal") continue;
          const decorationGeometry = geometry
            .map((property) => `${property}:${decoration.getPropertyValue(property)} !important`).join(";");
          rules.push(`html[data-desktop-zoom-locked] [data-desktop-zoom-id="${index}"]${pseudo}{${decorationGeometry}}`);
        }
      }
      // Give the original desktop canvas room to grow without changing columns.
      rules.push(`html[data-desktop-zoom-locked] body{width:${baselineWidth}px!important;min-width:${baselineWidth}px!important;max-width:none!important;margin-inline:auto!important}`);
      rules.push(`html[data-desktop-zoom-locked] .solutions-brands:has(.solutions-brand:hover) .solutions-brand,html[data-desktop-zoom-locked] .solutions-brands:focus-within .solutions-brand{animation-play-state:paused!important}`);
      style.textContent = rules.join("\n");
    };

    const scheduleCapture = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(capture);
    };
    const update = () => {
      // Some browsers change screen.width during page zoom as well as innerWidth.
      // DPR is the zoom signal; screen.width must not discard the saved Full layout.
      const sameDevice = pointer.matches && !mobileDevice;
      const zoomChanged = Math.abs(window.devicePixelRatio / baselineDpr - 1) > 0.015;
      if (eligible && sameDevice && zoomChanged) {
        cancelAnimationFrame(frame);
        if (!root.hasAttribute("data-desktop-zoom-locked")) {
          root.setAttribute("data-desktop-zoom-locked", "");
          notify();
        }
        centerDesktopCanvas();
      } else {
        unlock();
        scheduleCapture();
      }
    };

    capture();
    void document.fonts.ready.then(scheduleCapture);
    document.addEventListener("page:ready", scheduleCapture);
    main.addEventListener("load", scheduleCapture, true);
    window.addEventListener("resize", update);
    document.addEventListener("fullscreenchange", update);
    pointer.addEventListener("change", update);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(centerFrame);
      document.removeEventListener("page:ready", scheduleCapture);
      main.removeEventListener("load", scheduleCapture, true);
      window.removeEventListener("resize", update);
      document.removeEventListener("fullscreenchange", update);
      pointer.removeEventListener("change", update);
      unlock();
      style.remove();
      for (const element of tracked) element.removeAttribute("data-desktop-zoom-id");
    };
  }, []);

  return null;
}
