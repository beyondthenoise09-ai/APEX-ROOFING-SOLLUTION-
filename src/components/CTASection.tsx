import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} id="quote" className="relative py-32 md:py-48 overflow-hidden flex items-center justify-center bg-[var(--bg-primary)]">
      {/* Background Image with Parallax & Scale */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 w-full h-full transform-gpu"
      >
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
          alt="Premium House Roof Drone Shot" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Elevate Your Home</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-extrabold leading-[1.05] tracking-tight mb-12">
            Protect What <br />
            Matters Most.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#quote" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-medium text-[13px] tracking-wide rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl text-center"
            >
              Get Your Free Estimate
            </a>
            <a href="tel:+1234567890" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 text-white font-medium text-[13px] tracking-wide rounded-full transition-all hover:bg-white/10 active:scale-[0.98] text-center">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
