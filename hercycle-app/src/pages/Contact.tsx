import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Facebook, Twitter, Instagram, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import Modal from '../components/Modal';
import { IMAGES } from '../lib/images';
import { OFFICE_NAME, OFFICE_ADDRESS, NORRSKEN_MAP_URL, getWhatsAppContactLink } from '../lib/constants';

const contactCards = [
  { Icon: MapPin, label: 'Location', value: `${OFFICE_NAME}, Kigali`, href: undefined,                           color: '#e8216b' },
  { Icon: Mail,   label: 'Email',    value: 'info@hercyclefoundation.org', href: 'mailto:info@hercyclefoundation.org', color: '#7b2fbf' },
  { Icon: Phone,  label: 'Phone',    value: '+250 788 207 666',            href: 'tel:+250788207666',                 color: '#e8216b' },
];

const socials = [
  { Icon: Facebook,  href: '#', label: 'Facebook' },
  { Icon: Twitter,   href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
];

const SUBJECTS = ['General Inquiry', 'Donation Question', 'Partnership Opportunity', 'Volunteer Interest', 'Media / Press', 'Other'];

export default function Contact() {
  const [successModal, setSuccessModal] = useState(false);
  const [focused,      setFocused]      = useState<string | null>(null);
  const [name,         setName]         = useState('');
  const [subject,      setSubject]      = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessModal(true);
    (e.target as HTMLFormElement).reset();
    setName('');
    setSubject('');
  };

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <HeroSection
        image={IMAGES.hero.contact}
        height="medium"
        overlay={68}
        badge="We respond to every message"
        badgeIcon={<MessageCircle size={13} />}
        title={
          <>
            Let's <span style={{ color: '#e8216b' }}>Talk</span>
          </>
        }
        subtitle="Questions, partnership ideas, or just want to learn more? We'd love to hear from you."
        align="center"
      />

      {/* ── CONTACT CARDS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8 relative z-10">
            {contactCards.map(({ Icon, label, value, href, color }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-gray-900 hover:text-[#e8216b] transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900 text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-16 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left info panel */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal direction="left">
                <div>
                  <span className="section-label">Get in Touch</span>
                  <h2 className="section-title mb-5">We're Here to Help</h2>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                    Whether you're a donor, school, NGO, researcher, or simply curious  ,  we welcome
                    every conversation. Reach out and we'll respond within 2 business days.
                  </p>

                  {/* WhatsApp direct button */}
                  <a
                    href={getWhatsAppContactLink('', 'General Inquiry')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center mb-6"
                  >
                    <MessageCircle size={15} /> Chat on WhatsApp
                  </a>
                </div>

                {/* Social links */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Follow Our Work</p>
                  <div className="flex gap-3">
                    {socials.map(({ Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        aria-label={label}
                        className="w-10 h-10 rounded-xl border-2 border-gray-100 flex items-center justify-center text-gray-400 transition-all duration-200 hover:text-white"
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#e8216b';
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e8216b';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '';
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = '';
                        }}
                      >
                        <Icon size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Google Maps embed  ,  Norrsken House Kigali */}
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <iframe
                    title="Norrsken House Kigali"
                    src={NORRSKEN_MAP_URL}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="px-4 py-3 bg-white flex items-start gap-2">
                    <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: '#e8216b' }} />
                    <div>
                      <p className="text-xs font-bold text-gray-900">{OFFICE_NAME}</p>
                      <p className="text-xs text-gray-400">{OFFICE_ADDRESS}</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Norrsken+House+Kigali+Rwanda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto shrink-0 text-gray-400 hover:text-[#e8216b] transition-colors"
                      aria-label="Open in Google Maps"
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Quick FAQ */}
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Quick Answers</p>
                  {[
                    { q: 'Response time?', a: 'Within 2 business days' },
                    { q: 'Languages?',     a: 'English, Kinyarwanda, French' },
                    { q: 'Office hours?',  a: 'Mon–Fri, 8 AM – 5 PM (CAT)' },
                  ].map(({ q, a }) => (
                    <div key={q} className="flex items-center justify-between py-2 border-b border-gray-50">
                      <span className="text-sm text-gray-500">{q}</span>
                      <span className="text-sm font-semibold text-gray-900">{a}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="card p-4 sm:p-8">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">Send a Message</h3>
                  <p className="text-gray-400 text-sm mb-7">We read every message and respond personally.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          className="w-full px-4 py-3 rounded-xl border-2 text-sm transition-colors"
                          style={{ borderColor: focused === 'name' ? '#e8216b' : '#f3f4f6', outline: 'none' }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          className="w-full px-4 py-3 rounded-xl border-2 text-sm transition-colors"
                          style={{ borderColor: focused === 'email' ? '#e8216b' : '#f3f4f6', outline: 'none' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+250 ..."
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        className="w-full px-4 py-3 rounded-xl border-2 text-sm transition-colors"
                        style={{ borderColor: focused === 'phone' ? '#e8216b' : '#f3f4f6', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Subject</label>
                      <select
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        className="w-full px-4 py-3 rounded-xl border-2 text-sm bg-white transition-colors"
                        style={{ borderColor: focused === 'subject' ? '#e8216b' : '#f3f4f6', outline: 'none' }}
                      >
                        <option value="">Select a subject</option>
                        {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us how we can help or collaborate..."
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className="w-full px-4 py-3 rounded-xl border-2 text-sm transition-colors resize-none"
                        style={{ borderColor: focused === 'message' ? '#e8216b' : '#f3f4f6', outline: 'none' }}
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                      <Send size={17} /> Send Message
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="py-20" style={{ backgroundColor: '#0f0a1a' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="font-serif text-6xl leading-none mb-4 select-none" style={{ color: '#e8216b', opacity: 0.3 }}>"</div>
            <p className="font-serif text-xl italic text-white leading-relaxed">
              Together, we can strengthen attendance, dignity, and confidence in every classroom.
            </p>
            <p className="text-gray-500 text-sm mt-4"> ,  HerCycle Foundation</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SUCCESS MODAL ── */}
      <Modal open={successModal} onClose={() => setSuccessModal(false)} title="Message Received">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-5"
            style={{ backgroundColor: '#e8216b' }}
          >
            <CheckCircle2 size={36} className="text-white" />
          </motion.div>
          <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
            Your message has been received. Our team will get back to you within 2 business days.
          </p>
          <a
            href={getWhatsAppContactLink(name, subject || 'General Inquiry')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mb-3"
            onClick={() => setSuccessModal(false)}
          >
            <MessageCircle size={15} /> Also reach us on WhatsApp
          </a>
          <button
            onClick={() => setSuccessModal(false)}
            className="w-full text-sm text-gray-400 hover:text-gray-600 transition-colors py-2"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
