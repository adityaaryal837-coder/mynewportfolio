import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Monitor } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-10 font-mono">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="mb-6 text-primary flex items-center gap-2">
            <span className="text-editor-text">const</span>
            <span className="text-secondary">developer</span>
            <span className="text-editor-text">=</span>
            <span className="text-accent">{'{'}</span>
          </div>
          
          <div className="ml-6 space-y-2 mb-6">
            <div className="flex gap-2">
              <span className="text-secondary">name:</span>
              <span className="text-primary-light">'Aditya Aryal'</span>,
            </div>
            <div className="flex gap-2">
              <span className="text-secondary">role:</span>
              <span className="text-primary-light">'Full Stack Developer'</span>,
            </div>
            <div className="flex gap-2">
              <span className="text-secondary">specialty:</span>
              <span className="text-primary-light">'Creative Coding & AI'</span>
            </div>
          </div>

          <div className="text-accent mb-10">{'}'};</div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-8 font-inter">
            Building the <br />
            <span className="text-gradient">Future of Web</span> <br />
            with Precision.
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold flex items-center space-x-2 transition-all shadow-lg shadow-primary/25 text-sm sm:text-base"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="/Aditya_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 sm:px-6 sm:py-3 border border-editor-border hover:bg-white/5 text-editor-activeText rounded-lg font-bold flex items-center space-x-2 transition-all text-sm sm:text-base"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Visuals / Code Block */}
        <div className="relative mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-editor-sidebar border border-editor-border rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="bg-editor-tabs border-b border-editor-border px-4 py-2 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] text-editor-text uppercase tracking-widest">welcome.js</span>
            </div>
            <div className="p-4 sm:p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <pre className="text-editor-text">
                <code>
                  <span className="text-purple-400">import</span> {'{'} <span className="text-blue-400">Creative</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@aditya/vision'</span>;
                  <br /><br />
                  <span className="text-gray-500">// Initialize digital workspace</span><br />
                  <span className="text-purple-400">const</span> <span className="text-blue-400">portfolio</span> = <span className="text-purple-400">new</span> <span className="text-yellow-400">Project</span>({'{'}<br />
                  &nbsp;&nbsp;<span className="text-blue-400">owner</span>: <span className="text-green-400">'Aditya Aryal'</span>,<br />
                  &nbsp;&nbsp;<span className="text-blue-400">status</span>: <span className="text-green-400">'Building Amazing Things'</span>,<br />
                  &nbsp;&nbsp;<span className="text-blue-400">location</span>: <span className="text-green-400">'Kathmandu, Nepal'</span><br />
                  {'}'});<br /><br />
                  <span className="text-blue-400">portfolio</span>.<span className="text-yellow-400">launch</span>();
                </code>
              </pre>
            </div>
          </motion.div>
          
          {/* Floating badge - hidden on mobile to reduce clutter */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 glass-card p-3 sm:p-4 border border-primary/30 shadow-xl hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Monitor className="text-primary" size={20} />
              </div>
              <div>
                <div className="text-xs text-editor-text">Full Stack</div>
                <div className="text-sm font-bold">Web Specialist</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
