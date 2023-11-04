'use client';

// import { useFrame, useThree } from '@react-three/fiber';
// import React, { useEffect, useRef } from 'react';
// import { useScroll } from './ScrollContext';

// function Scroll() {
//   const { setScrollY } = useScroll();
//   const cameraRef = useRef();

//   useEffect(() => {
//     function onScroll() {
//       setScrollY(window.scrollY);
//     }
//     window.addEventListener('scroll', onScroll);
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [setScrollY]);

//   const { camera } = useThree();
//   cameraRef.current = camera;

//   // Initialize targetY and dampingFactor
//   let targetY = window.scrollY;
//   let dampingFactor = 0.05;

//   useFrame(() => {
//     // Calculate the scroll distance
//     const scrollDelta = window.scrollY - targetY;
//     const damping = scrollDelta * dampingFactor;

//     // Update the camera's position based on scroll and damping
//     cameraRef.current.position.y -= damping;

//     // Ensure the camera's orientation stays fixed
//     cameraRef.current.rotation.x = 0; // Reset to a horizontal view
//     cameraRef.current.rotation.z = 0; // Reset to a level view (adjust as needed)

//     // Update the targetY
//     targetY = window.scrollY;
//   });

//   return null;
// }

import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { useScroll } from './ScrollContext';

import * as THREE from 'three';

function Scroll() {
  const { scrollY, setScrollY } = useScroll();

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
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
