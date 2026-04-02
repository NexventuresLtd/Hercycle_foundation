import { useState } from 'react';
import { Heart, Building2, Users, ArrowRight, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import Modal from '../components/Modal';
import { IMAGES } from '../lib/images';
import { getWhatsAppDonationLink, getWhatsAppPartnerLink, getWhatsAppVolunteerLink } from '../lib/constants';

const PRESET_AMOUNTS = [10, 25, 50, 100, 250, 500];

export default function GetInvolved() {
  const [selectedAmt, setSelectedAmt] = useState<number>(25);
  const [customAmt,   setCustomAmt]   = useState('');
  const [donationModal,  setDonationModal]  = useState(false);
  const [partnerModal,   setPartnerModal]   = useState(false);
  const [volunteerModal, setVolunteerModal] = useState(false);

  const displayAmount = customAmt ? Number(customAmt) : selectedAmt;
  const girlCount     = Math.max(1, Math.floor(displayAmount / 3));

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <HeroSection
        image="Sandra (6).jpeg"
        height="large"
        overlay={65}
        badge="Take Action Today"
        title={
          <>
            Get <span style={{ color: '#e8216b' }}>Involved</span>
          </>
        }
        subtitle="Every action  ,  donation, partnership, or volunteer hour  ,  helps a girl stay in class, confident and ready to learn."
        align="center"
      />

      {/* ── THREE PATHS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">Three Ways to Help</span>
            <h2 className="section-title">Choose How You Contribute</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                Icon: Heart,     color: '#e8216b', title: 'Donate',
                sub: 'Every dollar goes to programs',
                desc: 'Your contribution funds sanitary pad distribution, health education sessions, and ambassador training in Rwanda\'s schools.',
                cta: 'Donate via WhatsApp',
                image: IMAGES.sections.donate,
                onClick: () => setDonationModal(true),
              },
              {
                Icon: Building2, color: '#7b2fbf', title: 'Partner With Us',
                sub: 'NGOs, schools & institutions',
                desc: 'We collaborate with schools, NGOs, and institutions interested in strengthening girls\' education across Rwanda.',
                cta: 'Submit Partnership Inquiry',
                image: IMAGES.sections.partner,
                onClick: () => setPartnerModal(true),
              },
              {
                Icon: Users,     color: '#e8216b', title: 'Volunteer',
                sub: 'Bring your skills to the field',
                desc: 'Join our outreach and awareness activities. Share your time and expertise to support program delivery on the ground.',
                cta: 'Register as Volunteer',
                image: IMAGES.sections.volunteer,
                onClick: () => setVolunteerModal(true),
              },
            ].map(({ Icon, color, title, sub, desc, cta, image, onClick }) => (
              <ScrollReveal key={title} delay={0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ backgroundColor: `${color}BB` }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={44} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color }}>{sub}</p>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                    <button
                      onClick={onClick}
                      className="btn-primary w-full justify-center text-sm"
                      style={{ backgroundColor: color }}
                    >
                      {cta} <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── DONATION CALCULATOR ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <ScrollReveal direction="left">
              <div className="card">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">Donation Calculator</h3>
                <p className="text-gray-400 text-sm mb-6">100% of your donation goes directly to program delivery in schools.</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {PRESET_AMOUNTS.map(amt => (
                    <button
                      key={amt}
                      onClick={() => { setSelectedAmt(amt); setCustomAmt(''); }}
                      className={`py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
                        selectedAmt === amt && !customAmt
                          ? 'text-white'
                          : 'bg-gray-50 text-gray-700 border-gray-100 hover:border-[#e8216b] hover:text-[#e8216b]'
                      }`}
                      style={
                        selectedAmt === amt && !customAmt
                          ? { backgroundColor: '#e8216b', borderColor: '#e8216b' }
                          : {}
                      }
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <div className="relative mb-5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Custom amount"
                    value={customAmt}
                    onChange={e => { setCustomAmt(e.target.value); setSelectedAmt(0); }}
                    className="form-input pl-9"
                  />
                </div>

                <input
                  type="range"
                  min="1"
                  max="500"
                  value={displayAmount || 25}
                  onChange={e => { setSelectedAmt(Number(e.target.value)); setCustomAmt(''); }}
                  className="w-full mb-5 accent-[#e8216b]"
                />

                <div className="rounded-xl p-4 mb-5 border border-pink-100" style={{ backgroundColor: '#fef2f8' }}>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-lg" style={{ color: '#e8216b' }}>${displayAmount || 25}</span>
                    {' '}could support{' '}
                    <span className="font-bold text-gray-900">{girlCount} girl{girlCount !== 1 ? 's' : ''}</span>
                    {' '}for one month with sanitary pad access.
                  </p>
                </div>

                <button
                  onClick={() => setDonationModal(true)}
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  <Heart size={17} /> Donate ${displayAmount || 25} via WhatsApp
                </button>
                <p className="text-xs text-center text-gray-400 mt-3">
                  Clicking will open WhatsApp with a pre-filled message.
                </p>
              </div>
            </ScrollReveal>

            {/* Impact breakdown */}
            <ScrollReveal direction="right">
              <div className="space-y-4 md:pl-4">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">What Your Support Enables</h3>
                {[
                  { amount: '$10',  impact: 'Provides sanitary pad support for one girl for one full month' },
                  { amount: '$25',  impact: 'Covers materials for one health education session' },
                  { amount: '$50',  impact: 'Funds a complete quarterly education session at a school' },
                  { amount: '$100', impact: 'Supports one full ambassador club for an entire semester' },
                  { amount: '$250', impact: 'Covers one month of supplies for an entire school partner' },
                ].map(({ amount, impact }) => (
                  <div key={amount} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white">
                    <div
                      className="rounded-lg px-3 py-1.5 text-sm font-bold text-white shrink-0"
                      style={{ backgroundColor: '#e8216b' }}
                    >
                      {amount}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{impact}</p>
                  </div>
                ))}

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Donations are processed via WhatsApp for direct communication with our team.
                    We will confirm receipt and provide full transparency on how funds are used.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── IMPACT BAND ── */}
      <section className="py-16 bg-[#0f0a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
              Every Girl Deserves to Be in Class
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              Menstrual health should never be a reason to miss school. Help us make sure it never is.
            </p>
            <a
              href={getWhatsAppDonationLink(50)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-4 px-10"
            >
              <MessageCircle size={17} /> Start on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ MODALS ═══ */}

      {/* Donation Modal */}
      <Modal open={donationModal} onClose={() => setDonationModal(false)} title="Donate to HerCycle Foundation">
        <div className="text-center  ">
          <div
            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: '#e8216b' }}
          >
            <Heart size={28} className="text-white" />
          </div>
          <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">
            Donating ${displayAmount || 25}
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Clicking the button below will open WhatsApp with a pre-filled message. Our team will
            guide you through the next steps and confirm your donation.
          </p>
          <div
            className="rounded-xl p-4 mb-6 text-left border border-pink-100"
            style={{ backgroundColor: '#fef2f8' }}
          >
            <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">Your donation covers:</p>
            <p className="text-sm text-gray-700">
              Sanitary pad support for <strong>{girlCount} girl{girlCount !== 1 ? 's' : ''}</strong> for one month.
            </p>
          </div>
          <a
            href={getWhatsAppDonationLink(displayAmount || 25)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center text-base py-4 mb-3"
            onClick={() => setDonationModal(false)}
          >
            <MessageCircle size={17} /> Continue on WhatsApp
          </a>
          <button onClick={() => setDonationModal(false)} className="w-full text-sm text-gray-400 hover:text-gray-600 transition-colors py-2">
            Cancel
          </button>
        </div>
      </Modal>

      {/* Partner Modal */}
      <Modal open={partnerModal} onClose={() => setPartnerModal(false)} title="Partner With Us" size="md">
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          We collaborate with schools, NGOs, institutions, and businesses to strengthen girls'
          education across Rwanda. Fill in your details and we'll reach out, or connect directly on WhatsApp.
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            window.open(getWhatsAppPartnerLink(), '_blank');
            setPartnerModal(false);
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
              <input type="text" required className="form-input" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
              <input type="email" required className="form-input" placeholder="you@org.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Organization</label>
            <input type="text" className="form-input" placeholder="School, NGO, or company name" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">How would you like to partner?</label>
            <textarea rows={3} className="form-input resize-none" placeholder="Tell us about your interest..." />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button type="submit" className="btn-primary flex-1 justify-center">
              <MessageCircle size={15} /> Submit via WhatsApp
            </button>
            <button type="button" onClick={() => setPartnerModal(false)} className="btn-outline flex-1 justify-center">
              Cancel
            </button>
          </div>
        </form>
      </Modal>

      {/* Volunteer Modal */}
      <Modal open={volunteerModal} onClose={() => setVolunteerModal(false)} title="Volunteer with HerCycle Foundation" size="md">
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          Join our outreach and awareness activities. We welcome professionals, students, and
          community members who want to contribute their skills to the mission.
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            window.open(getWhatsAppVolunteerLink(), '_blank');
            setVolunteerModal(false);
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
              <input type="text" required className="form-input" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
              <input type="email" required className="form-input" placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Location</label>
            <input type="text" className="form-input" placeholder="City, Country" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Skills or Background</label>
            <input type="text" className="form-input" placeholder="e.g. Education, Health, Communications, IT" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Availability</label>
            <select className="form-input bg-white">
              <option value="">Select availability</option>
              <option>Weekends</option>
              <option>Weekday evenings</option>
              <option>Full-time</option>
              <option>Remote only</option>
              <option>Flexible</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button type="submit" className="btn-primary flex-1 justify-center">
              <Send size={14} /> Register via WhatsApp
            </button>
            <button type="button" onClick={() => setVolunteerModal(false)} className="btn-outline flex-1 justify-center">
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
