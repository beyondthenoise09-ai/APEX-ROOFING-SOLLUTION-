import { motion } from 'motion/react';
import { Home, Hammer, CloudRain, Building2, Wrench, AlertTriangle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Roof Repair',
    description: 'Precision repairs fixing leaks, missing shingles, and structural damage before they spread.',
    icon: Hammer,
  },
  {
    title: 'Roof Replacement',
    description: 'Full-scale luxury roof replacements using the highest grade architectural shingles.',
    icon: Home,
  },
  {
    title: 'Storm Damage',
    description: 'Rapid response wind and hail damage restoration to secure your property.',
    icon: CloudRain,
  },
  {
    title: 'Commercial',
    description: 'Durable flat roof systems and TPO solutions for businesses and facilities.',
    icon: Building2,
  },
  {
    title: 'Gutters',
    description: 'Seamless gutter systems designed for maximum water diversion and curb appeal.',
    icon: Wrench,
  },
  {
    title: 'Emergency',
    description: '24/7 rapid deployment team for catastrophic roof failures and tarping.',
    icon: AlertTriangle,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-[var(--bg-primary)] transition-colors duration-500 border-t border-[var(--border-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--accent-orange)] tracking-[0.2em] uppercase text-[10px] font-bold mb-4 font-sans">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--text-primary)] transition-colors duration-500 mb-6 tracking-tight leading-[1.05]">Mastery In Every Shingle.</h3>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto font-light transition-colors duration-500">We provide an elite suite of roofing services focused on longevity, aesthetics, and impenetrable protection.</p>
          </motion.div>
        </div>

        <div className="flex md:grid flex-nowrap md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-[85vw] md:w-auto shrink-0 snap-center group relative bg-[var(--bg-secondary)] rounded-3xl p-8 lg:p-10 border border-[var(--border-soft)] hover:border-[var(--accent-orange)] active:border-[var(--accent-orange)] transition-all duration-500 md:hover:-translate-y-2 active:-translate-y-2 overflow-hidden shadow-sm hover:shadow-[0_0_40px_var(--gold-glow)] active:shadow-[0_0_40px_var(--gold-glow)] cursor-pointer active:scale-[0.98]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-orange)]/0 via-transparent to-[var(--accent-orange)]/0 group-hover:from-[var(--accent-orange)]/[0.03] group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="text-[var(--accent-orange)]" size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-4 transition-colors duration-500 tracking-tight">{service.title}</h4>
                  
                  <p className="text-[var(--text-secondary)] font-light leading-relaxed transition-colors duration-500 text-sm md:text-base mb-8">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-[var(--accent-orange)] font-bold text-xs tracking-widest uppercase transition-all duration-500 group-hover:translate-x-2">
                    Learn More <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
