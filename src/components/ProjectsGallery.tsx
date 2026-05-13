import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ProjectsGallery() {
  const projects = [
    {
      title: 'Modern Architecture Retreat',
      location: 'Alamo Heights',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
      category: 'Residential',
    },
    {
      title: 'Luxury Estate Reroof',
      location: 'Stone Oak',
      image: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
      category: 'Architectural Shingles',
    },
    {
      title: 'Commercial HQ',
      location: 'Downtown San Antonio',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
      category: 'Commercial TPO',
    },
    {
      title: 'Contemporary Villa',
      location: 'Boerne',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
      category: 'Metal Roofing',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden relative border-t border-[var(--border-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-[var(--accent-orange)] tracking-[0.15em] uppercase text-[10px] font-bold mb-4 font-sans">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--text-primary)] transition-colors duration-500 tracking-tight leading-[1.05]">Featured Work.</h3>
        </div>
        <a 
          href="#quote" 
          className="hidden md:flex items-center gap-2 text-[13px] font-bold tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--accent-orange)] transition-colors"
        >
          View All Projects <ArrowRight size={16} />
        </a>
      </div>

      <div className="relative w-full flex items-center z-10">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-8 pb-12 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[600px] shrink-0 snap-center group relative rounded-[2rem] overflow-hidden border border-transparent hover:border-[var(--accent-orange)] active:border-[var(--accent-orange)] shadow-md hover:shadow-[0_0_40px_var(--gold-glow)] active:shadow-[0_0_40px_var(--gold-glow)] transition-all duration-700 hover:-translate-y-2 active:-translate-y-2 aspect-[4/3] md:aspect-[3/2] bg-[var(--bg-secondary)] cursor-pointer active:scale-[0.98]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="mb-4">
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 bg-black/40 rounded-full border border-white/20 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-3xl font-heading font-bold mb-2 tracking-tight">
                  {project.title}
                </h4>
                <div className="flex justify-between items-center">
                  <p className="text-white/70 font-light text-sm tracking-wide">
                    {project.location}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                     <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-4 md:hidden px-4">
        <a 
          href="#quote" 
          className="flex items-center justify-center gap-2 w-full py-4 text-[13px] font-bold tracking-widest uppercase text-[var(--text-secondary)] border border-[var(--border-soft)] rounded-full hover:bg-[var(--border-soft)] transition-colors"
        >
          View All Projects <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
