import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="z-10 text-white w-full h-40 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href={'/homepage'}>
            <Logo />
          </Link>
          <ul className="hidden md:flex gap-x-6 text-white text-lg hover:cursor-pointer">
            <li>
              <Link
                className=" hover:text-red-300"
                href={'/homepage/leistungen'}
              >
                Leistungen
              </Link>
            </li>
            <li>
              <Link className=" hover:text-red-300" href={'/homepage/team'}>
                Team
              </Link>
            </li>
            <li>
              <Link className=" hover:text-red-300" href={'/homepage/kontakt'}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
