import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Chess(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('../models/chess/scene.gltf');

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.queen} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.king} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.king} />
      </group>
    </group>
  );
}

useGLTF.preload('../models/chess/scene.gltf');
