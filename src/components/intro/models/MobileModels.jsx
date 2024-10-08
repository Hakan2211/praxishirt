'use client';

import Loader from '@/components/intro/loading/Loading';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HeadlineText3D from '@/components/intro/3dtext/Text';

const View = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <h2>Einen Augenblick noch</h2>
      </div>
    ),
  }
);
const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

const Kolibri2 = dynamic(
  () =>
    import('@/components/intro/kolibri/Kolibri').then((mod) => mod.Kolibri2),
  { ssr: false }
);
export default function MobileModels() {
  return (
    <>
      <Loader />
      <div className="w-full text-center md:w-3/5 pointer-events-none">
        <View
          orbit
          className="absolute top-0 flex h-screen w-full flex-col items-center justify-center"
        >
          <Suspense fallback={null}>
            <Kolibri2
              scale={4}
              position={[0.4, 1, -3]}
              rotation={[0, Math.PI / 2 + 60, 0]}
            />

            <Common />
          </Suspense>

          <HeadlineText3D position={[-0.6, 1.5, 0]} />
        </View>
      </div>
    </>
  );
}
