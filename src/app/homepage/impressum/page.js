'use client';

import React, { Suspense } from 'react';
import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

import { useMobile } from '@/components/context/IsMobileProvider';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Impressum() {
  const { soundEnabled } = useSoundEnabled();
  const { isMobile } = useMobile();

  return (
    <div
      className={`w-full  ${
        isMobile ? 'overflow-y-auto h-[350dvh]' : 'overflow-y-hidden h-[210dvh]'
      } `}
    >
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

      <div className="z-10 absolute grid min-w-full max-w-4xl grid-cols-[auto 1fr auto] px-4 gap-0 ">
        <div className="col-span-1"></div>
        <div className="col-start-2 max-w-[1000px]">
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-4xl font-bold text-white underline underline-offset-4">
              Impressum
            </h2>

            <div className="mt-14 mb-14 text-2xl text-stone-50 dark:text-gray-400">
              <h2 className="text-2xl font-bold">
                Anschrift & Erreichbarkeit:
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>Praxis für Psychotherapie und Neuropsychologie</p>
                <p>Filiz Hirt</p>
                <p>Styrumstr. 20</p>
                <p>76646 Bruchsal</p>
                <p>Telefon: 07251 / 7242112</p>
                <p>Fax: 07251 / 7242113</p>
                <p>E-Mail: hirtpraxis@gmail.com</p>
                <p>
                  Web:{' '}
                  <a
                    className="text-red-300 hover:text-red-500"
                    target="_blank"
                    href="https://www.praxishirt.de"
                  >
                    www.praxishirt.de
                  </a>
                </p>
              </div>
              <h2 className="mt-20 font-bold">
                Verantwortlich für den Inhalt:
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>Dipl. Psych. Filiz Hirt</p>
                <p>Styrumstr. 20</p>
                <p>76646 Bruchsal</p>
              </div>
              <h2 className="mt-20 font-bold">
                Gesetzliche Berufsbezeichnung:
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>Filiz Hirt</p>
                <p>Diplom Psychologin (Universität Braunschweig)</p>
                <p>
                  Psychologische Psychotherapeutin*/ Fachkunde (Verfahren):
                  Verhaltenstherapie - Approbation verliehen in der
                  Bundesrepublik Deutschland vom Regierungspräsidium Stuttgart.
                  Klinische Neuropsychologin* – Weiterbildung über die
                  Gesellschaft für Neuropsychologie e.V. (GNP e.V.; Fulda);
                  Anerkennung über die Landespsychotherapeutenkammer
                  Baden-Württemberg{' '}
                  <a
                    className="text-red-300 hover:text-red-500"
                    target="_blank"
                    href="https://www.lpk-bw.de"
                  >
                    (www.lpk-bw.de)
                  </a>
                </p>
                <p>Arztregister-Nummer:</p>
              </div>
              <p className="mt-20">
                * Die Titel „Psychologische Psychotherapeutin&quot; und
                „Klinische Neuropsychologin“ sind berufsrechtlich geschützt und
                dürfen nur von entsprechend qualifizierten Personen geführt
                werden.
              </p>
              <h2 className="mt-20 font-bold">Zuständige Aufsichtsbehörde:</h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Die zuständige Kammer ist die Landespsychotherapeutenkammer
                  Baden-Württemberg, Jägerstr. 40, 70174 Stuttgart, Internet:{' '}
                  <a
                    className="text-red-300 hover:text-red-500"
                    target="_blank"
                    href="https://www.lpk-bw.de"
                  >
                    www.lpk-bw.de
                  </a>
                  .
                </p>
              </div>
              <h2 className="mt-20 font-bold">
                Zuständige Kassenärztliche Vereinigung:
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Kassenärztliche Vereinigung Baden-Württemberg,
                  Bezirksdirektion Karlsruhe, Keßlerstr. 1, 76185 Karlsruhe,
                  Internet:{' '}
                  <a
                    className="text-red-300 hover:text-red-500"
                    target="_blank"
                    href="https://www.kvbawue.de"
                  >
                    www.kvbawue.de
                  </a>
                  .
                </p>
              </div>
              <h2 className="mt-20 font-bold">Berufsrechtliche Regelungen:</h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Unter diesem{' '}
                  <a
                    className="text-red-300 hover:text-red-500"
                    target="_blank"
                    href="https://www.lpk-bw.de/kammer/satzungen-ordnungen-richtlinien"
                  >
                    Link
                  </a>{' '}
                  können Sie die aktuelle Berufsordnung und das
                  Psychotherapeutengesetz downloaden.
                </p>
              </div>
              <div className="mt-20">
                <span className="font-bold">
                  Umsatzsteuer-Identifikation-Nr.{' '}
                </span>
                entfällt, denn psychotherapeutische Leistungen sind
                steuerbefreit, weil heilberuflich gemäß § 4 Nr. 14
                Umsatzsteuergesetz
              </div>
              <h2 className="mt-20 font-bold">
                Webdesign & Webentwicklung:{' '}
                <a
                  className="text-red-300 hover:text-red-500 font-normal"
                  target="_blank"
                  href="https://hakanda.com/about"
                >
                  Hakan Bilgic
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default Impressum;
