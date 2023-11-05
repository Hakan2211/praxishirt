'use client';

import React, { useEffect, Suspense } from 'react';

import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { Image, PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import TeamPage from '@/components/team/TeamPage';
import { myImages } from '@/components/team/Images';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Team() {
  const { soundEnabled } = useSoundEnabled();
  return (
    <>
      <div className="text-white z-10 absolute w-full h-20 text-3xl left-[45%] translate-y-20">
        Unser Team
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

        <TeamPage images={myImages} />
      </View>
    </>
  );
}

export default Team;
