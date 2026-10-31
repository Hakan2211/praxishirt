'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PositionalAudio } from '@react-three/drei';
import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

/**
 * Fixed full-screen 3D backdrop shared by all inner pages: background plane,
 * lights, camera and the optional ambient sound. Page-specific models are
 * passed as children.
 */
export default function SceneLayer({ children }) {
  const { soundEnabled } = useSoundEnabled();

  return (
    <View className="!fixed left-0 top-0 flex h-screen w-full">
      {soundEnabled && (
        <PositionalAudio
          distance={2}
          autoplay
          loop
          url="/audio_background/audiocoffee.wav"
        />
      )}
      <Common />
      {children}
      <Suspense fallback={null}>
        <Background />
        <Lightsource />
      </Suspense>
    </View>
  );
}
