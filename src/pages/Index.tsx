import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <div className="newspaper-fold" />
      <About />
      <div className="newspaper-fold" />
      <Work />
      <div className="newspaper-fold" />
      <Skills />
      <div className="newspaper-fold" />
      <Contact />
    </main>
  );
};

export default Index;
