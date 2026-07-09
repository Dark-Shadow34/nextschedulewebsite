import { motion } from 'motion/react';
import { BrainCircuit, Zap, Shield, Layers, Smartphone, Settings } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-brand-400" />,
    title: "Intelligent Prioritization",
    description: "A proprietary algorithm that analyzes deadlines, effort, and context to automatically order tasks for maximum productivity."
  },
  {
    icon: <Layers className="w-6 h-6 text-brand-400" />,
    title: "Top 1% UI/UX Design",
    description: "Crafted with obsessive attention to detail. Features bespoke iOS 26 Liquid Glass styling on Android."
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-400" />,
    title: "Advanced Spring Physics",
    description: "Fully customizable NavHost transition physics with adjustable stiffness, damping, and multi-directional offsets."
  },
  {
    icon: <Settings className="w-6 h-6 text-brand-400" />,
    title: "Granular Customization",
    description: "Let users choose between Orbs, Aurora, Pulse, or Cyber background themes with dynamic blur intensities."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-brand-400" />,
    title: "Turnkey Asset",
    description: "Freshly built, zero technical debt. Ready for a visionary owner to launch, market, and monetize."
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-400" />,
    title: "Data & Sync Ready",
    description: "Built-in structure for cloud backups, restores, and secure app locking via PIN code."
  }
];

export function FeatureSection() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Engineered for <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            NextSchedule isn't just another to-do list. It's a high-performance productivity engine wrapped in a breathtaking visual shell.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/[0.03] transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
