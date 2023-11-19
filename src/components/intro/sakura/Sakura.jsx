'use client';

import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export function Sakura(props) {
  const sakura = useGLTF('../models/sakura_animation/scene.gltf');
  const sakura_animations = useAnimations(sakura.animations, sakura.scene);

  useEffect(() => {
    const sakura_action =
      sakura_animations.actions[Object.keys(sakura_animations.actions)[0]];
    sakura_action.play();
  }, [sakura_animations.actions]);

  return <primitive {...props} object={sakura.scene} />;
}
