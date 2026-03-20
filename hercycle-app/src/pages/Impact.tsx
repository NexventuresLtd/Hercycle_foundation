import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, School, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { IMAGES } from '../lib/images';

const METRICS = [
  { icon: Users,      value: 120, suffix: '+', label: 'Girls Reached',          color: '#e8216b' },
  { icon: School,     value: 3,   suffix: '',  label: 'Schools Engaged',        color: '#7b2fbf' },
  { icon: Star,       value: 3,   suffix: '',  label: 'Ambassador Clubs',       color: '#e8216b' },
  { icon: TrendingUp, value: 20,  suffix: '%', label: 'Absenteeism Target',     color: '#7b2fbf' },
];

const MILESTONES = [
  { label: 'Girls Reached',    current: 120, target: 300, percent: 40, color: '#e8216b' },
  { label: 'Schools Engaged',  current: 3,   target: 10,  percent: 30, color: '#7b2fbf' },
  { label: 'Ambassador Clubs', current: 3,   target: 10,  percent: 30, color: '#e8216b' },
];

const TESTIMONIALS = [
  { quote: 'Since HerCycle came to our school, more girls attend class regularly. The change is visible and measurable.', name: 'School Administrator', role: 'Partner School, Muhanga', init: 'A' },
  { quote: 'Before this program, I would stay home for 2–3 days every month. Now I come every day and feel confident.', name: 'Student Ambassador',  role: 'HerCycle Club, Bugesera',   init: 'S' },
  { quote: 'The ambassador model works. Girls support each other and the school culture around menstrual health has shifted.', name: 'Class Teacher',       role: 'Partner School, Muhanga',   init: 'T' },
];

const GALLERY = [
  IMAGES.sections.gallery1, IMAGES.sections.community,  IMAGES.sections.gallery3,
  IMAGES.sections.gallery4, IMAGES.sections.education,  IMAGES.sections.gallery5,
];

export default function Impact() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length);

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <HeroSection
        image={IMAGES.hero.impact}
        height="large"
        overlay={68}
        badge="Measured & Verified Impact"
        badgeIcon={<TrendingUp size={13} />}
        title={
          <>
            <span style={{ color: '#e8216b' }}>Real</span> Results.{' '}
            Real Change.
          </>
        }
        subtitle="Progress you can see, results you can measure. Here is what HerCycle Foundation has achieved so far."
        align="left"
      />

      {/* ── METRICS GRID ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">Progress So Far</span>
            <h2 className="section-title mb-3">What We Have Achieved</h2>
            <p className="section-subtitle max-w-xl mx-auto">Numbers from our active schools in Bugesera and Muhanga.</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map(({ icon: Icon, value, suffix, label, color }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="card text-center">
                  <div
                    className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <p className="text-4xl font-bold font-serif mb-1" style={{ color }}>
                    <AnimatedCounter end={value} suffix={suffix} />
                  </p>
                  <p className="text-sm font-semibold text-gray-700">{label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRESS BARS ── */}
      <section className="py-24" style={{ backgroundColor: '#fef2f8' }}>
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="section-label">Phase 1 Progress</span>
              <h2 className="section-title mb-5">Where We Stand</h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Our target is to reach 300 girls while reducing class absenteeism by at least 20%
                across partner schools. These bars show how far we have come.
              </p>
              <div className="space-y-7">
                {MILESTONES.map(({ label, current, target, percent, color }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">{label}</span>
                      <span className="text-sm font-bold" style={{ color }}>
                        {current} <span className="text-gray-400 font-normal">/ {target}</span>
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full progress-bar"
                        style={{ width: `${percent}%`, backgroundColor: color }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{percent}% of phase target</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-5">What Has Been Established</h3>
                <ul className="space-y-4">
                  {[
                    '3 schools engaged with active HerCycle programs',
                    '120 girls receiving regular menstrual health support',
                    'Ambassador clubs operational in all partner schools',
                    'Teachers and staff integrated into support systems',
                    'Attendance tracking systems live across all schools',
                    'Quarterly health education sessions underway',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-xs"
                        style={{ backgroundColor: i % 2 === 0 ? '#e8216b' : '#7b2fbf' }}
                      >
                        ✓
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS CAROUSEL ── */}
      <section className="py-24 bg-[#0f0a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">Voices from Our Schools</span>
            <h2 className="section-title text-white">What They Say</h2>
          </ScrollReveal>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl p-6 sm:p-10"
                style={{ backgroundColor: '#1a0a2e' }}
              >
                <div
                  className="w-1 h-10 rounded-full mb-6"
                  style={{ backgroundColor: '#e8216b' }}
                />
                <p className="text-white text-lg leading-relaxed mb-8">{TESTIMONIALS[idx].quote}</p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: '#e8216b' }}
                  >
                    {TESTIMONIALS[idx].init}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{TESTIMONIALS[idx].name}</p>
                    <p className="text-gray-400 text-xs">{TESTIMONIALS[idx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === idx ? '24px' : '8px',
                      backgroundColor: i === idx ? '#e8216b' : '#ffffff30',
                    }}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="section-label">From Our Schools</span>
            <h2 className="section-title">Impact in Pictures</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl aspect-video"
                >
                  <img
                    src={src}
                    alt={`Impact photo ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLID STAT BAND ── */}
      <section className="py-16" style={{ backgroundColor: '#e8216b' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center text-white">
            {[
              { n: 120, s: '+', label: 'Girls Supported' },
              { n: 3,   s: '',  label: 'Partner Schools' },
              { n: 20,  s: '%', label: 'Absenteeism Target' },
            ].map(({ n, s, label }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div>
                  <p className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif mb-2">
                    <AnimatedCounter end={n} suffix={s} />
                  </p>
                  <p className="text-white/80 font-medium text-sm">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-title mb-4">
              Help Us Reach <span style={{ color: '#e8216b' }}>300 Girls</span>
            </h2>
            <p className="text-gray-500 mb-8">Your support directly expands the impact behind these numbers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved" className="btn-primary">Donate Now <ArrowRight size={15} /></Link>
              <Link to="/sustainability" className="btn-secondary">Our Sustainability Model <ArrowRight size={15} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
