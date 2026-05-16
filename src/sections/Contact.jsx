import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-light text-sm mb-4 tracking-tighter">&gt; contact.info</h2>
            <h3 className="text-4xl font-bold mb-8 font-inter">
              Let's build <br />
              <span className="text-gradient">something great.</span>
            </h3>
            <p className="text-editor-text mb-12 font-inter leading-relaxed">
              I'm available for freelance work and full-time positions. 
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'adityaaryal837@gmail.com', link: 'mailto:adityaaryal837@gmail.com' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Kathmandu, Nepal' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-editor-sidebar flex items-center justify-center text-primary border border-editor-border">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-editor-text uppercase tracking-widest font-bold">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-editor-activeText hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-editor-activeText">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-editor-sidebar border border-editor-border rounded-xl p-6 sm:p-8 relative overflow-hidden"
          >
            <form 
              action="https://formspree.io/f/xlgzqdav" 
              method="POST"
              className="space-y-5 relative z-10"
            >
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-editor-text font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="name"
                  className="w-full bg-editor-bg border border-editor-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-editor-text font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-editor-bg border border-editor-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-editor-text font-bold ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full bg-editor-bg border border-editor-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-primary/20"
              >
                <span>Send Message</span>
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
