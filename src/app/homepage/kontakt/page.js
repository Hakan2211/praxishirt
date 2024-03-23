'use client';

import React, { Suspense, useState } from 'react';

import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { Bird } from '@/components/kontakt/Bird';
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
      {' '}
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
      </div>
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
            url="../../../audio_background/Flight of the Inner Bird (Slowed Reverb).mp3"
          />
        )}
        <Common />
        <Suspense fallback={null}>
          <Background />
          <Lightsource />
        </Suspense>
        {isMobile ? (
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
        )}
      </View>
    </>
  );
}

export default Kontakt;
