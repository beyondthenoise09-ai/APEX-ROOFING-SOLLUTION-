import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <section id="before-after" className="py-24 md:py-32 bg-[var(--bg-primary)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-[var(--accent-orange)] tracking-[0.15em] uppercase text-[10px] font-bold mb-4 font-sans">The Transformation</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--text-primary)] transition-colors duration-500 tracking-tight leading-[1.05] mb-6">Witness The Difference.</h3>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto font-light transition-colors duration-500">Slide to see how we transform aging, damaged roofs into architectural masterpieces.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden cursor-ew-resize group shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-[var(--border-soft)]"
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchMove={onTouchMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
              alt="Beautiful New Roof" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
              draggable="false"
            />
            <div className="absolute top-6 right-6 px-5 py-2.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/20 text-white font-bold tracking-[0.15em] text-[10px] uppercase shadow-lg">
              After
            </div>
          </div>

          {/* Before Image (Foreground, clipped) */}
          <div 
            className="absolute inset-0 pointer-events-none transition-all duration-75 ease-out"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
              alt="Old Damaged Roof" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-75 brightness-75 filter"
              draggable="false"
            />
            <div className="absolute top-6 left-6 px-5 py-2.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/20 text-white font-bold tracking-[0.15em] text-[10px] uppercase shadow-lg">
              Before
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 md:w-1.5 bg-white cursor-ew-resize transition-all duration-75 ease-out shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform group-hover:scale-110 border border-black/5">
              <MoveHorizontal className="text-black/80" size={24} strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
