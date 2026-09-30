"use client";

import { useCallback, useState, useSyncExternalStore, type RefCallback } from "react";

/** True once the element has scrolled into view (it stays true). */
export const useInView = <T extends Element>(
  rootMargin = "0px 0px -8% 0px",
): [RefCallback<T>, boolean] => {
  const [isInView, setIsInView] = useState(false);

  const ref = useCallback<RefCallback<T>>(
    (node) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setIsInView(true);
          observer.disconnect();
        },
        { rootMargin, threshold: 0.15 },
      );
      observer.observe(node);

      return () => observer.disconnect();
    },
    [rootMargin],
  );

  return [ref, isInView];
};

const subscribeToScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

/** True once the page has scrolled past `offset` pixels. */
export const useHasScrolled = (offset = 24): boolean =>
  useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > offset,
    () => false,
  );
