'use client';

import Image from 'next/image';

import React, { Suspense } from 'react';
import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

import { useMobile } from '@/components/context/IsMobileProvider';
import Footer from '@/components/footer/footer';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function ProfilePage() {
  const { soundEnabled } = useSoundEnabled();
  const { isMobile } = useMobile();

  return (
    <>
      <div
        className={`w-full ${
          isMobile ? 'overflow-y-auto' : 'overflow-y-hidden'
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

        <div className="z-10 absolute grid min-w-full  max-w-4xl grid-cols-[auto 1fr auto] px-4 gap-4 ">
          <div className="col-span-1"></div>
          <div className="col-start-2 max-w-[1000px]">
            <div className="w-5/6">
              <Image
                alt={'Filiz Hirt'}
                className="w-full rounded-lg object-cover"
                height={300}
                src={'/team/filiz.jpg'}
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <h2 className="text-4xl font-bold text-white">Filiz Hirt</h2>
              <div className="text-2xl  text-white">
                <h2>Diplom Psychologin</h2>
                <h2 className="">Psychologische Psychotherapeutin (VT)</h2>
                <h2>Klinische Neuropsychologin</h2>
              </div>
              <div className="mt-14 mb-14 text-2xl text-stone-50 dark:text-gray-400">
                <p className="text-4xl font-bold text-red-300">
                  Herzlich Willkommen
                </p>
                <p className="mt-8">
                  Ich freue mich Sie auf meiner Praxiswebseite begrüßen zu
                  dürfen.
                </p>
                <h2 className="mt-8 font-bold">Behandlungsansatz:</h2>
                <p className="mt-8">
                  Seit mehreren Jahren arbeite ich im klinischen und im
                  ambulanten Bereich mit Menschen, die in seelische und
                  psychische Notlage sind und{' '}
                  <span className="font-bold text-orange-200">
                    Hilfe zur Selbsthilfe
                  </span>{' '}
                  suchen.
                </p>
                <p className="mt-8">
                  Ich lege sehr viel Wert, wie Sie sich in der Therapie fühlen.
                  Eine vertrauensvolle und wertschätzende Beziehung ist mir für
                  unsere Zusammenarbeit sehr wichtig. Es ist mir wichtig, Sie
                  als Mensch kennenzulernen.
                </p>
                <p className="mt-8">
                  Ich möchte Ihnen einen sicheren Raum geben, in dem Sie sich
                  mit Ihren unangenehmen und schwierigen Themen
                  auseinandersetzen können. Alte Muster der Gewohnheiten zu
                  verändern und verlorengegangene Funktionen wiederherzustellen.
                  In diesem Prozess bekommen Sie von mir immer wieder
                  Rückmeldungen, wie Sie sich selbst freundlich und sanft
                  begegnen können.
                </p>
                <p className="mt-8">
                  Auf diesem Weg sind die biographischen Erfahrungen und alte
                  emotionale Verletzungen, die Ihr Verhalten auch heute stark
                  prägen, zu verarbeiten. In meiner Therapie ist es wichtig,
                  sich Selbst und eigenes Erleben zu verstehen, Ihr Leben nach
                  Ihren eigenen Bedürfnissen zu fokussieren.
                </p>
                <h2 className="mt-8 font-bold">Verhaltenstherapie:</h2>
                <p className="mt-8">
                  Verhaltenstherapie geht davon aus, dass jegliches Denken,
                  Gefühl und Verhalten als Muster erlernt ist ( durch Familie,
                  Gesellschaft, Kultur, Sprache, Freunde, Geschlecht,
                  Schulbildung, Beruf, Partnerschaft, Alter etc. ...).
                </p>
                <p className="mt-8">
                  Um zu erkennen, was genau problematisch ist, ist es wichtig,
                  das problematische Verhalten bewusst wahrzunehmen, um es
                  verändern zu können.
                </p>
                <p className="mt-8">
                  Verhaltenstherapie setzt an den prädispornierenden,
                  auslösenden und aufrechterhaltenden Problembedingungen an. Sie
                  ist zielorientiert, handlungsorientiert und bemüht sich um
                  andauernde Weiterentwicklung.
                </p>
                <h2 className="mt-8 font-bold">Ihr Weg in die Therapie:</h2>
                <p className="mt-8">
                  {' '}
                  Bitte machen Sie sich Gedanken über Ihre{' '}
                  <span className="font-bold text-orange-200">
                    eigene Beweggründe:
                  </span>
                </p>
                <p>&#8226; Was ist der Grund für meinen Weg in die Therapie?</p>
                <p>&#8226; Gehe ich aus eigener Motivation in die Therapie?</p>
                <p>&#8226; Was genau möchte ich (ver-)ändern?</p>
                <p>&#8226; Welche Ziele verfolge ich?</p>

                <h2 className="mt-8 font-bold">Behandlungspektrum:</h2>
                <ul className="mt-8">
                  <li>&#8226; Ängste - Phobien</li>
                  <li>&#8226; Depression</li>
                  <li>&#8226; Zwänge</li>
                  <li>&#8226; Trauer</li>
                  <li>&#8226; Trauma - Gewalt - Missbrauch</li>
                  <li>&#8226; Schmerzstörungen</li>
                  <li>&#8226; Somatische Störungen</li>
                  <li>
                    &#8226; Persönlichkeitsstörung - interaktionelle Probleme
                  </li>
                  <li>&#8226; Anpassungsprobleme</li>
                  <li>&#8226; Lebenskrisen</li>
                  <li>&#8226; Schlafstörung</li>
                  <li>&#8226; etc. ...</li>
                </ul>
                <p className="mt-8 font-bold">Abbrechnung:</p>
                <p className="mt-8 ">
                  &#8226; Mit allen gesetzlichen Krankenkassen besteht
                  Abbrechnungsmöglichkeit.
                </p>
                <p>&#8226; Private Krankenkassen (GOP - 2.8'fache)</p>
                <p>&#8226; Selbstzahler</p>
              </div>
            </div>
            <Footer />
          </div>

          <div className="col-span-1"></div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
