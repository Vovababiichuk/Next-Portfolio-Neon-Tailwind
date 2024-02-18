import type { Metadata } from 'next';
import { Days_One } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/FooterSection';
import ScrollToTopButton from '@/components/main/ScrollToTopButton';

const inter = Days_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Volodymyr Babiichuk | Code_PRO: Frontend, Mobile, React, Next.js, Java Script, Type Script, Tailwind CSS, and Flutter Developer Portfolio and Services",
  description: "Explore the diverse portfolio of Volodymyr Babiichuk, showcasing expertise in frontend development using React and Next.js, along with styling proficiency in Tailwind CSS and SCSS. Additionally, delve into mobile app development, including Flutter, Dart and React Native projects. Discover innovative solutions and engaging designs tailored to modern digital experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head> */}
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x:hidden`}>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
          <ScrollToTopButton />
      </body>
    </html>
  );
}
