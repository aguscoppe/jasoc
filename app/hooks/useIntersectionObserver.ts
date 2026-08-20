import { useEffect, useMemo, useRef, useState } from "react";

const useIntersectionObserver = (
  options: IntersectionObserverInit,
  debounceMs = 120
) => {
  const [visibleSectionId, setVisibleSectionId] = useState<string | null>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const debounceTimerRef = useRef<number | null>(null);
  const pendingIdRef = useRef<string | null>(null);

  const stableOptions = useMemo(() => options, [options]);

  useEffect(() => {
    const commitDebounced = (nextId: string) => {
      pendingIdRef.current = nextId;

      if (debounceTimerRef.current) {
        window.clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = window.setTimeout(() => {
        setVisibleSectionId(pendingIdRef.current);
      }, debounceMs);
    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length === 0) return;

      const best = intersecting.reduce((prev, curr) =>
        curr.intersectionRatio > prev.intersectionRatio ? curr : prev
      );

      const nextId = (best.target as HTMLElement).id;
      if (!nextId) return;

      if (nextId === visibleSectionId) return;

      commitDebounced(nextId);
    };

    observerRef.current = new IntersectionObserver(
      handleObserver,
      stableOptions
    );

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;

      if (debounceTimerRef.current) {
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
    };
  }, [stableOptions, debounceMs, visibleSectionId]);

  return visibleSectionId;
};

export default useIntersectionObserver;
