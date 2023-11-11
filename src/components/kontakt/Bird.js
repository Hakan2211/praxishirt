'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Bird(props) {
  const { nodes, materials } = useGLTF('../models/bird/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Cylinder__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 139.535, 0]}
          rotation={[-Math.PI / 4, 0, 0]}
          scale={[44.085, 44.085, 171.151]}
        />
        <mesh
          geometry={nodes.Plane000__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 425.75, 193.312]}
          rotation={[-2.121, 0, 0]}
          scale={156.015}
        />
      </group>
    </group>
  );
}

useGLTF.preload('../models/bird/scene.gltf');
