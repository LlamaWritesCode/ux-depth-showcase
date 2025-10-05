import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { HoneycombBackground } from '@/components/HoneycombBackground';

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      <HoneycombBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
