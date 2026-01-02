import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { CustomCursor } from '@/components/CustomCursor';

const Index = () => {
  return (
    <>
      <CustomCursor />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Index;
