'use client';

import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const MOBILE_WIDTH = 768;

// useLayoutEffect warns on the server; fall back to useEffect there.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Only use this for values that cannot be expressed with Tailwind breakpoints
 * (e.g. 3D model positions). For layout use `md:` classes instead.
 */
function useMobileSize() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_WIDTH);
  }, []);

  // Measure before the first paint so the 3D scene does not visibly jump.
  useIsomorphicLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return [isMobile, setIsMobile];
}

export default useMobileSize;
