import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Asymmetrical Editorial) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col pt-8 md:pt-0 max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent-orange)] border border-[var(--border-soft)] rounded-full px-4 py-1.5">
                San Antonio's Trusted Experts
              </span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-[var(--text-primary)] leading-[1.05] tracking-tight transition-colors duration-500"
              >
                Premium Roofing <br className="hidden sm:block" />
                Crafted For <br className="hidden sm:block" />
                Modern Homes.
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-10">
              <motion.p 
                variants={itemVariants}
                className="text-lg text-[var(--text-secondary)] font-sans max-w-lg leading-relaxed font-light transition-colors duration-500"
              >
                We engineer beautiful, durable roofing systems that elevate your home's architecture while providing uncompromising protection.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#quote" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-medium text-[15px] transition-transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={16} />
              </a>
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[var(--border-soft)] text-[var(--text-primary)] rounded-full font-medium text-[15px] transition-colors hover:bg-[var(--border-soft)] text-center flex justify-center"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image (Minimal Luxury Presentation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[700px] h-[400px] w-full rounded-[2rem] [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="absolute inset-0 w-full h-full rounded-[2rem] shadow-2xl transition-colors duration-500 will-change-transform"
            >
              <div className="absolute inset-0 bg-[var(--bg-secondary)] rounded-[2rem]"></div>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Premium Modern House Architecture" 
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
              />
              
              {/* Subtle Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-[2rem]"></div>
              
              {/* Layered Typography Element (Apple style detail) */}
              <motion.div 
                style={{ transform: "translateZ(80px)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-8 left-8 right-8 bg-black/40 p-6 rounded-2xl border border-white/20 backdrop-blur-xl shadow-2xl"
              >
                <div className="flex justify-between items-center text-white">
                  <div>
                    <div className="font-heading text-xl font-bold tracking-tight drop-shadow-md">Architectural Excellence</div>
                    <div className="text-sm text-white/80 font-medium tracking-wide">Class 4 Impact Resistance</div>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-inner">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
