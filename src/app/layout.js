import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/canvas/Layout';
import SoundEnabledProvider from '@/components/context/SoundEnabledProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Praxishirt',
  description: 'die Psychotherapie in Bruchsal, geleitet bei Filiz Hirt',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SoundEnabledProvider>
          <Layout>{children}</Layout>
        </SoundEnabledProvider>
      </body>
    </html>
  );
}
