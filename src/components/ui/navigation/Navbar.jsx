'use client';

import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

export default function Navbar() {
  const pathname = usePathname();
  const { soundEnabled, setSoundEnabled } = useSoundEnabled();

  return (
    <nav className="z-10  w-full h-40 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href={'/homepage'}>
            <Logo />
          </Link>
          <ul className=" md:flex gap-x-6  text-lg hover:cursor-pointer">
            <li>
              <Link
                className={`${
                  pathname === '/homepage/leistungen'
                    ? 'text-red-300'
                    : 'text-white'
                } hover:text-red-300`}
                href={'/homepage/leistungen'}
              >
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/homepage/team' ? 'text-red-300' : 'text-white'
                } hover:text-red-300`}
                href={'/homepage/team'}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/homepage/kontakt'
                    ? 'text-red-300'
                    : 'text-white'
                } hover:text-red-300`}
                href={'/homepage/kontakt'}
              >
                Kontakt
              </Link>
            </li>
            <div
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-16 h-8 rounded-full text-white text-center bg-red-300 ${
                soundEnabled ? 'animate-pulse' : ''
              } `}
            >
              Audio
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
