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

  const sendEmail = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`absolute  z-10 text-white w-full  flex items-center justify-center py-12 ${
          isMobile ? 'h-[150vh]' : ''
        } `}
      >
        <div
          className={`space-y-8 max-w-xl w-full  mx-auto p-8 bg-gray-800 rounded-lg ${
            isMobile ? 'w-4/5' : ''
          } `}
        >
          <h2
            className={`text-5xl font-bold text-center ${
              isMobile ? 'text-xl' : ''
            } `}
          >
            Kontaktiere uns
          </h2>
          <form onSubmit={sendEmail} className="space-y-5">
            <div className="space-y-2 flex flex-col">
              <label
                className={`text-3xl ${isMobile ? 'text-xl' : ''} `}
                htmlFor="name"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`bg-gray-700 rounded-lg text-2xl p-3 h-12 text-white border-none placeholder:text-2xl placeholder:p-3 ${
                  isMobile ? 'placeholder:text-lg' : ''
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-gray-700 rounded-lg text-2xl p-3 h-12 text-white border-none placeholder:text-2xl placeholder:p-3 ${
                  isMobile ? 'placeholder:text-lg' : ''
                } `}
                id="email"
                placeholder="Gib deine Email-Adresse ein"
                type="email"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label
                className={`text-3xl ${isMobile ? 'text-xl' : ''} `}
                htmlFor="message"
              >
                Nachricht
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`bg-gray-700 rounded-lg text-2xl p-3 text-white border-none min-h-[100px] h-44 placeholder:text-2xl placeholder:p-3 ${
                  isMobile ? 'placeholder:text-lg' : ''
                } `}
                id="message"
                placeholder="Gib deine Nachricht ein"
              />
            </div>
            <button
              className={`w-full h-12 text-3xl rounded-lg bg-red-300 hover:bg-red-400 transition-colors ${
                isMobile ? 'text-xl' : ''
              }`}
            >
              Senden
            </button>
          </form>
        </div>
      </div>
      <View
        className={`!fixed  top-0 left-0 flex h-screen w-full ${
          isMobile ? 'h-[200vh]' : ''
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
