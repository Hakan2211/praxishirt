'use client';

import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import { View } from '@/components/canvas/View';
import { useMobile } from '@/components/context/IsMobileProvider';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import Brain from '@/components/homepage/brain/Brain';
import BrainParticles from '@/components/homepage/brain/Particles';
import DNA from '@/components/homepage/dna/DNA';
import DNAParticles from '@/components/homepage/dna/DNAParticles';
import Heart from '@/components/homepage/heart/Heart';
import HeartParticles from '@/components/homepage/heart/HeartParticles';
import Scroll from '@/components/scroll/Scroll';

import { PositionalAudio } from '@react-three/drei';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Homepage() {
  const { soundEnabled } = useSoundEnabled();
  const { isMobile } = useMobile();

  return (
    <>
      <main className={`w-full h-[300vh] `}>
        <section className="w-full h-screen">
          <div
            className={`z-10 text-white absolute  ${
              isMobile
                ? 'left-1 p-10 w-full top-96 h-screen mt-0 translate-y-20'
                : 'top-80 left-72 mt-5 p-16 w-2/3 h-2/4'
            } `}
          >
            <h1 className="pb-3 mb-5">
              <span className="text-4xl pr-2 text-red-300">Praxis Hirt</span>
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

            <Suspense fallback={null}>
              {isMobile ? (
                <Brain position={[0, 0.2, 4]} scale={2} />
              ) : (
                <Brain position={[0.5, 0.1, 4]} scale={3} />
              )}

              {isMobile ? (
                <BrainParticles position={[0, 0.2, 4]} scale={2} />
              ) : (
                <BrainParticles position={[0.5, 0.1, 4]} scale={3} />
              )}

              {isMobile ? (
                <Heart
                  scale={0.3}
                  position={[0, -1.0, 4]}
                  rotation={[-Math.PI / 2, 0, 120]}
                />
              ) : (
                <Heart
                  scale={0.45}
                  position={[0.5, -1.2, 4]}
                  rotation={[-Math.PI / 2, 0, 120]}
                />
              )}

              {isMobile ? (
                <HeartParticles
                  scale={0.3}
                  position={[0, -1, 4]}
                  rotation={[-Math.PI / 2, 0, 120]}
                />
              ) : (
                <HeartParticles
                  scale={0.45}
                  position={[0.5, -1.2, 4]}
                  rotation={[-Math.PI / 2, 0, 120]}
                />
              )}

              {isMobile ? (
                <DNA position={[0, -2.0, 4]} scale={1.5} />
              ) : (
                <DNA position={[0.5, -2.3, 4]} scale={2} />
              )}
              {isMobile ? (
                <DNAParticles position={[0, -2.0, 4]} scale={1.5} />
              ) : (
                <DNAParticles position={[0.5, -2.3, 4]} scale={2} />
              )}
            </Suspense>

            <Suspense fallback={null}>
              <Background />
              <Lightsource />
            </Suspense>
            <Scroll />
          </View>
        </section>
        <section className="w-full h-screen">
          <div
            className={`z-10 text-white absolute  ${
              isMobile
                ? 'w-full p-10 left-1 h-screen mt-0 translate-y-96'
                : 'top-[90rem] left-72 mt-5 p-16 w-2/3 h-2/4'
            } `}
          >
            <h1 className="pb-3 mb-5">
              <span className="text-4xl pr-2 text-red-300">Herz</span>
              {''}
              <span className="text-3xl p-1">im Einklang.</span>
            </h1>
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>
                In unserer Praxis schlagen Herz und Psychotherapie im Einklang.
              </p>
              <p>Unser Ziel ist es, Ihnen zu helfen, Ihr emotionales</p>
              <p>Gleichgewicht wiederzufinden.</p>
              <p>Unsere Psychotherapie unterstützt Sie dabei, Ihr Herz</p>
              <p>in Harmonie mit Ihrer Psyche schlagen zu lassen, um ein</p>
              <p>erfülltes Leben zu führen.</p>
            </div>
          </div>
        </section>
        <section className="w-full h-screen">
          <div
            className={`z-10 text-white absolute  ${
              isMobile
                ? 'left-1 p-10 w-full min-h-0 h-4/5 mt-0 translate-y-96'
                : 'top-[165rem] left-72 mt-5 p-16 w-2/3 h-2/4'
            }  `}
          >
            <h1 className="pb-3 mb-5">
              <span className="text-4xl pr-2 text-red-300">Im Kern,</span>
              {''}
              <span className="text-3xl p-1">wie Sie sind.</span>
            </h1>
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>Unsere Praxis findet die Verbindung zwischen</p>
              <p>Psychotherapie und der tiefgreifenden DNA Ihrer</p>
              <p>
                Persönlichkeit. Ähnlich wie jeder DNA-Strang einzigartig ist,
              </p>
              <p>
                ist auch Ihre Psyche einzigartig. Unsere Therapie respektiert
              </p>
              <p>Ihre genetische Vielfalt und hilft Ihnen, die Potenziale</p>
              <p>Ihrer mentalen Struktur zu entfalten</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
