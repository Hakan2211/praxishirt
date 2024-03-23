'use client';

import React, { Suspense } from 'react';

import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import { Dance } from '@/components/leistungen/Dance';
import { Chess } from '@/components/leistungen/Chess';
import Scroll from '@/components/scroll/Scroll';
import { useMobile } from '@/components/context/IsMobileProvider';
// import { Neuron } from '@/components/leistungen/Neuron';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

// const EyeBrain = dynamic(
//   () => import('@/components/leistungen/eyeBrain').then((mod) => mod.EyeBrain),
//   { ssr: false }
// );
const Neuron = dynamic(
  () => import('@/components/leistungen/Neuron').then((mod) => mod.Neuron),
  { ssr: false }
);

function Leistungen() {
  const { soundEnabled } = useSoundEnabled();

  const { isMobile } = useMobile();

  return (
    <>
      <main className={`w-full h-[300vh] ${isMobile ? 'h-[300vh]' : ''} `}>
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
              <p>Unsere Verhaltenstherapie bietet einen individuellen Weg</p>
              <p>
                zur Verbesserung Ihrer psychischen Gesundheit. Durch gezielte
              </p>
              <p>
                Analyse und Anpassung von Denk- und Verhaltensmustern
                unterstützen
              </p>
              <p>wir Sie dabei, positive Veränderungen herbeizuführen.</p>
              <p>Gemeinsam schaffen wir eine sichere Umgebung, um belastende</p>
              <p>
                Situationen zu bewältigen und Ihre Lebensqualität zu steigern.
              </p>
              <p>
                Die Verhaltenstherapie in unserer Praxis ist darauf
                ausgerichtet,
              </p>
              <p>
                {' '}
                Sie in Ihrer persönlichen Entwicklung zu begleiten und
                nachhaltige
              </p>
              <p>positive Veränderungen zu fördern.</p>
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
              <Chess scale={0.004} position={[0, -2.7, 4]} />
            ) : (
              <Chess scale={0.007} position={[0.6, -2.7, 4]} />
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
              <p>Unsere neuropsychologische Diagnostik und Therapie bieten</p>
              <p>
                {' '}
                einen präzisen Einblick in die Funktionsweise Ihres Gehirns.
              </p>
              <p>Durch umfassende Tests und Analysen identifizieren wir</p>
              <p>
                kognitive Herausforderungen und entwickeln personalisierte
                Therapieansätze.
              </p>
              <p>
                Unser Ziel ist es, durch gezielte Interventionen die
                neurologische Funktion{' '}
              </p>
              <p>
                zu optimieren und Ihnen dabei zu helfen, Ihre kognitiven
                Fähigkeiten zu stärken.
              </p>
              <p>
                In unserer Praxis steht die neuropsychologische Diagnostik und
                Therapie{' '}
              </p>
              <p>im Dienste Ihrer mentalen Gesundheit und Wohlbefindens.</p>
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
              <p>
                Unsere interkulturelle Psychotherapie respektiert die Vielfalt
              </p>
              <p>
                individueller Hintergründe und schafft einen Raum für
                kultursensible Unterstützung.
              </p>
              <p>
                Wir erkennen an, dass kulturelle Einflüsse die psychische
                Gesundheit beeinflussen können,
              </p>
              <p>
                und bieten eine maßgeschneiderte Therapie, die Ihre persönlichen
              </p>
              <p>kulturellen Bedürfnisse berücksichtigt.</p>
              <p>
                Gemeinsam navigieren wir durch kulturelle Unterschiede, um Ihre
                seelische Gesundheit
              </p>
              <p>
                {' '}
                zu fördern und Ihnen dabei zu helfen, Ihre Lebensqualität zu
                verbessern.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Leistungen;
