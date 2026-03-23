import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, MapPin, CheckCircle2, Users, Heart, BookOpen, Leaf, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import { IMAGES } from '../lib/images';

const TIMELINE = [
  { year: '2025', label: 'Research Phase',         desc: 'Field research in Bugesera and Muhanga reveals critical gaps in menstrual health support for schoolgirls.' },
  { year: '2025', label: 'Foundation Established', desc: 'HerCycle Foundation officially formed; first school partnership secured in Bugesera district.' },
  { year: '2026', label: 'Programs Launch',         desc: 'Sanitary pad distribution begins; first HerCycle Club established in a partner school.' },
  { year: '2026', label: '120 Girls Reached',       desc: 'Full ambassador model operational across 3 schools with active attendance monitoring in place.' },
];

const VALUES = [
  { Icon: Heart,    label: 'Dignity',        desc: 'Every girl deserves to manage her health with privacy and respect at school.' },
  { Icon: BookOpen, label: 'Education',      desc: 'Consistent school attendance is the foundation of a girl\'s future opportunities.' },
  { Icon: Leaf,     label: 'Sustainability', desc: 'We build systems that continue operating long after our direct involvement ends.' },
  { Icon: BarChart2,label: 'Impact',         desc: 'Every action is measured, transparently reported, and continuously improved upon.' },
];

export default function About() {
  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <HeroSection
        image={IMAGES.hero.about}
        height="large"
        overlay={62}
        badge="Our Story"
        badgeIcon={<Users size={13} />}
        title={
          <>
            A Foundation Built on{' '}
            <span style={{ color: '#e8216b' }}>Research</span> & Purpose
          </>
        }
        subtitle="Born from field findings in rural Rwanda  ,  and already changing lives in schools."
        align="left"
      />

      {/* ── ORIGIN ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <span className="section-label">How It Started</span>
              <h2 className="section-title mb-6">Created to Close a Gap That Should Never Exist</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                HerCycle Foundation was created after field research in three rural schools revealed
                a consistent gap: girls lacked private spaces, open discussion platforms, and reliable
                access to menstrual health support.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Findings from Bugesera and Muhanga were clear  ,  absenteeism related to menstrual
                health was not a minor issue but a systemic barrier to girls' education and confidence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We responded by establishing structured school clubs and beginning direct outreach.
                120 girls have been reached. Our goal is 300  ,  with lasting school-embedded systems
                in place in every partner school.
              </p>
              <div
                className="flex items-center gap-3 text-sm text-gray-500 border-l-4 pl-4 py-1"
                style={{ borderColor: '#e8216b' }}
              >
                <MapPin size={14} style={{ color: '#e8216b' }} />
                <span>Active in Bugesera (1 school) and Muhanga (2 schools), Rwanda</span>
              </div>
            </ScrollReveal>

            {/* Founder card */}
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src={IMAGES.sections.founder}
                  alt="Founder  ,  Ngoga Uwase Sandra"
                  className="w-full h-[440px] object-cover rounded-2xl shadow-xl"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5 rounded-b-2xl"
                  style={{ backgroundColor: 'rgba(15,10,26,0.88)' }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: '#e8216b' }}
                  >
                    Founder
                  </p>
                  <h3 className="font-serif text-lg font-bold text-white">Ngoga Uwase Sandra</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-snug">
                    Driven by firsthand knowledge of how menstrual health barriers impact girls'
                    education in Rwanda, Sandra founded HerCycle Foundation to turn research into change.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24" style={{ backgroundColor: '#fef2f8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">How We Got Here</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {TIMELINE.map(({ year, label, desc }, i) => (
              <ScrollReveal key={year} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex gap-6 items-start cursor-default"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex flex-col items-center justify-center text-white shrink-0 shadow-sm"
                    style={{ backgroundColor: i % 2 === 0 ? '#e8216b' : '#7b2fbf' }}
                  >
                    <span className="text-xs font-semibold leading-none">{year.slice(0,2)}</span>
                    <span className="text-sm font-bold leading-none">{year.slice(2)}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-5 flex-1 border border-gray-100 shadow-sm">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: i % 2 === 0 ? '#e8216b' : '#7b2fbf' }}
                    >
                      {year}
                    </p>
                    <h3 className="font-serif font-bold text-gray-900 mb-1">{label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-[#0f0a1a]">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title text-white">Mission & Vision</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                Icon: Target, color: '#e8216b', label: 'Our Mission',
                text: 'To improve girls\' access to menstrual health support and safe spaces to promote consistent class attendance and academic participation.',
              },
              {
                Icon: Eye, color: '#7b2fbf', label: 'Our Vision',
                text: 'To become a leading foundation in Rwanda that strengthens girls\' education and confidence through sustainable menstrual health solutions.',
              },
            ].map(({ Icon, color, label, text }, i) => (
              <ScrollReveal key={label} delay={i * 0.15}>
                <div
                  className="rounded-2xl p-8 border border-white/5"
                  style={{ backgroundColor: '#1a0a2e' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color }}>
                    {label}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ Icon, label, desc }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: i % 2 === 0 ? '#e8216b' : '#7b2fbf' }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 mb-2">{label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH FINDINGS ── */}
      <section className="py-24" style={{ backgroundColor: '#f5f0ff' }}>
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="section-label" style={{ color: '#7b2fbf' }}>Evidence-Based</span>
              <h2 className="section-title mb-6">Research Findings from the Field</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our programs are rooted in direct field research conducted in Bugesera and Muhanga
                districts. The findings shaped every aspect of the HerCycle model.
              </p>
              <div className="space-y-3">
                {[
                  'Girls miss 2–3 days per month on average due to menstrual health challenges',
                  'Schools lack private spaces for girls to change and manage their health',
                  'Stigma prevents open conversation about menstrual health among students',
                  'Teachers feel unprepared to support girls during their period at school',
                  'Access to sanitary products is the leading factor in attendance improvement',
                ].map((finding, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: '#7b2fbf' }} />
                    <p className="text-sm text-gray-700 leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <img
                src={IMAGES.sections.education}
                alt="Education session at partner school"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-title mb-4">Be Part of the Change</h2>
            <p className="text-gray-500 mb-8">
              Whether you donate, partner, or volunteer  ,  every action keeps a girl in class.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved" className="btn-primary">Support the Mission <ArrowRight size={15} /></Link>
              <Link to="/our-work" className="btn-secondary">See Our Work <ArrowRight size={15} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
