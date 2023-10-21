'use client';

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
import React from 'react';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Homepage() {
  const { soundEnabled } = useSoundEnabled();
  return (
    <>
      <div className="">
        <h1 className="text-white">Homepage</h1>
      </div>
      <View className=" absolute top-0 flex h-screen w-full flex-col items-center justify-center">
        {soundEnabled && (
          <PositionalAudio
            distance={2}
            autoplay
            loop
            url="../../../audio_background/Flight of the Inner Bird (Slowed Reverb).mp3"
          />
        )}
        <Common color={'black'} />
        {/* <Brain className="cursor-pointer" />
        <BrainParticles /> */}
        {/* <Heart scale={0.5} />
        <HeartParticles /> */}
        <DNA />
        <DNAParticles />
      </View>
    </>
  );
}

export default Homepage;
