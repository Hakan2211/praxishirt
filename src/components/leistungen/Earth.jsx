import React, { use, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Earth(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('../models/earth/scene.gltf');

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() / 10;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.earth_Earth_0.geometry}
          material={materials.Earth}
          //position={[-3709.267, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload('../models/earth/scene.gltf');
