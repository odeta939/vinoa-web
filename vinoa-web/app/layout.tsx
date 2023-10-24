import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SessionProviders from '@/components/SessionProviders/SessionProviders';
import Logo from '@/lib/assets/Logo';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wine Tastery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <SessionProviders>
          <div className='md:hidden grid justify-center'>
            <Link href={'/'}>
              <Logo color='#800020' />
            </Link>
          </div>
          <Navigation></Navigation>
          <div className='mb-36 md:mb-5'>{children}</div>
        </SessionProviders>
      </body>
    </html>
  );
}
