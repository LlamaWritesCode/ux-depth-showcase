import { Hero } from '@/components/Hero';
import { BreakingNewsTicker } from '@/components/BreakingNewsTicker';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BreakingNewsTicker />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
