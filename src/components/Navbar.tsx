import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, ArrowRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#quote' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-4 px-4 sm:px-6 lg:px-8`}
    >
      <div className={`mx-auto max-w-6xl rounded-full transition-all duration-500 border overflow-hidden ${
        scrolled 
          ? 'glass-nav border-[var(--border-soft)] shadow-lg py-3 px-8' 
          : 'bg-transparent border-transparent py-4 px-8'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group text-[var(--text-primary)] transition-colors">
              <span className="font-heading font-extrabold text-xl tracking-tight">Apex<span className="text-[var(--accent-orange)]">.</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-12">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group py-2 tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-full hover:bg-[var(--border-soft)]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
            </button>
            
            <a
              href="#quote"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs lg:text-[13px] font-medium tracking-wide rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center"
            >
              Get Estimate
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-full"
            >
              {isDark ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--text-primary)] p-2 rounded-full hover:bg-[var(--border-soft)] transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="md:hidden mt-2 mx-auto max-w-6xl glass-nav rounded-2xl border border-[var(--border-soft)] overflow-hidden shadow-2xl backdrop-blur-xl bg-[var(--bg-secondary)]/80"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[var(--text-primary)] flex items-center justify-between group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent-orange)]" />
                </a>
              ))}
              <div className="pt-6 mt-2 border-t border-[var(--border-soft)]">
                <a
                  href="#quote"
                  className="flex items-center justify-center w-full px-6 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-full shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
