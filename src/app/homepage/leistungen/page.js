'use client';

import React, { useEffect } from 'react';

function Leistungen() {
  useEffect(() => {
    function onScroll() {
      console.log('scrolling');
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div className="h-[300rem]">Leistungen</div>;
}

export default Leistungen;
