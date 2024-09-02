'use client';

import { myImages } from '@/components/team/Images';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { Suspense } from 'react';
import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import Link from 'next/link';
import LeftArrow from '@/components/icons/left-arrow';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function ProfilePage() {
  const { id } = useParams();
  const { soundEnabled } = useSoundEnabled();

  const profile = myImages[id - 1];

  if (!profile) {
    return <h1>Profile not found</h1>;
  }
  return (
    <>
      <View className=" !fixed  top-0 left-0 flex h-screen w-full ">
        {soundEnabled && (
          <PositionalAudio
            distance={2}
            autoplay
            loop
            url="../../../audio_background/audiocoffee.wav"
          />
        )}
        <Suspense fallback={null}>
          <Background />
          <Lightsource />
        </Suspense>
        <Common />
      </View>

      <div className="z-10 absolute grid min-w-full max-w-4xl grid-cols-3 gap-4 ">
        <div class="col-span-1"></div>
        <div className="col-span-1 max-w-[1000px]">
          <div className="w-full">
            <Image
              alt={profile.name}
              className="w-full rounded-lg object-cover"
              height={300}
              src={profile.url}
              style={{
                aspectRatio: '300/300',
                objectFit: 'cover',
              }}
              width={300}
            />
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-4xl font-bold text-white">{profile.name}</h2>
            <div className="text-2xl font-bold text-white">
              <h2>Diplom Psychologin</h2>
              <h2 className="whitespace-nowrap">
                Psychologische Psychotherapeutin (VT)
              </h2>
              <h2>Klininsche Neuropsychologin</h2>
            </div>
            <p className="mt-2 text-2xl text-stone-50 dark:text-gray-400">
              Beschreibung
            </p>
          </div>
        </div>

        <div class="col-span-1"></div>
      </div>

      {/* <div className="z-10 absolute flex flex-col md:flex-row gap-6  md:h-auto p-8 md:p-20">
        <Link
          href={'/homepage/team'}
          className="hover:text-red-300 duration-300 ease-in-out transition-colors self-start"
        >
          <LeftArrow className="w-6 h-6 text-slate-50 hover:text-red-300 duration-300 ease-in-out transition-colors " />
        </Link>
        <div className="w-full md:w-1/3 h-1/2 md:h-full overflow-y-auto">
          <Image
            alt={profile.name}
            className="w-full rounded-lg object-cover"
            height={300}
            src={profile.url}
            style={{
              aspectRatio: '300/300',
              objectFit: 'cover',
            }}
            width={300}
          />
          <div className="mt-6">
            <h2 className="text-4xl font-bold text-white">{profile.name}</h2>
            <p className="mt-2 text-2xl text-stone-50 dark:text-gray-400">
              {profile.role}
            </p>
            <p className="mt-2 text-2xl text-stone-50 dark:text-gray-400">
              {profile.profession}
            </p>
            <p className="mt-2 text-2xl text-stone-50 dark:text-gray-400">
              {profile.profession2}
            </p>

            <p className="mt-2 text-xl text-stone-50 dark:text-gray-400">
              Bei Praxis Hirt seit {profile.year}
            </p>

            <p className="mt-2 text-gray-200 dark:text-gray-400">
              {profile.description}
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/3 h-1/2 md:h-full overflow-y-auto">
          <h2 className="text-4xl font-bold text-white">Laufbahn</h2>
          <div className="mt-6 relative">
            <div className="border-l-2 border-gray-200 dark:border-gray-700 absolute h-full left-5" />
            {Object.entries(profile.career).map(([year, value], index) => (
              <div key={index} className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative z-10">
                  <svg
                    className=" w-5 h-5 text-gray-500 dark:text-gray-300"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <div className="ml-8">
                  <h3 className="font-semibold text-white">{value}</h3>
                  <p className="text-stone-50 dark:text-gray-400">{year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ProfilePage;
