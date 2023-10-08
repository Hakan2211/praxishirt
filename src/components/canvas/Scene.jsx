'use client';

import { Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { r3f } from '@/components/helpers/Three';

export default function Scene({ ...props }) {
  return (
    <Canvas {...props}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
