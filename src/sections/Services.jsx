import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Shield, Zap, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building robust, scalable, and high-performance web applications using modern technologies.',
      icon: <Globe size={24} className="text-secondary" />
    },
    {
      title: 'Mobile Solutions',
      description: 'Creating cross-platform mobile experiences that feel native and responsive.',
      icon: <Smartphone size={24} className="text-primary-light" />
    },
    {
      title: 'AI Integration',
      description: 'Implementing intelligent features and automation using state-of-the-art AI models.',
      icon: <Zap size={24} className="text-accent" />
    }
  ];

  return (
    <section id="services" className="py-12 relative font-mono">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-primary-light text-sm mb-8 tracking-tighter">&gt; cat ./services.json</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-editor-sidebar border border-editor-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-editor-bg flex items-center justify-center mb-6 border border-editor-border group-hover:scale-110 transition-transform duration-300 text-primary">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-editor-activeText font-inter group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-editor-text text-sm leading-relaxed font-inter">{service.description}</p>
              
              <div className="mt-8 flex items-center gap-2 text-[10px] text-editor-text opacity-50 group-hover:opacity-100 transition-opacity">
                <Shield size={12} />
                <span>Enterprise Grade</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
