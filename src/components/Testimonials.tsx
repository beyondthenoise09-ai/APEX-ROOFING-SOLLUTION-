export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael T.',
      location: 'Stone Oak, TX',
      text: 'Apex exceeded every expectation. From the initial inspection to the final sweep, their crew was professional, and the new roof looks completely unrecognizable in the best way.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Sarah J.',
      location: 'Alamo Heights, TX',
      text: 'After the hail storm, we were overwhelmed. Apex stepped in, handled the adjusters directly, and replaced the roof seamlessly. Highly recommend.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'David R.',
      location: 'Boerne, TX',
      text: 'The communication was stellar. I knew exactly what was happening every day. The luxury architectural shingles completely changed the look of my house.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Elena C.',
      location: 'Helotes, TX',
      text: 'Cleanest work site I have ever seen from a builder. They protected all our landscaping, finished on time, and the price was exactly what was quoted.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden relative border-t border-[var(--border-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left relative z-10">
        <h2 className="text-[var(--accent-orange)] tracking-[0.15em] uppercase text-[10px] font-bold mb-4 font-sans">Client Experiences</h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--text-primary)] transition-colors duration-500 tracking-tight leading-[1.05]">Excellence Acknowledged.</h3>
      </div>

      <div className="relative w-full flex align-center z-10">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 px-4 sm:px-8 pb-12 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[85vw] sm:w-[420px] shrink-0 snap-center bg-[var(--bg-secondary)] border border-[var(--border-soft)] hover:border-[var(--accent-orange)] active:border-[var(--accent-orange)] shadow-sm hover:shadow-[0_0_40px_var(--gold-glow)] active:shadow-[0_0_40px_var(--gold-glow)] p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 active:-translate-y-2 group cursor-pointer active:scale-[0.98]"
            >
              <div className="flex gap-1 mb-6 text-[var(--text-primary)] opacity-80 group-hover:text-[var(--accent-orange)] group-hover:opacity-100 transition-colors duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-[var(--text-secondary)] text-[15px] sm:text-[17px] font-sans font-light leading-relaxed mb-8 transition-colors duration-500">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[var(--border-soft)]">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-heading font-bold tracking-wide transition-colors">{testimonial.name}</div>
                  <div className="text-[var(--text-secondary)] text-[10px] tracking-[0.1em] uppercase font-bold transition-colors">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
