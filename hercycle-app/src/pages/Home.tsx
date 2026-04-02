import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Users, School, Target, ArrowRight,
  BookOpen, Star, BarChart2, Package, MessageCircle,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import Modal from '../components/Modal';
import { IMAGES } from '../lib/images';
import { getWhatsAppDonationLink, getWhatsAppPartnerLink } from '../lib/constants';

const STATS = [
  { icon: Users,     value: 120, suffix: '+', label: 'Girls Reached',           sub: 'Across 3 partner schools' },
  { icon: School,    value: 3,   suffix: '',  label: 'Schools Engaged',         sub: 'Bugesera, Muhanga & Ruhango districts' },
  { icon: Target,    value: 300, suffix: '',  label: 'Target Girls',            sub: 'Current phase goal' },
  { icon: BarChart2, value: 20,  suffix: '%', label: 'Absenteeism Reduction',   sub: 'Target for phase one' },
];

const PROGRAMS = [
  { icon: Package,  color: '#e8216b', title: 'Pad Distribution',    desc: 'Eco-friendly sanitary pads distributed directly in partner schools on a structured cycle.' },
  { icon: BookOpen, color: '#7b2fbf', title: 'Health Education',    desc: 'Quarterly sessions promoting awareness, dignity, and confidence around menstrual health.' },
  { icon: Star,     color: '#e8216b', title: 'School Clubs',        desc: 'Student-led HerCycle Clubs in every school, driving peer support and continuity.' },
  { icon: BarChart2,color: '#7b2fbf', title: 'Attendance Tracking', desc: 'Data-driven monitoring to measure improvement and demonstrate real impact.' },
];

export default function Home() {
  const [partnerModal, setPartnerModal] = useState(false);

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <HeroSection
        image="Sandra (5).jpeg"
        height="screen"
        overlay={60}
        showScroll
        title={
          <>
            Empowering Girls,{' '}
            <span style={{ color: '#e8216b' }}>Restoring</span> Confidence
          </>
        }
        subtitle="Empowering girls to stay in school through menstrual health education, confidence, and sustainable school-based solutions in Rwanda, because every girl deserves to learn without fear."
        actions={
          <>
            <a
              href={getWhatsAppDonationLink(25)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-4 px-8"
            >
              <Heart size={17} /> Support the Mission
            </a>
            <button
              onClick={() => setPartnerModal(true)}
              className="btn-outline-white text-base py-4 px-8"
            >
              Partner With Us <ArrowRight size={15} />
            </button>
          </>
        }
      />

      {/* ── STATS BAND ── */}
      <section className="py-20 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">Impact in Numbers</span>
            <h2 className="section-title mb-3">Real Results, Real Schools</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Measurable change in girls' attendance and confidence across partner schools in Rwanda.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, value, suffix, label, sub }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div className="card text-center group hover:-translate-y-1">
                  <div
                    className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: i % 2 === 0 ? '#e8216b' : '#7b2fbf' }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <p
                    className="text-4xl font-bold font-serif mb-1"
                    style={{ color: i % 2 === 0 ? '#e8216b' : '#7b2fbf' }}
                  >
                    <AnimatedCounter end={value} suffix={suffix} />
                  </p>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">{label}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-24 bg-[#0f0a1a]">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src= "Sandra (5).jpeg"
                  alt="Girls in school, Rwanda"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-xs text-gray-500 font-medium">Girls supported</p>
                  <p className="text-2xl font-bold font-serif" style={{ color: '#e8216b' }}>Every Month</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right">
              <span className="section-label">Why It Matters</span>
              <h2 className="section-title text-white mb-6">
                A Missing Pad Should Never Mean a Missing Education
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Across Rwanda, many girls miss 2–3 days of class every month due to lack of sanitary
                products, no private changing spaces, and limited menstrual health education.
                These barriers affect attendance, participation, and long-term academic outcomes.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                HerCycle Foundation works directly with schools to provide practical, structured,
                and sustainable solutions that keep girls in class.
              </p>
              <Link to="/about" className="btn-primary inline-flex">
                Learn Our Story <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="section-label">Our Programs</span>
              <h2 className="section-title">What We Do</h2>
            </div>
            <Link to="/our-work" className="btn-outline shrink-0">
              View All Programs <ArrowRight size={15} />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map(({ icon: Icon, color, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="card group hover:-translate-y-1 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color + '18' }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 h-60">
          {[
            IMAGES.sections.gallery1,
            IMAGES.sections.education,
            IMAGES.sections.gallery3,
            IMAGES.sections.ambassador,
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden group">
              <img
                src={src}
                alt={`HerCycle Foundation program ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundColor: '#e8216b' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#fef2f8]">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">Voices from the Field</span>
            <h2 className="section-title mb-3">Hear From Those Living the Change</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'Before HerCycle Foundation came to our school, my daughter missed days every month and never told me why. Now she goes to school every day and she comes home confident. I wish every mother in this community could see what one pad a month can change.', name: 'Parent', school: 'Community Member, Ruhango District' },
              { quote: 'When I have no pad, I use cloth but it leaks. I sit at the back and leave fast if anything happens. Since the pads started coming to our school, I stopped missing class. I stopped being afraid. Now I sit in the front row.', name: 'Student, Age 15', school: 'ES Kamabuye, Bugesera District' },
              { quote: 'We used to record absences without understanding the real cause. Since HerCycle Foundation began delivering pads to our school each month, girl attendance has visibly improved. The culture here has shifted — students are more confident and teachers are more aware.', name: 'School Administrator', school: 'Partner School, Muhanga District' },
            ].map(({ quote, name, school }, i) => (
              <ScrollReveal key={name} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-1 h-8 rounded-full mb-5" style={{ backgroundColor: '#e8216b' }} />
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">{quote}</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                      style={{ backgroundColor: i % 2 === 0 ? '#e8216b' : '#7b2fbf' }}
                    >
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{name}</p>
                      <p className="text-xs text-gray-400">{school}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0f0a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-label">Join the Movement</span>
            <h2 className="section-title text-white mb-5">
              Together, We Can Reach <span style={{ color: '#e8216b' }}>300 Girls</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Every contribution strengthens attendance, dignity, and confidence in every classroom across Rwanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppDonationLink(50)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 px-10"
              >
                <Heart size={17} /> Donate via WhatsApp
              </a>
              <button
                onClick={() => setPartnerModal(true)}
                className="btn-outline-white text-base py-4 px-10"
              >
                Partner With Us <ArrowRight size={15} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PARTNER MODAL ── */}
      <Modal open={partnerModal} onClose={() => setPartnerModal(false)} title="Partner With HerCycle Foundation">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          We collaborate with schools, NGOs, institutions, and businesses interested in
          strengthening girls' education across Rwanda. Tell us about your organization and
          how you'd like to work with us.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
            <input type="text" required className="form-input" placeholder="Full name" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Organization</label>
            <input type="text" className="form-input" placeholder="Organization or school name" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
            <input type="email" required className="form-input" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
            <textarea rows={3} className="form-input resize-none" placeholder="How would you like to partner with us?" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
            href={getWhatsAppPartnerLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 justify-center"
          >
            <MessageCircle size={15} /> Continue on WhatsApp
          </a>
          <button onClick={() => setPartnerModal(false)} className="btn-outline flex-1 justify-center">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
