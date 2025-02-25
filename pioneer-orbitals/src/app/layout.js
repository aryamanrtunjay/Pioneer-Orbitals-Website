import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pioneer Orbitals | Democratizing Space Access',
  description: 'Pioneer Orbitals is dedicated to democratizing space access by developing innovative Small-Lift Vehicles (SLVs) that provide affordable and reliable launch solutions for small satellites and payloads.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#393939] text-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}