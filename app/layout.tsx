import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'الخدمات والعروض',
  description: 'جميع خدمات الدفع والعروض وباقات الرصيد في مكان واحد',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
          
        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17725566089"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17725566089');
            `,
          }}
        />{children}</body>
    </html>
  );
}
