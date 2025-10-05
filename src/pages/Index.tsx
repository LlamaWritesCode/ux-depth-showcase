import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { GradientWaves } from '@/components/GradientWaves';

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      <GradientWaves />
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
