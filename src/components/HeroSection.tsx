import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center items-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-medium text-brand-300 tracking-wide uppercase">For Sale on Flippa</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            The Future of <br/>
            <span className="text-gradient">Automated Scheduling.</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            NextSchedule is a premium Android application featuring a unique algorithm for intelligent task prioritization, wrapped in top 1% UI/UX design with advanced liquid physics animations.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="#acquire"
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium flex items-center gap-2 transition-colors shadow-[0_0_20px_var(--color-brand-glow)]"
            >
              View Flippa Listing
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#features"
              className="px-6 py-3 rounded-xl glass-panel text-white font-medium hover:bg-white/5 transition-colors"
            >
              Explore Features
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl">Zero</span>
              <span>Active Users</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl">100%</span>
              <span>Custom Physics Engine</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl">Turnkey</span>
              <span>Ready for Launch</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="relative perspective-1000"
        >
          {/* Phone mock container */}
          <div className="relative mx-auto w-[280px] sm:w-[320px] rounded-[3rem] p-2 glass-panel bg-dark-900 border-slate-700/50 shadow-2xl z-10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
            <div className="overflow-hidden rounded-[2.5rem] bg-dark-950 aspect-[9/19.5] relative">
              {/* Note: User should replace this with their Overview screenshot */}
              <img 
                src="/hero.png" 
                alt="NextSchedule Overview Screen" 
                className="w-full h-full object-cover bg-dark-800 flex items-center justify-center text-sm text-slate-500"
              />
            </div>
          </div>
          
          {/* Floating elements behind */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 glass-panel rounded-2xl -z-10 flex flex-col justify-center items-center p-4"
          >
             <span className="text-3xl font-display font-bold text-gradient">100%</span>
             <span className="text-xs text-slate-400 text-center mt-2">Liquid Glass UI</span>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
