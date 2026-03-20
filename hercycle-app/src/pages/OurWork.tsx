import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, BookOpen, Star, Users, BarChart2, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import { IMAGES } from '../lib/images';

const PROGRAMS = [
  {
    id: 'pads',
    icon: Package,
    color: '#e8216b',
    label: 'Pad Support',
    title: 'Sanitary Pad Distribution',
    tagline: 'Removing a barrier, restoring attendance',
    image: IMAGES.sections.pads,
    description:
      'We distribute eco-friendly sanitary pads to girls in partner schools on a consistent, structured cycle. Access to reliable menstrual products is one of the most immediate ways to prevent class absenteeism.',
    highlights: [
      'Eco-friendly, sustainable products',
      'Structured distribution aligned to the school calendar',
      'Private and dignified access for students',
      'No supply gaps across the school year',
    ],
    steps: ['School needs assessment', 'Product sourcing', 'Scheduled distribution', 'Feedback collection'],
  },
  {
    id: 'education',
    icon: BookOpen,
    color: '#7b2fbf',
    label: 'Health Education',
    title: 'Menstrual Health Education',
    tagline: 'Knowledge that builds confidence',
    image: IMAGES.sections.education,
    description:
      'Quarterly educational sessions in partner schools promote awareness, break stigma, and build confidence around menstrual health. Sessions are facilitated by trained educators and address both physical and emotional dimensions.',
    highlights: [
      'Quarterly in-school sessions per partner school',
      'Stigma-free, open discussion environment',
      'Age-appropriate, evidence-based curriculum',
      'Teachers and school staff included in all sessions',
    ],
    steps: ['Curriculum design', 'Educator training', 'In-school delivery', 'Student feedback'],
  },
  {
    id: 'clubs',
    icon: Star,
    color: '#e8216b',
    label: 'School Clubs',
    title: 'HerCycle School Clubs',
    tagline: 'Peer-led change that lasts',
    image: IMAGES.sections.clubs,
    description:
      'Each partner school has a dedicated HerCycle Club. Club members are trained as ambassadors who lead peer support, awareness activities, and continuity efforts  ,  ensuring the program lives on within the school community.',
    highlights: [
      'Active clubs in all 3 partner schools',
      'Student-led peer support network',
      'Ambassador training and ongoing mentorship',
      'Program continuity independent of external support',
    ],
    steps: ['Club formation', 'Ambassador selection', 'Leadership training', 'Peer outreach'],
  },
  {
    id: 'ambassador',
    icon: Users,
    color: '#7b2fbf',
    label: 'Ambassador Model',
    title: 'The Ambassador Model',
    tagline: 'Leaders creating lasting impact',
    image: IMAGES.sections.ambassador,
    description:
      'Our ambassador model transforms students into advocates. Trained club members become the first point of contact for their peers, leading awareness campaigns and ensuring no girl feels alone in managing her health at school.',
    highlights: [
      'Peer-to-peer trust and communication',
      'Structured ambassador training curriculum',
      'Leadership development for student participants',
      'Self-sustaining advocacy within the school',
    ],
    steps: ['Identify student leaders', 'Training programme', 'Peer deployment', 'Ongoing coaching'],
  },
  {
    id: 'tracking',
    icon: BarChart2,
    color: '#e8216b',
    label: 'Attendance Tracking',
    title: 'Attendance Tracking & Impact Monitoring',
    tagline: 'Measuring what matters',
    image: IMAGES.sections.tracking,
    description:
      'We work with school administrators to track attendance patterns before and after program implementation. This data-driven approach enables us to measure real impact and demonstrate results to partners.',
    highlights: [
      'Baseline and follow-up attendance data collection',
      'Close collaboration with school administration',
      'Transparent and regular impact reporting',
      'Target: 20% reduction in absenteeism',
    ],
    steps: ['Baseline data', 'Ongoing tracking', 'Analysis & reporting', 'Continuous improvement'],
  },
];

