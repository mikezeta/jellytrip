import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JellyTrip — Deploy Anywhere',
  description: 'Fully responsive static site ready for deployment on Vercel or any static host',
};

/**
 * Root layout for the JellyTrip site.
 *
 * This component wraps all pages with a consistent HTML and body tag and
 * applies the Inter font. Additional providers or context wrappers can
 * be placed here if needed.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}