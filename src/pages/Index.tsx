import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { PaperPlanes } from '@/components/PaperPlanes';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <PaperPlanes />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
