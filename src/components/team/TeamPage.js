'use client';
import { Image, MeshReflectorMaterial, useCursor } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { usePathname, useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { easing } from 'maath';

import { useMobile } from '../context/IsMobileProvider';

const GOLDENRATIO = 1.61803398875;

export default function TeamPage({ images }) {
  const { camera } = useThree();
  const pathname = usePathname();

  const { isMobile } = useMobile();
  let position;

  if (isMobile && pathname === '/homepage/team') {
    camera.fov = 120;
    position = [-0.7, -0.5, 0];
  } else {
    camera.fov = 70;
    position = [0, -0.5, 0];
  }

  return (
    <group position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        {/* <meshBasicMaterial color={'red'} /> */}
        <MeshReflectorMaterial
          blur={[350, 200]}
          resolution={2048}
          mixBlur={0.9}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          metalness={0.5}
          color="#050505"
        />
      </mesh>
      {/* <ambientLight intensity={5} position={[0, 0, 5]} /> */}
      <Frames images={images} />
    </group>
  );
}

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  //const params = useParams(`/homepage/team/${images.id}`);
  const router = useRouter();
  const { camera } = useThree();

  // useEffect(() => {
  //   clicked.current = ref.current.getObjectByName(params?.id);
  //   if (clicked.current) {
  //     clicked.current.parent.updateWorldMatrix(true, true);
  //     clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
  //     clicked.current.parent.getWorldQuaternion(q);
  //   } else {
  //     p.set(0, 0, 5.5);
  //     q.identity();
  //   }
  // });
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
    camera.position.set(0, 0.5, 6);
  });
  return (
    <group
      ref={ref}
      //onClick={() => router.push(`/homepage/team/${clicked.current?.id}`)}
      onPointerMissed={() => router.push('/homepage/team')}
    >
      {images.map((image) => (
        <Frame
          key={image.id}
          {...image}
          onClick={() => router.push(`/homepage/team/${image.id}`)}
        />
      ))}
    </group>
  );
}

function Frame({ url, id, c = new THREE.Color(), ...props }) {
  const image = useRef();
  const frame = useRef();
  //const params = useParams(`/homepage/team/${image.id}`);
  const [hovered, setHovered] = useState(false);
  const [rnd] = useState(() => Math.random());
  //const isActive = params?.id === image.id;
  useCursor(hovered);
  useFrame((state, dt) => {
    image.current.material.zoom =
      2 + Math.sin(rnd * 1000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(
      image.current.scale,
      [0.85 * (hovered ? 0.85 : 1), 0.9 * (hovered ? 0.905 : 1), 1],
      0.1,
      dt
    );
    easing.dampC(
      frame.current.material.color,
      hovered ? '#fca5a5' : 'white',
      0.1,
      dt
    );
  });
  return (
    <group {...props}>
      <mesh
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={() => setHovered(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color={'#151515'}
          metalness={0.5}
          roughness={0.5}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          url={url}
          position={[0, 0, 0.7]}
          alt="Bilder von Teammitgliedern"
        />
      </mesh>
    </group>
  );
}
