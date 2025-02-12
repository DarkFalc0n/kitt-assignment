import type { Metadata } from 'next';
import localfont from 'next/font/local';
import './globals.css';
import { TLayout } from '@/lib/types';

const neueMontrealRegular = localfont({
  src: [
    { path: '../public/fonts/NeueMontreal-Regular.otf', weight: '400' },
    { path: '../public/fonts/NeueMontreal-Medium.otf', weight: '500' }
  ],
  variable: '--neue-montreal'
});
export const metadata: Metadata = {
  title: 'Kitt Frontend Assignment',
  description: 'Generated by create next app'
};

const RootLayout: TLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${neueMontrealRegular.variable} treal mx-[120px] overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
