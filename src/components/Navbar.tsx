import { motion } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel border-b-0 border-x-0 border-t-0 rounded-none"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-blue-500 flex items-center justify-center shadow-[0_0_15px_var(--color-brand-glow)]">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-white">NextSchedule</span>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Features</a>
        <a href="#design" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Design</a>
        <a 
          href="#acquire" 
          className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium transition-all"
        >
          Acquire on Flippa
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </motion.nav>
  );
}
