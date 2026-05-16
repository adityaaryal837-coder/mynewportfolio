import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '3+' },
    { label: 'Open Source Contribs', value: '100+' },
    { label: 'Projects Shipped', value: '15+' },
    { label: 'Coffee Consumed', value: '∞' },
  ];

  return (
    <section id="about" className="py-12 relative overflow-hidden font-mono">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-primary-light text-sm mb-8 tracking-tighter">&gt; about.md</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none font-inter text-editor-text">
              <h1 className="text-4xl font-bold text-white mb-6 font-inter">Hi, I'm Aditya Aryal.</h1>
              <p className="text-lg leading-relaxed mb-4">
                I'm a full-stack developer based in Nepal, driven by the desire to build things that matter. 
                My journey in tech started with curiosity and has evolved into a professional career focused on 
                creating high-performance, visually stunning web applications.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I believe that good code is like good literature—it should be clear, concise, and purposeful. 
                I specialize in React, Node.js, and modern CSS frameworks, with a keen interest in AI-assisted development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-editor-sidebar border border-editor-border p-4 rounded-lg"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-editor-text font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden border border-editor-border bg-editor-sidebar p-2 shadow-2xl">
              <div className="w-full h-full rounded-lg bg-background flex items-center justify-center p-4">
                <div className="w-full space-y-4">
                  <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                  <div className="h-2 w-1/2 bg-primary/20 rounded-full" />
                  <div className="h-40 w-full bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-editor-text text-xs opacity-50"># visualization_coming_soon</span>
                  </div>
                  <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 blur-[80px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
