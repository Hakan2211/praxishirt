import '@/app/globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Layout } from '@/components/canvas/Layout';
import SoundEnabledProvider from '@/components/context/SoundEnabledProvider';
import IsMobileProvider from '@/components/context/IsMobileProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const display = localFont({
  src: '../../public/fonts/aoboshi-one-v10-latin-regular.woff2',
  display: 'swap',
  variable: '--font-display',
});

export const metadata = {
  title: {
    default: 'Praxis Hirt – Psychotherapie & Neuropsychologie in Bruchsal',
    template: '%s | Praxis Hirt Bruchsal',
  },
  description:
    'Praxis für Psychotherapie und Neuropsychologie in Bruchsal – Filiz Hirt, Psychologische Psychotherapeutin (VT) und Klinische Neuropsychologin.',
  metadataBase: new URL('https://praxishirt.de'),
  keywords: [
    'Filiz Hirt',
    'Psychotherapie',
    'Verhaltenstherapie',
    'Neuropsychologie',
    'Bruchsal',
    'PraxisHirt',
    'Praxis Hirt',
  ],
  openGraph: {
    title: 'Praxis Hirt – Psychotherapie in Bruchsal',
    description:
      'Psychotherapie, neuropsychologische Diagnostik und interkulturelle Psychotherapie in Bruchsal.',
    url: 'https://praxishirt.de',
    siteName: 'Praxis Hirt',
    locale: 'de_DE',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#063058',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">
        <IsMobileProvider>
          <SoundEnabledProvider>
            <Layout>{children}</Layout>
          </SoundEnabledProvider>
        </IsMobileProvider>
      </body>
    </html>
  );
}
