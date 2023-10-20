import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SessionProviders from '@/components/SessionProviders/SessionProviders';

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
          <Navigation></Navigation>
          {children}
        </SessionProviders>
      </body>
    </html>
  );
}
