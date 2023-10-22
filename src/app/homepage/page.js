'use client';

import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import { View } from '@/components/canvas/View';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import Brain from '@/components/homepage/brain/Brain';
import BrainParticles from '@/components/homepage/brain/Particles';
import DNA from '@/components/homepage/dna/DNA';
import DNAParticles from '@/components/homepage/dna/DNAParticles';
import Heart from '@/components/homepage/heart/Heart';
import HeartParticles from '@/components/homepage/heart/HeartParticles';
import { PositionalAudio } from '@react-three/drei';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Homepage() {
  const { soundEnabled } = useSoundEnabled();
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen z-10">
        <h1 className="text-white">Homepage</h1>
      </div>
      <View className="fixed top-0 left-0 w-full h-screen">
        {soundEnabled && (
          <PositionalAudio
            distance={2}
            autoplay
            loop
            url="../../../audio_background/Flight of the Inner Bird (Slowed Reverb).mp3"
          />
        )}
        <Common />
        <Brain />

        <BrainParticles />
        {/* <Heart scale={0.5} />
        <HeartParticles /> */}
        {/* <DNA />
        <DNAParticles /> */}
        <Suspense fallback={null}>
          <Background />
          <Lightsource />
        </Suspense>
      </View>
    </>
  );
}

export default Homepage;
