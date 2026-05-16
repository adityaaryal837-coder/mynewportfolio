import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Cpu, Globe, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={20} className="text-secondary" />,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    },
    {
      title: 'Backend',
      icon: <Database size={20} className="text-primary-light" />,
      skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Redis'],
    },
    {
      title: 'AI & Tools',
      icon: <Cpu size={20} className="text-accent" />,
      skills: ['Gemini API', 'OpenAI', 'Python', 'Docker', 'AWS'],
    }
  ];

  return (
    <section id="skills" className="py-12 relative font-mono">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-primary-light text-sm mb-8 tracking-tighter">&gt; stack.config.js</h2>
        
        <div className="bg-editor-sidebar border border-editor-border rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-editor-tabs border-b border-editor-border px-4 py-2 flex items-center justify-between">
            <span className="text-[10px] text-editor-text uppercase tracking-widest font-bold">Skills Inventory</span>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary">{cat.icon}</div>
                  <h4 className="text-lg font-bold text-editor-activeText">{cat.title}</h4>
                </div>
                
                <div className="space-y-3">
                  {cat.skills.map((skill, si) => (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i * 0.1) + (si * 0.05) }}
                      className="group flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors"
                    >
                      <span className="text-editor-text group-hover:text-editor-activeText transition-colors">{skill}</span>
                      <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-4/5" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-editor-sidebar/50 border border-editor-border rounded-xl">
          <div className="flex items-center gap-2 text-editor-text text-sm italic mb-2">
            <Code2 size={14} />
            <span>// Learning currently: Rust, Web3, Advanced LLM Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
