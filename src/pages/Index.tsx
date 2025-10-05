import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { NewspaperComic } from '@/components/NewspaperComic';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <section className="py-20 px-4">
        <NewspaperComic />
      </section>
      <Work />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
