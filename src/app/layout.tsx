import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import './layout.css';

export const metadata: Metadata = {
  title: 'Child Rights Games',
  description: 'Interactive games teaching child rights in Kenya',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
