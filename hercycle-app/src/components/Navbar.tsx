import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { to: '/',               label: 'Home' },
  { to: '/about',          label: 'About Us' },
  { to: '/our-work',       label: 'Our Work' },
  { to: '/impact',         label: 'Impact' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/get-involved',   label: 'Get Involved' },
  { to: '/contact',        label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Brand / Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="../logo.jpeg"
              alt="HerCycle Foundation"
              className="h-10 w-auto object-contain"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="leading-tight">
              <span
                className={`block font-serif font-bold text-lg transition-colors group-hover:text-[#e8216b] ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Her Cycle
              </span>
              <span
                className={`block text-xs font-medium tracking-widest uppercase transition-colors ${
                  scrolled ? 'text-gray-400' : 'text-white/60'
                }`}
              >
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, 6).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname === link.to
                    ? 'text-[#e8216b] font-semibold'
                    : scrolled
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full"
                    style={{ backgroundColor: '#e8216b' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
            </Link>
            <Link to="/get-involved" className="btn-primary py-2.5 px-5 text-sm">
              <Heart size={14} />
              Donate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="py-3 space-y-0.5 px-2">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      pathname === link.to
                        ? 'bg-[#fef2f8] text-[#e8216b] font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 px-2">
                  <Link to="/get-involved" className="btn-primary w-full justify-center">
                    <Heart size={15} /> Donate Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
