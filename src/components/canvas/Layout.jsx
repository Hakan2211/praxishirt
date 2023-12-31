'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
});

export const Layout = ({ children }) => {
  const ref = useRef();
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        //overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}
      <Scene
        eventSource={ref}
        eventPrefix="client"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
