'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

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
      </div>
    ),
  }
);
const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

const Kolibri = dynamic(
  () => import('@/components/intro/kolibri/Kolibri').then((mod) => mod.Kolibri),
  { ssr: false }
);
const Kolibri2 = dynamic(
  () =>
    import('@/components/intro/kolibri/Kolibri').then((mod) => mod.Kolibri2),
  { ssr: false }
);
const Sakura = dynamic(
  () => import('@/components/intro/sakura/Sakura').then((mod) => mod.Sakura),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-slate-100 via-blue-100 to-sky-200 h-screen">
      {/* jumbo */}
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5">
        <div className="flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left">
          <p className="w-full uppercase">Next + React Three Fiber</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Next 3D Starter
          </h1>
          <p className="mb-8 text-2xl leading-normal">
            A minimalist starter for React, React-three-fiber and Threejs.
          </p>
        </div>
      </div>

      <div className="w-full text-center md:w-3/5">
        <View
          orbit
          className="absolute top-0 flex h-screen w-full flex-col items-center justify-center"
        >
          <Suspense fallback={null}>
            {/* <Logo route='/blob' scale={0.6} position={[0, 0, 0]} /> */}
            <Kolibri
              scale={4}
              position={[-1, 0, -3]}
              rotation={[0, Math.PI / 2 + 60, 0]}
            />
            <Kolibri2
              scale={4}
              position={[2, 1, -3]}
              rotation={[0, Math.PI / 2 + 60, 0]}
            />
            <Sakura position={[-4.3, -3.7, -4.3]} scale={0.38} />
            <Common />
          </Suspense>
        </View>
      </div>
    </main>
  );
}
