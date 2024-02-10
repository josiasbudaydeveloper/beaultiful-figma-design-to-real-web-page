import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Properties',
  description: "I just turned a beautiful Figma Design in a real web page using by Front-End skills using Next.js 14, TypeScript and Tailwind.css",
  openGraph: {
    title: 'Beautiful Figma Design to Web Page',
    description: 'I just turned a beautiful Figma Design in a real web page using by Front-End skills using Next.js 14, TypeScript and Tailwind.css',
    url: 'https://josiasbudaydeveloper-figma-web-design-to-real-web-page.vercel.app/'
  }
};

export default function Properties() {
  return (
    <main>
      Properties Page!
    </main>
  )
}