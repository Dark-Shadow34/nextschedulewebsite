import { motion } from 'motion/react';
import { ExternalLink, TrendingUp, Users, Code2 } from 'lucide-react';

export function FlippaBanner() {
  return (
    <section id="acquire" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-900/40 to-blue-900/20 border border-brand-500/30 p-12 text-center"
        >
          {/* Animated glow background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/30 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Acquire <span className="text-gradient">NextSchedule</span> Today
            </h2>
            <p className="text-xl text-brand-100/80 mb-10 max-w-2xl mx-auto">
              Skip months of development and design iterations. Take ownership of a ready-to-launch, premium productivity app with zero technical debt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-4 glass-panel rounded-2xl">
                <Users className="w-8 h-8 text-blue-400 mb-3" />
                <span className="text-white font-bold text-xl">0</span>
                <span className="text-slate-400 text-sm">Active Users (Fresh Start)</span>
              </div>
              <div className="flex flex-col items-center p-4 glass-panel rounded-2xl">
                <Code2 className="w-8 h-8 text-brand-400 mb-3" />
                <span className="text-white font-bold text-xl">100%</span>
                <span className="text-slate-400 text-sm">Modern Kotlin/Compose (Assumed)</span>
              </div>
              <div className="flex flex-col items-center p-4 glass-panel rounded-2xl">
                <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
                <span className="text-white font-bold text-xl">High</span>
                <span className="text-slate-400 text-sm">Growth Potential</span>
              </div>
            </div>
            
            <a 
              href="https://flippa.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-dark-900 font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              View Listing on Flippa
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
