'use client';

import React, { Suspense } from 'react';

import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Leistungen() {
  const { soundEnabled } = useSoundEnabled();
  return (
    <>
      <div className="text-white z-10 absolute">Leistungen</div>
      <View className=" !fixed  top-0 left-0 flex h-screen w-full ">
        {soundEnabled && (
          <PositionalAudio
            distance={2}
            autoplay
            loop
            url="../../../audio_background/Flight of the Inner Bird (Slowed Reverb).mp3"
          />
        )}
        <Common />
        <Suspense fallback={null}>
          <Background />
          <Lightsource />
        </Suspense>
      </View>
    </>
  );
}

export default Leistungen;