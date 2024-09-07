'use client';

import React, { Suspense } from 'react';

import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import { Dance } from '@/components/leistungen/Dance';

import Scroll from '@/components/scroll/Scroll';
import { useMobile } from '@/components/context/IsMobileProvider';
import Footer from '@/components/footer/footer';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

const Neuron = dynamic(
  () => import('@/components/leistungen/Neuron').then((mod) => mod.Neuron),
  { ssr: false }
);

const Earth = dynamic(
  () => import('@/components/leistungen/Earth').then((mod) => mod.Earth),
  { ssr: false }
);

function Leistungen() {
  const { soundEnabled } = useSoundEnabled();

  const { isMobile } = useMobile();

  return (
    <>
      <div
        className={`w-full  ${
          isMobile ? 'overflow-y-auto' : 'overflow-y-hidden'
        } `}
      >
        <section className="w-full h-screen">
          <div
            className={`z-10 text-white absolute top-80  ${
              isMobile
                ? 'left-1 p-10 w-full h-screen mt-0'
                : 'left-72 mt-5 p-16 w-2/3 h-2/4'
            }`}
          >
            <h1 className={`pb-3 mb-5  ${isMobile ? 'text-xl' : 'text-5xl'} `}>
              <span className="pr-2 text-red-300">Verhaltenstherapie</span>
            </h1>
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>Die Verhaltenstherapie bietet einen individuellen Weg</p>
              <p>zur Verbesserung der psychischen Gesundheit. Durch gezielte</p>
              <p>
                Analyse und Anpassung von Denk- und Verhaltensmustern
                unterstütze
              </p>
              <p>ich Sie dabei, eine individuelle Veränderung zu bewegen.</p>
              <p>
                Auf dieser Website finden Sie {''}
                <a
                  className="text-red-300 hover:text-red-500"
                  target="_blank"
                  href="https://www.psychotipps.com/"
                >
                  Psychotipps
                </a>
                .
              </p>
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

            {isMobile ? (
              <Dance
                scale={0.1}
                position={[-0.5, 0.2, 4]}
                rotation={[Math.PI / 18, 0, 0]}
              />
            ) : (
              <Dance
                scale={0.1}
                position={[0.2, -0.1, 4]}
                rotation={[Math.PI / 18, 0, 0]}
              />
            )}

            {isMobile ? (
              <Neuron
                scale={0.2}
                position={[-0.1, -1.2, 4]}
                rotation={[0, Math.PI / 2, 0]}
              />
            ) : (
              <Neuron
                scale={0.2}
                position={[0.7, -1.4, 4]}
                rotation={[0, Math.PI / 2, 0]}
              />
            )}

            {isMobile ? (
              <Earth scale={0.02} position={[0, -2.4, 4]} />
            ) : (
              <Earth scale={0.03} position={[0.6, -2.3, 4]} />
            )}

            <Suspense fallback={null}>
              <Background />
              <Lightsource />
            </Suspense>
            <Scroll />
          </View>
        </section>
        <section className="w-full h-screen">
          <div
            className={`z-10 text-white absolute top-[90rem] ${
              isMobile
                ? 'left-1 p-10 w-full h-screen mt-0'
                : 'left-72 mt-5 p-16 w-2/3 h-2/4'
            } `}
          >
            <h1 className={`pb-3 mb-5 ${isMobile ? 'text-xl' : 'text-4xl'} `}>
              <span className="pr-2 text-red-300">
                Neuropsychologische Diagnostik & Therapie
              </span>
            </h1>
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>Die neuropsychologische Diagnostik und Therapie bietet</p>
              <p>
                {' '}
                einen präzisen Einblick in die Funktionsweise Ihres Gehirns.
              </p>
              <p>Sie ist eine umfangreiche Untersuchung von kognitiven und</p>
              <p>
                emotional affektiven Funktionen und deren Auswirkungen auf das
                Verhalten.
              </p>
              <p>
                Folgende Funktionsbereiche werden beispielsweise untersucht:
              </p>
              <p className="mt-8">&#8226; Aufmerksamkeitsstörungen </p>
              <p>&#8226; Gedächtnisstörungen </p>
              <p>&#8226; Exekutive Störungen </p>
              <p>&#8226; Affektive und emotionale Störungen </p>
              <p>&#8226; Verhaltensstörungen </p>
              <p className="mb-8">
                &#8226; Krankheitseinsicht und Krankheitsverarbeitung{' '}
              </p>
              <p>Sie werden in meiner Praxis ausführlich informiert.</p>
              <p>
                Auf der Website{' '}
                <a
                  className="text-red-300 hover:text-red-500"
                  target="_blank"
                  href="https://www.gnp.de/"
                >
                  Gesellschaft für Neuropsychologie e.V.
                </a>{' '}
              </p>
              <p>finden Sie ausführliche Informationen.</p>
            </div>
          </div>
        </section>
        <section className="w-full h-screen">
          <div
            className={`z-10 text-white absolute top-[165rem]  ${
              isMobile
                ? 'left-1 p-10 w-full h-screen mt-0'
                : 'left-72 mt-5 p-16 w-2/3 h-2/4'
            } `}
          >
            <h1 className={`pb-3 mb-5  ${isMobile ? 'text-xl' : 'text-4xl'} `}>
              <span className="pr-2 text-red-300">
                Interkulturelle Psychotherapie
              </span>
            </h1>
            <div className="text-xl leading-9 text-zinc-200 ">
              <p>Die interkulturelle Psychotherapie respektiert die Vielfalt</p>
              <p>
                individueller Hintergründe und schafft einen Raum für
                kultursensible Unterstützung.
              </p>
              <p>
                Ich erkenne an, dass kulturelle Einflüsse die psychische
                Gesundheit beeinflussen,
              </p>
              <p>
                und biete eine individuelle Therapie an, die Ihre persönlichen
              </p>
              <p>kulturellen Bedürfnisse berücksichtigt.</p>
            </div>
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}

export default Leistungen;
