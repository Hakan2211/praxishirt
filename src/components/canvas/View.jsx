'use client';

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react';
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from '@react-three/drei';
import { Three } from '@/components/helpers/Three';

export const Common = ({ color }) => (
  <Suspense>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 20]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <PerspectiveCamera
      makeDefault
      fov={40}
      position={[0, 0, 6]}
      near={0.1}
      far={1000}
    />
  </Suspense>
);

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef();
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = 'View';

export { View };
