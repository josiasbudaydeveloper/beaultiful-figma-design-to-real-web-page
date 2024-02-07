import {
  Hero,
  PropertiesByAreaImages,
  PropertiesByAreaFeatures,
  LatestPropertiesRent1,
  LatestPropertiesRent2,
  Contact
} from '@/app/ui/home/sections';

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
