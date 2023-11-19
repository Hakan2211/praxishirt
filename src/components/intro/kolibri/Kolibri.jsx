'use client';

import { useGLTF, useAnimations } from '@react-three/drei';

import { useEffect } from 'react';

export function Kolibri(props) {
  const { nodes } = useGLTF('../models/kolibri/scene.gltf');
  const kolibri = useGLTF('../models/kolibri/scene.gltf');

  const kolibri_animations = useAnimations(kolibri.animations, kolibri.scene);

  useEffect(() => {
    const kolibri_action =
      kolibri_animations.actions[Object.keys(kolibri_animations.actions)[0]];
    kolibri_action.play();
  }, [kolibri_animations.actions]);

  return <primitive object={nodes.Sketchfab_Scene} {...props}></primitive>;
}

export function Kolibri2(props) {
  const kolibri2 = useGLTF('../models/kolibri2/scene.gltf');
  const kolibri2_animations = useAnimations(
    kolibri2.animations,
    kolibri2.scene
  );

  useEffect(() => {
    const kolibri2_action =
      kolibri2_animations.actions[Object.keys(kolibri2_animations.actions)[0]];
    kolibri2_action.play();
  }, [kolibri2_animations.actions]);

  return <primitive {...props} object={kolibri2.scene} />;
}
