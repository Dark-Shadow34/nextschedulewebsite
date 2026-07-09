import { motion } from 'motion/react';

export function BentoGrid() {
  return (
    <section id="design" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Uncompromising <span className="text-gradient">Design</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A deep dive into the settings reveals an unprecedented level of control. From NavHost transition physics to Liquid Glass shading.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Main Large Bento Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass-panel rounded-[2rem] overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-3xl font-display font-bold text-white mb-2">Advanced Physics Customizer</h3>
              <p className="text-slate-300 max-w-md">Fine-tune spring stiffness, damping (bounciness), and multidirectional entry/exit offsets for custom NavHost transitions.</p>
            </div>
            {/* Replace with physics settings screenshot */}
            <img 
              src="/physics.png" 
              alt="Physics Customizer" 
              className="w-full h-[120%] object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700 bg-dark-800"
            />
          </motion.div>
          
          {/* Top Right Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel rounded-[2rem] overflow-hidden relative group"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-xl font-display font-bold text-white mb-1">Liquid Glass Themes</h3>
              <p className="text-slate-400 text-sm">iOS 26 AGSL shading effect.</p>
            </div>
            {/* Replace with Theme/Appearance screenshot */}
            <img 
              src="/themes.png" 
              alt="Themes and Appearance" 
              className="w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700 bg-dark-800"
            />
          </motion.div>
          
          {/* Bottom Right Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel rounded-[2rem] overflow-hidden relative group bg-brand-900/20"
          >
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
               <div className="text-5xl font-bold font-display text-white mb-2">1-5%</div>
               <div className="text-brand-300 font-medium">Top Tier UI/UX Quality</div>
               <p className="text-slate-400 text-sm mt-4">
                 Meticulous attention to neon borders, dynamic blurs, and organic motion sets this app apart from standard templates.
               </p>
            </div>
          </motion.div>
          
          {/* Bottom Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[2rem] overflow-hidden relative group"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-xl font-display font-bold text-white mb-1">Task Overview</h3>
              <p className="text-slate-400 text-sm">Clean, focused productivity score.</p>
            </div>
            {/* Replace with Overview/Tasks screenshot */}
            <img 
              src="/overview.png" 
              alt="Task Overview" 
              className="w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700 bg-dark-800"
            />
          </motion.div>
          
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 glass-panel rounded-[2rem] overflow-hidden relative group flex"
          >
             <div className="w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-display font-bold text-white mb-4">Nav Bar Customization</h3>
              <p className="text-slate-400">
                Endless possibilities with Premium Gradients, GPU blurs, Neon borders, and granular animation speed controls (Smooth, Slow, Fast, Snappy).
              </p>
            </div>
            <div className="w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-r from-dark-800 to-transparent z-10" />
               {/* Replace with Navigation Bar Settings screenshot */}
               <img 
                  src="/navbar.png" 
                  alt="Navigation Bar Customizer" 
                  className="w-full h-full object-cover object-top opacity-80 bg-dark-800"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
