import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Coffee, Palette, Sparkles } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const interests = [
    { icon: Palette, label: 'Design Systems' },
    { icon: Heart, label: 'User Research' },
    { icon: Coffee, label: 'Coffee Chats' },
    { icon: Sparkles, label: 'Innovation' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-100 shadow-xl shadow-purple-100/50"
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-purple-600 font-medium">UX/UI and Product Designer</span> with a passion 
                for creating exceptional digital experiences. With over 5 years of experience, I've worked with startups 
                and established companies to bring their visions to life.
              </p>
              <p>
                My approach combines <span className="text-pink-500 font-medium">user-centered design thinking</span> with 
                a deep understanding of modern technology. I believe great design is invisible—it simply works, delighting 
                users while achieving business goals.
              </p>
              <p>
                When I'm not designing, you'll find me exploring the latest design trends, experimenting with new tools, 
                or sharing knowledge with the design community.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {interests.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <item.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Awards Won', value: '12' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
