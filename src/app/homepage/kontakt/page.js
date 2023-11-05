'use client';

import React, { Suspense } from 'react';

import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Kontakt() {
  return (
    <>
      <div className="text-white z-10 absolute">Kontakt</div>
      <View className=" !fixed  top-0 left-0 flex h-screen w-full ">
        <Common />
        <Suspense fallback={null}>
          <Background />
          <Lightsource />
        </Suspense>
      </View>
    </>
  );
}

export default Kontakt;
