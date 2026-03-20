import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { WHATSAPP_NUMBER, OFFICE_NAME, OFFICE_ADDRESS } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0f0a1a] text-gray-400">
      {/* Brand-pink top bar */}
      <div className="h-1" style={{ backgroundColor: '#e8216b' }} />

      <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="../logo.jpeg"
                alt="HerCycle Foundation"
                className="h-10 w-auto object-contain"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <span className="block font-serif font-bold text-base text-white">Her Cycle</span>
                <span className="block text-xs tracking-widest text-gray-500 uppercase">Foundation</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Empowering girls through menstrual health education, dignity, and sustainable
              school-based solutions in Rwanda.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook,  href: '#', label: 'Facebook' },
                { Icon: Twitter,   href: '#', label: 'Twitter' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#e8216b] hover:bg-[#e8216b] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { to: '/',               label: 'Home' },
                { to: '/about',          label: 'About Us' },
                { to: '/our-work',       label: 'Our Work' },
                { to: '/impact',         label: 'Impact' },
                { to: '/sustainability', label: 'Sustainability' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Get Involved</h4>
            <ul className="space-y-3">
              {[
                { to: '/get-involved', label: 'Donate' },
                { to: '/get-involved', label: 'Partner With Us' },
                { to: '/get-involved', label: 'Volunteer' },
                { to: '/contact',      label: 'Contact Us' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#e8216b' }} />
                <div>
                  <p className="text-white font-medium text-xs">{OFFICE_NAME}</p>
                  <p className="text-gray-500 text-xs">{OFFICE_ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={14} className="shrink-0" style={{ color: '#e8216b' }} />
                <a href="mailto:info@hercyclefoundation.org" className="hover:text-white transition-colors text-xs">
                  info@hercyclefoundation.org
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={14} className="shrink-0" style={{ color: '#e8216b' }} />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors text-xs">
                  +{WHATSAPP_NUMBER}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/get-involved" className="btn-primary text-sm py-2.5 px-5">
                <Heart size={14} /> Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} HerCycle Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
