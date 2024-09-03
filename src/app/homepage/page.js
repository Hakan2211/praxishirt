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

export const metadata = {
  title: 'Filiz Hirt',
  description: 'Filiz Hirt - Homepage',
};

function Homepage() {
  const { soundEnabled } = useSoundEnabled();
  const { isMobile } = useMobile();

  return (
    <>
      <main
        className={`w-full h-[300vh]  ${
          isMobile ? 'overflow-y-auto' : 'overflow-y-hidden'
        } `}
      >
        <section className="w-full h-screen">
          <div
            className={`z-10 text-white absolute  ${
              isMobile
                ? 'left-1 p-10 w-full top-96 h-screen mt-0 translate-y-20'
                : 'top-80 left-72 mt-5 p-16 w-2/3 h-2/4'
            } `}
          >
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>In den Tiefen unseres Gehirns verbirgt</p>
              <p>sich der Schlüssel zur unserer inneren Stärke.</p>
              <p>Die Psychotherapie öffnet die Tore zur Veränderung</p>
              <p>und zum Wachstum, indem wir die einzigartige Landkarte</p>
              <p>der Gedanken gemeinsam erforschen.</p>
              <h2>Hier beginnt die Reise zur ganzheitlichen Gesundheit.</h2>
            </div>
          </div>

          <View className=" !fixed  top-0 left-0 flex h-screen w-full ">
            {soundEnabled && (
              <PositionalAudio
                distance={2}
                autoplay
                loop
                url="../../../audio_background/audiocoffee.wav"
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
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>In meiner Praxis schlagen Herz, Kopf und Bauch im Einklang.</p>
              <p>Das Ziel ist es, Sie emotional zu unterstützen,</p>
              <p>um Ihr inneres Gleichgewicht zu finden.</p>
              <p>Ich möchte mit Ihnen gemeinsam Ihre Ressourcen stärken,</p>
              <p>an Ihren Zielen arbeiten und Sie bei der Gestaltung</p>
              <p>
                eines selbstbestimmten und zufriedenen Lebens zu unterstützen.
              </p>
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
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>Ähnlich wie jeder DNA-Strang bei jedem Menschen</p>
              <p>einzigartig ist, ist auch bei jedem Menschen die eigene</p>
              <p>Emotion, Denk- und Verhaltensmuster einzigartig.</p>
              <p>Jeder Mensch hat die Kapazität zu lernen und</p>
              <p>sich zu verändern, zu wachsen und zu einem</p>
              <p>selbstbestimmten Wesen zu werden.</p>
              <p>Es geht um die Veränderung in der gesamten Art</p>
              <p>der Organisation und der Art der Reaktion.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
