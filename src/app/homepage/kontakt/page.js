'use client';

import React, { Suspense, useState } from 'react';

import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';

import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import { useMobile } from '@/components/context/IsMobileProvider';
import Scroll from '@/components/scroll/Scroll';
import { sendEmail } from '@/actions/sendEmail';
import toast, { Toaster } from 'react-hot-toast';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Kontakt() {
  const { soundEnabled } = useSoundEnabled();

  const { isMobile } = useMobile();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <main
        className={`w-full h-[100vh]  ${
          isMobile ? 'overflow-y-auto' : 'overflow-y-hidden'
        } `}
      >
        <div
          className={`absolute  z-10 text-white w-full  flex py-12 ${
            isMobile ? 'h-[150vh]' : 'h-screen'
          } `}
        >
          <div
            className={`space-y-8 max-w-xl  flex flex-col items-start  mx-auto p-8  rounded-lg ${
              isMobile ? 'w-4/5' : 'w-full'
            } `}
          >
            <h2
              className={`font-bold text-center underline underline-offset-4 ${
                isMobile ? 'text-xl' : 'text-4xl'
              } `}
            >
              Telefonische Erreichbarkeit:
            </h2>
            <div
              className={` text-center w-[100%] flex  ${
                isMobile ? 'text-xl' : 'text-4xl'
              } `}
            >
              <p>Tel. :</p>
              <p className="ml-auto">07251 / 7242112 </p>
            </div>

            <div
              className={` text-center flex w-[100%] ${
                isMobile ? 'text-xl' : 'text-4xl'
              } `}
            >
              <p>Mo - Fr</p>
              <p className="ml-auto">12:00 - 12:30</p>
            </div>
            <div
              className={` text-center flex w-[100%] ${
                isMobile ? 'text-xl' : 'text-4xl'
              } `}
            >
              <p>Fr</p> <p className="ml-auto">15:30 - 18:00</p>{' '}
            </div>

            <h2
              className={`font-bold text-center underline underline-offset-4 ${
                isMobile ? 'text-xl' : 'text-4xl'
              } `}
            >
              Adresse:
            </h2>
            <p className={`  ${isMobile ? 'text-xl' : 'text-4xl'} `}>
              Filiz Hirt
            </p>
            <p className={` ${isMobile ? 'text-xl' : 'text-4xl'} `}>
              Styrumstraße 20, 76646 Bruchsal
            </p>
            <p className={` ${isMobile ? 'text-xl' : 'text-4xl'} `}>
              Google Maps Link:{' '}
              <a
                className="text-red-300 hover:text-red-500"
                target="_blank"
                href="https://www.google.de/maps/place/Styrumstra%C3%9Fe+20,+76646+Bruchsal/@49.1278924,8.5952895,16z/data=!3m1!4b1!4m6!3m5!1s0x4797a3dfd93576c9:0xb49692b4fb0cbfd8!8m2!3d49.1278925!4d8.6001604!16s%2Fg%2F11bw3gl1ph?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
              >
                Styrumstraße 20, 76646 Bruchsal
              </a>{' '}
            </p>
          </div>
        </div>
        {/* {' '}
      <div
        className={`absolute  z-10 text-white w-full  flex items-center justify-center py-12 ${
          isMobile ? 'h-[150vh]' : 'h-screen'
        } `}
      >
        <div
          className={`space-y-8 max-w-xl  mx-auto p-8 bg-gray-800 rounded-lg ${
            isMobile ? 'w-4/5' : 'w-full'
          } `}
        >
          {' '}
          <Toaster position="top-right" />
          <h2
            className={`font-bold text-center ${
              isMobile ? 'text-xl' : 'text-5xl'
            } `}
          >
            Kontaktiere uns
          </h2>
          <form
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error('Nachricht konnte nicht gesendet werden', {
                  error,
                });
                return;
              }
              toast.success('Nachricht wurde gesendet');
              setName('');
              setEmail('');
              setMessage('');
            }}
            className="space-y-5"
          >
            <div className="space-y-2 flex flex-col">
              <label
                className={`${isMobile ? 'text-xl' : 'text-3xl'} `}
                htmlFor="name"
              >
                Name
              </label>
              <input
                name="senderName"
                value={name}
                maxLength={50}
                onChange={(e) => setName(e.target.value)}
                className={`bg-gray-700 rounded-lg text-2xl p-3 h-12 text-white border-none  placeholder:p-3 ${
                  isMobile ? 'placeholder:text-lg' : 'placeholder:text-2xl'
                } `}
                id="name"
                placeholder="Gib deinen Namen ein"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label
                className={`text-3xl ${isMobile ? 'text-xl' : ''} `}
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="senderEmail"
                required
                value={email}
                maxLength={500}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-gray-700 rounded-lg text-2xl p-3 h-12 text-white border-none  placeholder:p-3 ${
                  isMobile ? 'placeholder:text-lg' : 'placeholder:text-2xl'
                } `}
                id="email"
                placeholder="Gib deine Email-Adresse ein"
                type="email"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label
                className={`${isMobile ? 'text-xl' : 'text-3xl'} `}
                htmlFor="message"
              >
                Nachricht
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`bg-gray-700 rounded-lg text-2xl p-3 text-white border-none min-h-[100px] h-44  placeholder:p-3 ${
                  isMobile ? 'placeholder:text-lg' : 'placeholder:text-2xl'
                } `}
                id="message"
                placeholder="Gib deine Nachricht ein"
              />
            </div>
            <button
              type="submit"
              className={`w-full h-12  rounded-lg bg-red-300 hover:bg-red-400 transition-colors ${
                isMobile ? 'text-xl' : 'text-3xl'
              }`}
            >
              Senden
            </button>
          </form>
        </div>
      </div>{' '}
      <div className="absolute translate-y-96 md:translate-y-0 bottom-0 right-10 md:right-[660px] z-10 duration-300 ease-in-out transition-colors hover:text-red-300 hover:cursor-pointer  text-slate-50">
        <a href="https://www.praxishirt.de" target="__blank">
          <span>Impressum</span>
        </a>
      </div> */}
        <View
          className={`!fixed  top-0 left-0 flex  w-full ${
            isMobile ? 'h-[200vh]' : 'h-screen'
          }  `}
        >
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
            <Background />
            <Lightsource />
          </Suspense>
          {/* {isMobile ? (
          <>
            <Bird
              position={[0.05, 0.5, 3]}
              scale={0.08}
              rotation={[0, -Math.PI / 2 + 200, 0]}
            />
            <Scroll />
          </>
        ) : (
          <Bird
            position={[1.2, -0.5, 3]}
            scale={0.15}
            rotation={[0, -Math.PI / 2 + 200, 0]}
          />
        )} */}
        </View>
      </main>
    </>
  );
}

export default Kontakt;
