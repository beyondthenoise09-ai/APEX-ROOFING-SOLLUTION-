import { motion } from 'motion/react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden transition-colors duration-500 bg-[var(--bg-primary)]">
      {/* Subtle Dynamic Ambient Lighting */}
      <motion.div
        animate={{
          x: ['0%', '5%', '-5%', '0%'],
          y: ['0%', '-5%', '5%', '0%'],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--accent-orange)] opacity-[0.04] blur-[120px] dark:opacity-[0.06]"
      />
      
      <motion.div
        animate={{
          x: ['0%', '-5%', '5%', '0%'],
          y: ['0%', '5%', '-5%', '0%'],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-[#1A1A1A] dark:bg-white opacity-[0.02] blur-[150px] dark:opacity-[0.03]"
      />
      
      {/* Global Noise Texture Overlay for Editorial Premium Feel */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay dark:opacity-[0.04]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}
      ></div>
    </div>
  );
}
