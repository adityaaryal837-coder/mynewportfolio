import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileCode, 
  User, 
  Layers, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  ChevronRight, 
  ChevronDown,
  Terminal,
  Cpu,
  Monitor,
  GitBranch,
  CheckCircle2,
  Bell
} from 'lucide-react';

const ActivityBar = () => {
  const icons = [
    { Icon: FileCode, path: '/', label: 'Explorer' },
    { Icon: Github, path: 'https://github.com/adityaaryal837-coder', external: true },
    { Icon: Linkedin, path: 'https://www.linkedin.com/in/aditya-aryal-862140314/', external: true },
    { Icon: Mail, path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="w-12 h-full bg-editor-activity border-r border-editor-border flex flex-col items-center py-4 gap-4">
      {icons.map((item, index) => (
        item.external ? (
          <a key={index} href={item.path} target="_blank" rel="noopener noreferrer" className="text-editor-text hover:text-editor-activeText transition-colors">
            <item.Icon size={24} />
          </a>
        ) : (
          <NavLink key={index} to={item.path} className={({ isActive }) => `text-editor-text hover:text-editor-activeText transition-colors ${isActive ? 'text-editor-activeText border-l-2 border-primary pl-1' : ''}`}>
            <item.Icon size={24} />
          </NavLink>
        )
      ))}
    </div>
  );
};

const Explorer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const files = [
    { name: 'Home.jsx', path: '/', icon: <FileCode size={16} className="text-blue-400" /> },
    { name: 'About.jsx', path: '/about', icon: <User size={16} className="text-orange-400" /> },
    { name: 'Skills.jsx', path: '/skills', icon: <Layers size={16} className="text-yellow-400" /> },
    { name: 'Services.jsx', path: '/services', icon: <Monitor size={16} className="text-purple-400" /> },
    { name: 'Experience.jsx', path: '/experience', icon: <Cpu size={16} className="text-green-400" /> },
    { name: 'Projects.jsx', path: '/projects', icon: <Briefcase size={16} className="text-green-400" /> },
    { name: 'Contact.jsx', path: '/contact', icon: <Mail size={16} className="text-purple-400" /> },
  ];

  return (
    <div className="w-64 h-full bg-editor-sidebar border-r border-editor-border flex flex-col font-mono text-sm">
      <div className="px-4 py-2 text-xs uppercase font-bold text-editor-text tracking-wider flex items-center justify-between">
        <span>Explorer</span>
      </div>
      <div className="flex flex-col">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-2 py-1 hover:bg-white/5 text-editor-activeText w-full text-left"
        >
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <span className="ml-1 font-bold uppercase text-[10px]">portfolio-aditya</span>
        </button>
        {isOpen && (
          <div className="flex flex-col ml-2">
            <div className="flex items-center px-2 py-1 text-editor-text">
              <ChevronDown size={16} />
              <span className="ml-1">src</span>
            </div>
            <div className="flex flex-col ml-4">
              <div className="flex items-center px-2 py-1 text-editor-text">
                <ChevronDown size={16} />
                <span className="ml-1">pages</span>
              </div>
              <div className="flex flex-col ml-4">
                {files.map((file) => (
                  <NavLink 
                    key={file.path} 
                    to={file.path}
                    className={({ isActive }) => `flex items-center px-2 py-1 hover:bg-white/5 transition-colors ${isActive ? 'bg-white/10 text-editor-activeText' : 'text-editor-text'}`}
                  >
                    <span className="mr-2">{file.icon}</span>
                    {file.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Tabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const tabs = [
    { name: 'Home.jsx', path: '/', icon: <FileCode size={14} className="text-blue-400" /> },
    { name: 'About.jsx', path: '/about', icon: <User size={14} className="text-orange-400" /> },
    { name: 'Skills.jsx', path: '/skills', icon: <Layers size={14} className="text-yellow-400" /> },
    { name: 'Services.jsx', path: '/services', icon: <Monitor size={14} className="text-purple-400" /> },
    { name: 'Experience.jsx', path: '/experience', icon: <Cpu size={14} className="text-green-400" /> },
    { name: 'Projects.jsx', path: '/projects', icon: <Briefcase size={14} className="text-green-400" /> },
    { name: 'Contact.jsx', path: '/contact', icon: <Mail size={14} className="text-purple-400" /> },
  ];

  return (
    <div className="h-9 bg-editor-tabs flex border-b border-editor-border overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <NavLink 
          key={tab.path} 
          to={tab.path}
          className={({ isActive }) => `flex items-center px-4 h-full border-r border-editor-border text-xs font-mono transition-colors min-w-max ${isActive ? 'bg-editor-activeTab text-editor-activeText border-t-2 border-primary' : 'text-editor-text bg-editor-tabs hover:bg-white/5'}`}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.name}
          <button className="ml-2 hover:bg-white/10 rounded p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="sr-only">Close</span>
            ×
          </button>
        </NavLink>
      ))}
    </div>
  );
};

const StatusBar = () => {
  return (
    <div className="h-6 bg-primary text-white flex items-center justify-between px-3 text-[11px] font-mono">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 cursor-pointer transition-colors">
          <GitBranch size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 cursor-pointer transition-colors">
          <CheckCircle2 size={12} />
          <span>0 Errors</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 cursor-pointer transition-colors">
          <span>Spaces: 2</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 cursor-pointer transition-colors">
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 cursor-pointer transition-colors">
          <Cpu size={12} />
          <span>React</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 cursor-pointer transition-colors">
          <Bell size={12} />
        </div>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-editor-bg text-editor-activeText font-inter">
      {/* Top Bar (fake window controls) */}
      <div className="h-8 bg-editor-sidebar border-b border-editor-border flex items-center px-4 justify-between select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-xs text-editor-text font-mono">portfolio-aditya - Visual Studio Code</div>
        <div className="w-12" /> {/* spacer */}
      </div>

      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />
        <Explorer />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs />
          <main className="flex-1 overflow-y-auto bg-editor-bg custom-scrollbar relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
                <div className="grid grid-cols-[repeat(40,minmax(0,1fr))] w-full h-full border-l border-t border-white/5">
                    {Array.from({ length: 40 * 40 }).map((_, i) => (
                        <div key={i} className="border-r border-b border-white/5 h-10 w-full" />
                    ))}
                </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 relative z-10"
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>

      <StatusBar />
    </div>
  );
};

export default Layout;
