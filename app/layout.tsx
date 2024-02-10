import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from '@/app/ui/shared/sections';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beautiful Figma Design to Web Page",
  description: "I just turned a beautiful Figma Design in a real web page using by Front-End skills using Next.js 14, TypeScript and Tailwind.css",
  openGraph: {
    title: 'Beautiful Figma Design to Web Page',
    description: 'I just turned a beautiful Figma Design in a real web page using by Front-End skills using Next.js 14, TypeScript and Tailwind.css',
    url: 'https://josiasbudaydeveloper-figma-web-design-to-real-web-page.vercel.app/',
    images: [
      {url: '/opengraph-image.png'}
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
