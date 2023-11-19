'use client';

import { Plane } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';

export default function Background() {
  const viewport = useThree((state) => state.viewport);

  const planeRef = useRef();

  return (
    <>
      <group>
        <Plane
          ref={planeRef}
          args={[3, 3, 2, 2]}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[viewport.width, (viewport.height / 0.95) * 2, 1]}
        >
          <meshPhysicalMaterial
            color="#063058"
            metalness={0.9}
            roughness={0.3}
          />
        </Plane>
      </group>
    </>
  );
}
