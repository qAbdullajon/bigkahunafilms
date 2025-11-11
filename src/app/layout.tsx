import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'BIG KAHUNA FILMS - A Creative Production House',
  description: 'Welcome to BIG KAHUNA FILMS, an award-winning creative production house, with offices in Dubai and Beirut.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'BIG KAHUNA FILMS - A Creative Production House',
    description: 'Welcome to BIG KAHUNA FILMS, an award-winning creative production house, with offices in Dubai and Beirut.',
    url: 'https://bigkahunafilms.vercel.app',
    images: [
      {
        url: '/Opengraph Image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIG KAHUNA FILMS - A Creative Production House',
    description: 'Welcome to BIG KAHUNA FILMS, an award-winning creative production house, with offices in Dubai and Beirut.',
    images: ['/Opengraph Image.jpg'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`suppressHydrationWarning antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
