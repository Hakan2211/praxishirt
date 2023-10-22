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
      {/* <div className=" absolute top-0 left-0 w-full h-screen z-10 ">
        <h1 className="text-white">Homepage</h1>
      </div> */}
      <main className="w-full h-screen">
        <section className="w-full h-screen">
          <div className="z-10 text-white absolute top-80 left-72 mt-5 p-16 w-2/3 h-2/4">
            <h1 className="pb-3 mb-5">
              <span className="text-6xl pr-2 text-red-300">Praxis Hirt</span>
              {''}
              <span className="text-3xl p-1">heißt Sie willkommen.</span>
            </h1>
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>In den Tiefen Ihres Gehirns verbirgt</p>
              <p>sich der Schlüssel zu Ihrer inneren Stärke.</p>
              <p>Unsere Psychotherapie öffnet die Tore zur Transformation</p>
              <p>und zum Wachstum, indem wir die einzigartige Landkarte</p>
              <p>Ihrer Gedanken gemeinsam erforschen.</p>
              <h2>Hier beginnt Ihre Reise zur psychischen Gesundheit.</h2>
            </div>
          </div>
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
        </section>
      </main>
    </>
  );
}

export default Homepage;
