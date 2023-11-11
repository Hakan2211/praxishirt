'use client';

import React, { Suspense } from 'react';

import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { Bird } from '@/components/kontakt/Bird';
import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Kontakt() {
  const { soundEnabled } = useSoundEnabled();
  return (
    <>
      <div className="absolute  z-10 text-white w-full  flex items-center justify-center py-12">
        <div className="space-y-8 max-w-xl w-full  mx-auto p-8 bg-gray-800 rounded-lg">
          <h2 className="text-5xl font-bold text-center">Kontaktiere uns</h2>
          <form className="space-y-12">
            <div className="space-y-2 flex flex-col">
              <label className="text-3xl" htmlFor="name">
                Name
              </label>
              <input
                className="bg-gray-700 rounded-lg h-12 text-2xl p-3 text-white border-none placeholder:text-2xl placeholder:p-3"
                id="name"
                placeholder="Gib deinen Namen ein"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-3xl" htmlFor="email">
                Email
              </label>
              <input
                className="bg-gray-700 rounded-lg text-2xl p-3 h-12 text-white border-none placeholder:text-2xl placeholder:p-3"
                id="email"
                placeholder="Gib deine Email-Adresse ein"
                type="email"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-3xl" htmlFor="message">
                Nachricht
              </label>
              <textarea
                className="bg-gray-700 rounded-lg text-2xl p-3 text-white border-none min-h-[100px] h-44 placeholder:text-2xl placeholder:p-3"
                id="message"
                placeholder="Gib deine Nachricht ein"
              />
            </div>
            <button className="w-full h-12 text-3xl rounded-lg bg-red-300 hover:bg-red-500 transition-colors">
              Senden
            </button>
          </form>
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
        <Suspense fallback={null}>
          <Background />
          <Lightsource />
        </Suspense>
        <Bird
          position={[1.2, -0.5, 3]}
          scale={0.15}
          rotation={[0, -Math.PI / 2 + 200, 0]}
        />
      </View>
    </>
  );
}

export default Kontakt;
