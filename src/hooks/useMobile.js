'use client';

import React, { useEffect, useState, useCallback } from 'react';

const MOBILE_WIDTH = 768;

function useMobileSize() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_WIDTH);
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return [isMobile, setIsMobile];
}

export default useMobileSize;
