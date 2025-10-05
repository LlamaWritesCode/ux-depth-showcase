import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { FloatingParticles } from '@/components/FloatingParticles';

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      <FloatingParticles />
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