export default function OurWork() {
  const [activeId, setActiveId] = useState('pads');
  const current = PROGRAMS.find(p => p.id === activeId)!;

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <HeroSection
        image={IMAGES.hero.work}
        height="large"
        overlay={65}
        badge="Structured & Sustainable Programs"
        badgeIcon={<Briefcase size={13} />}
        title={
          <>
            Five Programs,{' '}
            <span style={{ color: '#e8216b' }}>One</span> Mission
          </>
        }
        subtitle="Interconnected programs that collectively eliminate menstrual health as a barrier to girls' education in Rwanda."
        align="left"
      />

      {/* ── TAB BAR ── */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {PROGRAMS.map(({ id, icon: Icon, color, label }) => (
              <button
                key={id}
                onClick={() => setActiveId(id)}
                className={`tab-btn ${activeId === id ? 'active' : ''}`}
              >
                <Icon size={14} style={{ color: activeId === id ? color : undefined }} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROGRAM DETAIL ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-[440px] object-cover rounded-2xl shadow-lg"
                />
                <div
                  className="absolute top-4 left-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
                  style={{ backgroundColor: current.color }}
                >
                  {current.label}
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="section-label" style={{ color: current.color }}>
                  {current.tagline}
                </span>
                <h2 className="section-title mb-5">{current.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-7">{current.description}</p>

                <ul className="space-y-3 mb-8">
                  {current.highlights.map(h => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: current.color }} />
                      <span className="text-sm text-gray-700">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Steps */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">How It Works</p>
                  <div className="flex flex-wrap gap-2">
                    {current.steps.map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                          style={{ backgroundColor: current.color }}
                        >
                          {i + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                        {i < current.steps.length - 1 && (
                          <ArrowRight size={12} className="text-gray-200 mx-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="py-24 bg-[#0f0a1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <span className="section-label">Our Work in Video</span>
            <h2 className="section-title text-white mb-3">See It for Yourself</h2>
            <p className="section-subtitle text-white/60 max-w-xl mx-auto">
              Watch how HerCycle Foundation programs are delivered in Rwanda's schools.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black flex justify-center items-center w-full max-w-3xl mx-auto aspect-video">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover min-h-[180px] min-w-[100px]"
                poster={IMAGES.sections.education}
                aria-label="HerCycle Foundation program video"
                style={{ borderRadius: '1rem', backgroundColor: '#000' }}
              >
                <source src="../video.mp4" type="video/mp4" />
                <p className="text-white/60 text-sm p-4">
                  Your browser does not support the video tag. Please update your browser to view this video.
                </p>
              </video>
            </div>
            <p className="text-gray-500 text-xs text-center mt-3">
              Video: HerCycle Foundation &mdash; school programs in action
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ALL PROGRAMS OVERVIEW ── */}
      <section className="py-24" style={{ backgroundColor: '#fef2f8' }}>
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="section-label">All Programs</span>
            <h2 className="section-title">Five Pillars, One Impact</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROGRAMS.map(({ id, icon: Icon, color, label, tagline }, i) => (
              <ScrollReveal key={id} delay={i * 0.07}>
                <button
                  onClick={() => {
                    setActiveId(id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left rounded-2xl p-5 border-2 transition-all duration-200 bg-white hover:-translate-y-1 hover:shadow-md ${
                    activeId === id ? 'shadow-md' : 'border-transparent shadow-sm'
                  }`}
                  style={{ borderColor: activeId === id ? color : undefined }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: color + '18' }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <p className="font-serif font-bold text-gray-900 text-sm mb-1">{label}</p>
                  <p className="text-xs text-gray-400 leading-snug">{tagline}</p>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="section-label">In the Field</span>
            <h2 className="section-title">Our Work in Action</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              IMAGES.sections.pads,     IMAGES.sections.education, IMAGES.sections.clubs,
              IMAGES.sections.ambassador, IMAGES.sections.tracking, IMAGES.sections.community,
            ].map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl aspect-video">
                  <img src={src} alt={`Program photo ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#0f0a1a] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-title text-white mb-4">Support This Work</h2>
            <p className="text-gray-400 mb-8">Every program depends on continued funding, partnerships, and community support.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved" className="btn-primary">Get Involved <ArrowRight size={15} /></Link>
              <Link to="/impact" className="btn-outline-white">See Our Impact <ArrowRight size={15} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
