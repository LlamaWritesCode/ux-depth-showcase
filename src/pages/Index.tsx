import { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Tools } from '@/components/Tools';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Work />
        <Tools />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Index;
