import { Metadata } from 'next';
import {
  Hero,
  PropertiesByAreaImages,
  PropertiesByAreaFeatures,
  LatestPropertiesRent1,
  LatestPropertiesRent2,
  Contact
} from '@/app/ui/home/sections';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <PropertiesByAreaImages />
      <PropertiesByAreaFeatures />
      <LatestPropertiesRent1 />
      <LatestPropertiesRent2 />
      <Contact />
    </main>
  );
}
