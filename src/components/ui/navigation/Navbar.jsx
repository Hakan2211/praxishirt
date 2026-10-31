'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Logo from './Logo';
import { NAV_LINKS } from './navLinks';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

function SoundToggle() {
  const { soundEnabled, setSoundEnabled } = useSoundEnabled();
  const Icon = soundEnabled ? BiVolumeFull : BiVolumeMute;
  return (
    <button
      type="button"
      onClick={() => setSoundEnabled(!soundEnabled)}
      aria-pressed={soundEnabled}
      aria-label={
        soundEnabled
          ? 'Hintergrundklang ausschalten'
          : 'Hintergrundklang einschalten'
      }
      title={soundEnabled ? 'Ton aus' : 'Ton an'}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-brand-rose transition-colors hover:border-brand-rose hover:bg-brand-rose/10"
    >
      <Icon size={22} />
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when navigating.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const mobileLinks = [
    { href: '/homepage', label: 'Startseite' },
    ...NAV_LINKS,
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'border-b border-white/10 bg-brand-deep/70 backdrop-blur-lg'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-brand-rose focus:px-4 focus:py-2 focus:text-brand-deep"
        >
          Zum Inhalt springen
        </a>
        <nav
          aria-label="Hauptnavigation"
          className="container mx-auto flex h-20 items-center justify-between px-5 md:h-24 md:px-10 lg:px-16"
        >
          <Link
            href="/homepage"
            className="group rounded-md"
            aria-label="Praxis Hirt – Startseite"
          >
            <Logo />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? 'page' : undefined}
                      className={`group relative py-2 text-[15px] font-medium tracking-wide transition-colors ${
                        active
                          ? 'text-brand-rose'
                          : 'text-zinc-200 hover:text-white'
                      }`}
                    >
                      {label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px bg-brand-rose transition-all duration-300 ${
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <SoundToggle />
            <Link
              href="/homepage/kontakt"
              className="btn-primary !px-5 !py-2.5 text-sm"
            >
              Termin anfragen
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <SoundToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white"
            >
              {open ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu (outside <header>: its backdrop-filter would trap a fixed child) */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-20 z-40 bg-brand-deep/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 pt-10">
          {mobileLinks.map(({ href, label }, i) => {
            const active = pathname === href;
            return (
              <li
                key={href}
                style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
                className={`transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`block border-b border-white/10 py-4 font-display text-3xl ${
                    active ? 'text-brand-rose' : 'text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="px-6 pt-10">
          <Link href="/homepage/kontakt" className="btn-primary w-full">
            Termin anfragen
          </Link>
        </div>
      </div>
    </>
  );
}
