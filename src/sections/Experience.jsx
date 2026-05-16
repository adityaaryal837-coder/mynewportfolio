import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Horizons',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Leading the development of cloud-native applications and mentoring junior developers.'
    },
    {
      company: 'Digital Dreams Studio',
      role: 'Frontend Architect',
      period: '2020 - 2022',
      description: 'Architected high-performance web applications using Next.js and complex animations.'
    },
    {
      company: 'Startup Lab',
      role: 'Web Developer',
      period: '2018 - 2020',
      description: 'Developed and launched multiple MVP products for fintech startups.'
    }
  ];

  return (
    <section id="experience" className="py-12 relative font-mono">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-primary-light text-sm mb-8 tracking-tighter">&gt; git log --oneline</h2>
        
        <div className="space-y-4 relative border-l border-editor-border ml-4 pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Git commit dot */}
              <div className="absolute left-[-37px] top-1.5 w-4 h-4 rounded-full bg-editor-bg border-2 border-primary group-hover:scale-125 transition-transform z-10" />
              
              <div className="bg-editor-sidebar border border-editor-border p-6 rounded-xl hover:border-primary/30 transition-all shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <span className="text-primary font-bold text-lg">{exp.company}</span>
                  <span className="text-xs text-editor-text bg-white/5 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <h4 className="text-editor-activeText text-sm mb-4">{exp.role}</h4>
                <p className="text-editor-text text-sm leading-relaxed font-inter">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
