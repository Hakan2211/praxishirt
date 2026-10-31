import Footer from '@/components/footer/footer';
import Navbar from '@/components/ui/navigation/Navbar';

export const metadata = {
  title: {
    default: 'Willkommen | Praxis Hirt Bruchsal',
    template: '%s | Praxis Hirt Bruchsal',
  },
};

export default function HomepageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main id="inhalt" className="relative">
        {children}
      </main>
      <Footer />
    </>
  );
}
