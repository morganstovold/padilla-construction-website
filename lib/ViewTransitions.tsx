"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

type VTDoc = Document & {
  startViewTransition?: (cb: () => void) => { finished: Promise<void> };
};

function isHashOnlyChange(url: URL) {
  return (
    url.origin === location.origin &&
    url.pathname === location.pathname &&
    url.search === location.search &&
    url.hash !== ""
  );
}

function isModifiedClick(e: MouseEvent, el: HTMLAnchorElement) {
  const target = el.getAttribute("target");
  return (
    (target && target !== "_self") ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey ||
    e.which === 2
  );
}

export function ViewTransitions() {
  const router = useRouter();

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      const el = target.closest?.("a[data-vt]") as HTMLAnchorElement | null;
      if (!el) return;

      if (el.hasAttribute("data-no-vt")) return;

      if (isModifiedClick(e, el)) return;

      if (el.hasAttribute("download")) return;

      const rel = (el.getAttribute("rel") || "").toLowerCase();
      if (rel.includes("external") || rel.includes("opener")) return;

      const href = el.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      let url: URL;
      try {
        url = new URL(href, location.origin);
      } catch {
        return; // Invalid URL
      }

      if (!url.protocol.startsWith("http")) return;

      if (url.origin !== location.origin) return;

      if (isHashOnlyChange(url)) return;

      e.preventDefault();

      const hrefStr = url.pathname + url.search + url.hash;

      const scrollAttr = el.getAttribute("data-scroll");
      const scroll = scrollAttr == null ? true : scrollAttr !== "false";

      const variant = el.getAttribute("data-vt-anim");
      const root = document.documentElement;
      if (variant) root.setAttribute("data-vt-anim", variant);

      const go = () => {
        if (el.hasAttribute("data-replace"))
          router.replace(hrefStr, { scroll });
        else router.push(hrefStr, { scroll });
      };

      const start = (document as VTDoc).startViewTransition?.bind(document);
      if (start) {
        try {
          const vt = start(go);
          vt.finished.finally(() => {
            if (variant) root.removeAttribute("data-vt-anim");
          });
        } catch (error) {
          console.warn("View transition failed:", error);
          go();
          if (variant) root.removeAttribute("data-vt-anim");
        }
      } else {
        go();
        if (variant) root.removeAttribute("data-vt-anim");
      }
    },
    [router],
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return null;
}
