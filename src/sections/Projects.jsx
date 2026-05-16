import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Neural Nexus',
      description: 'AI-powered workflow automation platform with real-time analytics and neural processing.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
      tags: ['React', 'Gemini', 'Node.js'],
      link: '#',
      github: 'https://github.com/adityaaryal837-coder'
    },
    {
      title: 'Ether Real',
      description: 'Next-generation NFT marketplace with low-latency transactions and cinematic UI.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
      tags: ['Next.js', 'Solidity', 'Tailwind'],
      link: '#',
      github: 'https://github.com/adityaaryal837-coder'
    },
    {
      title: 'Quantum Dash',
      description: 'Futuristic business intelligence dashboard with 3D data visualization components.',
      image: 'https://images.unsplash.com/photo-1551288049-bbda486386a6?auto=format&fit=crop&q=80',
      tags: ['Three.js', 'React', 'D3.js'],
      link: '#',
      github: 'https://github.com/adityaaryal837-coder'
    }
  ];

  return (
    <section id="projects" className="py-12 relative font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-primary-light text-sm mb-2 tracking-tighter">&gt; ls ./projects</h2>
            <h3 className="text-4xl font-bold font-inter text-white">Latest Innovations</h3>
          </div>
          <motion.a
            href="https://github.com/adityaaryal837-coder"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 border border-editor-border hover:bg-white/5 text-editor-activeText rounded-lg flex items-center space-x-2 transition-all text-sm font-bold"
          >
            <span>View All Repos</span>
            <Github size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-editor-sidebar border border-editor-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden border-b border-editor-border">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-editor-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a href={project.link} className="p-2 bg-white text-black rounded-lg hover:bg-primary hover:text-white transition-all">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-editor-sidebar text-white rounded-lg hover:bg-white hover:text-black transition-all border border-editor-border">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-editor-bg border border-editor-border text-editor-text rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-3 text-editor-activeText font-inter group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-editor-text text-sm leading-relaxed mb-6 font-inter flex-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-[10px] text-editor-text mt-auto pt-4 border-t border-editor-border/50">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Active</span>
                  </div>
                  <span>main</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
