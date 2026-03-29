import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'A Casa Mia | Restaurant Italien à Kinshasa',
  description:
    'A Casa Mia - Restaurant italien authentique à Kinshasa. Découvrez une expérience culinaire italienne dans un cadre élégant et chaleureux. Réservez dès maintenant.',
  keywords: [
    'restaurant italien',
    'Kinshasa',
    'cuisine italienne',
    'pizza',
    'pâtes',
    'réservation',
    'restaurant congolais',
  ],
  authors: [{ name: 'A Casa Mia' }],
  creator: 'A Casa Mia',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CD',
    url: 'https://acasemia.vercel.app',
    siteName: 'A Casa Mia',
    title: 'A Casa Mia | Restaurant Italien à Kinshasa',
    description:
      'Restaurant italien authentique à Kinshasa. Découvrez notre cuisine méditerranéenne dans un cadre chaleureux.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554189683-58a92fd04cd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'A Casa Mia Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Casa Mia | Restaurant Italien à Kinshasa',
    description: 'Restaurant italien authentique à Kinshasa',
    images: [
      'https://images.unsplash.com/photo-1554189683-58a92fd04cd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#dc2626" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-white font-raleway">{children}</body>
    </html>
  );
}
