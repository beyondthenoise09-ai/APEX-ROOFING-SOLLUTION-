import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const features = [
    { title: 'Licensed & Insured', desc: 'Fully licensed and bonded up to $2M for your complete peace of mind.' },
    { title: 'Premium Materials', desc: 'Partnering exclusively with top-tier architectural manufacturers.' },
    { title: 'Emergency Support', desc: '24/7 rapid deployment for severe leaks or storm damage.' },
    { title: 'Expert Craftsmanship', desc: 'Master roofers with decades of combined specialized experience.' },
    { title: 'Satisfaction Guarantee', desc: 'Ironclad workmanship warranties backing every detail.' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-primary)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[var(--text-secondary)] tracking-[0.15em] uppercase text-[10px] font-bold mb-4 font-sans">Why Choose Apex</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--text-primary)] mb-12 leading-[1.05] tracking-tight transition-colors duration-500">
                Built On Trust. <br className="hidden lg:block"/>
                <span className="text-[var(--text-secondary)]">Delivered With Excellence.</span>
              </h3>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex gap-5 items-start"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)] shrink-0 transition-transform group-hover:scale-[2]"></div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-1.5 transition-colors duration-500">{feature.title}</h4>
                    <p className="text-[var(--text-secondary)] font-light leading-relaxed max-w-sm transition-colors duration-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.6 }}
               className="mt-12"
            >
               <a 
                 href="#quote" 
                 className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all text-[13px] tracking-wide shadow-md hover:shadow-xl"
               >
                 Talk To An Expert
               </a>
            </motion.div>
          </div>

          {/* Right Image (Minimal Luxury Presentation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-7 relative h-[500px] lg:h-[800px] rounded-[2rem] overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[var(--bg-secondary)] rounded-[2rem] transition-colors duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Luxury Architecture Roof" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[15%] transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-black/40 p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
              <div className="text-white/80 font-bold tracking-[0.15em] text-[10px] uppercase mb-1.5">Since 2014</div>
              <div className="text-2xl lg:text-3xl font-heading font-extrabold text-white leading-tight tracking-tight">Setting the Gold Standard.</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
