import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { ClassifiedAds } from '@/components/ClassifiedAds';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Work />
      <Skills />
      <ClassifiedAds />
      <Contact />
    </main>
  );
};

export default Index;
