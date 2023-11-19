import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/canvas/Layout';
import SoundEnabledProvider from '@/components/context/SoundEnabledProvider';
import { ScrollProvider } from '@/components/scroll/ScrollContext';
import IsMobileProvider from '@/components/context/IsMobileProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Praxishirt',
  description: 'die Psychotherapie in Bruchsal, geleitet bei Filiz Hirt',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IsMobileProvider>
          <SoundEnabledProvider>
            <ScrollProvider>
              <Layout>{children}</Layout>
            </ScrollProvider>
          </SoundEnabledProvider>
        </IsMobileProvider>
      </body>
    </html>
  );
}
