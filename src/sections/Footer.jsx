import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative border-t border-white/10 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-orbitron font-bold text-gradient mb-2">AG</a>
            <p className="text-gray-500 text-sm">© 2024 Alex Gravity. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            {[<Github />, <Linkedin />, <Twitter />, <Instagram />].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: '#7000ff' }}
                className="text-gray-400 transition-colors"
              >
                {React.cloneElement(icon, { size: 20 })}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-bold">
            Designed & Built with <span className="text-primary-light">❤</span> by Alex Gravity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
