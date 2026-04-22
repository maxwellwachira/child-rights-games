import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import './layout.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Child Rights Games',
  description: 'Interactive games teaching child rights in Kenya',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <header className="site-header">
          <Link href="/" className="site-logo">
            Child Rights Games
          </Link>
        </header>
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
