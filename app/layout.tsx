import type { Metadata } from 'next';
import { Days_One } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/FooterSection';
import ScrollToTopButton from '@/components/main/ScrollToTopButton';
const inter = Days_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Volodymyr | Code_PRO',
  description: 'Frontend & Mobile Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x:hidden`}>
          <StarsCanvas />
          <Navbar />
          {children}
          {/* <Footer /> */}
          <ScrollToTopButton />
      </body>
    </html>
  );
}
