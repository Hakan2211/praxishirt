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
  }, [setScrollY]);

  const { camera } = useThree();
  const initialY = camera.position.y;
  const dampingFactor = 0.001; // Adjust this value to control the damping effect

  useFrame(() => {
    const newCameraPosition = new THREE.Vector3();
    newCameraPosition.copy(camera.position); // Copy the current camera position

    // Adjust the new camera position based on the scrollY value
    newCameraPosition.y = -scrollY * dampingFactor; // Set the Y position based on scrollY

    // Apply the new camera position
    camera.position.copy(newCameraPosition);
    // const targetY = window.scrollY * dampingFactor + initialY;
    // camera.position.y = targetY;

    // Ensure the camera's orientation stays fixed
    camera.rotation.x = 0; // Reset to a horizontal view
    camera.rotation.z = 0; // Reset to a level view (adjust as needed)
  });

  return null;
}

export default Scroll;
