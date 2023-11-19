'use client';

import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export function EyeBrain(props) {
  const { nodes } = useGLTF('../models/eyeBrain/scene.gltf');
  const eyeBrain = useGLTF('../models/eyeBrain/scene.gltf');

  const eyeBrain_animations = useAnimations(
    eyeBrain.animations,
    eyeBrain.scene
  );

  useEffect(() => {
    const action =
      eyeBrain_animations.actions[Object.keys(eyeBrain_animations.actions)[0]];
    action.play();
  }, [eyeBrain_animations.actions]);

  return <primitive object={nodes.Sketchfab_Scene} {...props} />;
}
