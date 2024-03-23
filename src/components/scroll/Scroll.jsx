'use client';

import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { useScroll } from './ScrollContext';

import * as THREE from 'three';
import { useMobile } from '../context/IsMobileProvider';

function Scroll() {
  const { scrollY, setScrollY } = useScroll();
  const { isMobile } = useMobile();

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }

    function handlePointerDown() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', onScroll);
    if (isMobile) {
      window.addEventListener('pointerdown', handlePointerDown);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (isMobile) {
        window.removeEventListener('pointerdown', handlePointerDown);
      }
    };
  }, [setScrollY, isMobile]);

  const { camera } = useThree();
  const initialY = camera.position.y;
  const dampingFactor = 0.001;

  useFrame(() => {
    const newCameraPosition = new THREE.Vector3();
    newCameraPosition.copy(camera.position);

    newCameraPosition.y = -scrollY * dampingFactor;

    camera.position.copy(newCameraPosition);

    camera.rotation.x = 0;
    camera.rotation.z = 0;
  });

  return null;
}

export default Scroll;
