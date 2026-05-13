import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[var(--bg-secondary)] pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group text-[var(--text-primary)]">
              <span className="font-heading font-extrabold text-xl tracking-tight">Apex<span className="text-[var(--accent-orange)]">.</span></span>
            </a>
            <p className="text-[var(--text-secondary)] font-sans leading-relaxed mb-8 max-w-sm font-light text-sm">
              Premium residential and commercial roofing services in San Antonio, Texas. Built to protect, designed to last.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all">
                <Linkedin size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--text-primary)] font-heading font-bold text-sm mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--text-primary)] font-heading font-bold text-sm mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              {['Roof Replacement', 'Leak Repairs', 'Storm Damage', 'Commercial Roofing', 'Gutter Systems'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--text-primary)] font-heading font-bold text-sm mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-[var(--text-secondary)]">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5" />
                <span>12500 San Pedro Ave,<br />San Antonio, TX 78216</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} />
                <span>(210) 555-0198</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} />
                <span>info@apexroofing.tx</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-soft)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[var(--text-secondary)]">
          <p>© {currentYear} Apex Roofing Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
