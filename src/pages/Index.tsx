import { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Tools } from '@/components/Tools';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

// Section order matches somya-singh.com:
// Hero -> About -> Work -> Tools (Expertise) -> Skills -> Contact

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
