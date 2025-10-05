import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { NewspaperDoodles } from './NewspaperDoodles';

// Crossword grid: each cell is {letter, number (if clue start), isBlack}
const crosswordGrid = [
  ['1F', 'I', 'G', 'M', 'A', '█', '█', '█', '█', '█', '█', '█'],
  ['█', '█', '█', '█', '█', '█', '2S', 'K', 'E', 'T', 'C', 'H'],
  ['█', '█', '█', '█', '█', '█', 'Y', '█', '█', '█', '█', '█'],
  ['3P', 'R', 'O', 'T', 'O', 'T', 'Y', 'P', 'I', 'N', 'G', '█'],
  ['█', '█', '█', '█', '█', '4F', 'R', 'A', 'M', 'E', 'R', '█'],
  ['5D', 'E', 'S', 'I', 'G', 'N', '█', 'S', '█', '█', '█', '█'],
  ['█', '█', '█', '█', '█', '█', '█', 'Y', '█', '█', '█', '█'],
  ['█', '6W', 'I', 'R', 'E', 'F', 'R', 'A', 'M', 'I', 'N', 'G'],
  ['█', '█', '█', '█', '█', '█', '█', 'T', '█', '█', '█', '█'],
  ['█', '█', '█', '█', '█', '█', '█', 'E', '█', '█', '█', '█'],
  ['█', '█', '█', '█', '█', '█', '█', 'M', '█', '█', '█', '█'],
  ['█', '█', '█', '█', '█', '█', '█', 'S', '█', '█', '█', '█'],
];

const clues = {
  across: [
    { num: 1, clue: 'Popular design tool for UI/UX', answer: 'FIGMA' },
    { num: 2, clue: 'Mac design app by Bohemian Coding', answer: 'SKETCH' },
    { num: 3, clue: 'Creating interactive models', answer: 'PROTOTYPING' },
    { num: 4, clue: 'Motion design and prototyping tool', answer: 'FRAMER' },
    { num: 5, clue: 'Creating visual solutions', answer: 'DESIGN' },
    { num: 6, clue: 'Low-fidelity sketches', answer: 'WIREFRAMING' },
  ],
  down: [
    { num: 4, clue: 'Adobe experience design tool', answer: 'XD' },
    { num: 6, clue: 'Organized component libraries', answer: 'SYSTEMS' },
  ],
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background border-t-4 border-foreground">
      <NewspaperDoodles />
      
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_2px,currentColor_3px)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block border-4 border-foreground px-8 py-3 bg-foreground text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
                Skills Crossword
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Crossword Grid */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-4 border-foreground bg-card p-8"
            >
              <div className="flex justify-center">
                <div className="inline-grid gap-0" style={{ gridTemplateColumns: `repeat(${crosswordGrid[0].length}, minmax(0, 1fr))` }}>
                  {crosswordGrid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => {
                      const isBlack = cell === '█';
                      const hasNumber = cell.match(/^\d/);
                      const number = hasNumber ? cell.match(/^\d+/)?.[0] : null;
                      const letter = hasNumber ? cell.replace(/^\d+/, '') : cell;
                      
                      return (
                        <motion.div
                          key={`${rowIndex}-${colIndex}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 + (rowIndex * 0.02) + (colIndex * 0.01) }}
                          className={`
                            w-8 h-8 md:w-10 md:h-10 border border-foreground relative
                            ${isBlack ? 'bg-foreground' : 'bg-background'}
                          `}
                        >
                          {!isBlack && (
                            <>
                              {number && (
                                <span className="absolute top-0 left-0.5 text-[8px] md:text-[10px] font-mono font-bold">
                                  {number}
                                </span>
                              )}
                              <div className="flex items-center justify-center h-full font-mono font-bold text-sm md:text-base">
                                {letter}
                              </div>
                            </>
                          )}
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </div>
            </motion.div>

            {/* Clues */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-4 border-foreground bg-card p-8"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 pb-2 border-b-2 border-foreground">
                    Across
                  </h3>
                  <div className="space-y-2">
                    {clues.across.map((clue, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        className="text-sm"
                      >
                        <span className="font-bold font-mono">{clue.num}.</span>{' '}
                        <span className="font-serif">{clue.clue}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 pb-2 border-b-2 border-foreground">
                    Down
                  </h3>
                  <div className="space-y-2">
                    {clues.down.map((clue, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                        className="text-sm"
                      >
                        <span className="font-bold font-mono">{clue.num}.</span>{' '}
                        <span className="font-serif">{clue.clue}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 border-4 border-foreground p-8 bg-foreground text-background text-center"
          >
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <p className="mt-4 text-sm font-mono uppercase tracking-widest">
              — Steve Jobs
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
