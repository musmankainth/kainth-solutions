"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Responsive breakpoint hook.
 * @param query - CSS media query string, e.g. "(min-width: 768px)"
 * @returns boolean indicating whether the query currently matches.
 *          Returns false during SSR and before hydration.
 */
export default function useMediaQuery(query: string): boolean {
  const getMatches = useCallback((): boolean => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  }, [query]);

  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Set initial value on mount (avoids hydration mismatch by starting false)
    setMatches(mediaQueryList.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handler);
    return () => mediaQueryList.removeEventListener("change", handler);
  }, [query, getMatches]);

  return matches;
}
