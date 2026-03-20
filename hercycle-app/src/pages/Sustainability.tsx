import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Heart, Building2, Repeat2, Users, Leaf, TrendingUp, Plus, Minus, Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import { IMAGES } from '../lib/images';

const PILLARS = [
  { icon: Heart,     color: '#e8216b', title: 'Donations & Personal Funding',  desc: 'Seed funding from individual donors and the founder\'s personal contribution keeps operations running while sustainable revenue streams are built.' },
  { icon: Building2, color: '#7b2fbf', title: 'NGO Partnerships',              desc: 'Strategic partnerships with aligned NGOs and institutions provide funding, in-kind support, and opportunities for collaborative program delivery.' },
  { icon: Leaf,      color: '#e8216b', title: 'Product Distribution',          desc: 'Small-margin distribution of eco-friendly sanitary products generates modest revenue while directly fulfilling our mission at the school level.' },
  { icon: Building2, color: '#7b2fbf', title: 'Training Collaborations',       desc: 'We collaborate with institutions to deliver menstrual health training sessions, generating revenue while extending our reach and credibility.' },
  { icon: Users,     color: '#e8216b', title: 'Ambassador Clubs',              desc: 'Each HerCycle Club operates as a self-sustaining system. Trained ambassadors ensure program continuity beyond any single funding cycle.' },
  { icon: Repeat2,   color: '#7b2fbf', title: 'Long-Term School Systems',      desc: 'We embed programs within school structures  ,  involving teachers, administrators, and parents  ,  so the model outlasts our direct involvement.' },
];

const FAQ = [
  { q: 'How is HerCycle Foundation funded?',
    a: 'We operate through a balanced model: seed funding from individual donors, personal contributions from the founder, NGO partnerships, small-margin product distribution, and training collaborations with institutions.' },
  { q: 'What happens when external funding decreases?',
    a: 'Our ambassador club model is designed for this scenario. Each club is embedded within the school and trained to operate independently. Teachers and administrators are also integrated as ongoing supporters.' },
  { q: 'How do you ensure programs continue in each school?',
    a: 'Every school has a trained HerCycle Club with ambassador students who lead peer support. We integrate teachers and school staff so institutional knowledge is retained even when student cohorts change.' },
  { q: 'Do you plan to expand to more schools?',
    a: 'Yes. Our model is designed to scale. As funding and partnerships grow, we will expand to new schools and districts. Systems built in current schools serve as templates for future expansion.' },
  { q: 'What future revenue streams are planned?',
    a: 'We are exploring an eco-product online store, annual reports, and a school partnership dashboard. These scalable opportunities generate sustainable income while remaining fully mission-aligned.' },
];

export default function Sustainability() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <HeroSection
        image={IMAGES.hero.sustainability}
        height="large"
        overlay={62}
        badge="Built to Last"
        badgeIcon={<Shield size={13} />}
        title={
          <>
            Impact-Driven.{' '}
            <span style={{ color: '#e8216b' }}>Sustainability</span>-Structured.
          </>
        }
        subtitle="HerCycle Foundation is built for the long term  ,  with multiple funding streams and school-embedded systems that outlast external support."
        align="left"
      />

      {/* ── OVERVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="section-label">Our Approach</span>
              <h2 className="section-title mb-6">A Balanced Sustainability Model</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                HerCycle Foundation operates through a balanced model combining mission-driven
                funding with structured revenue-generating activities. Our programs grow without
                depending entirely on any single funding source.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our ambassador club model is the cornerstone of long-term sustainability. By
                training students as leaders within their schools, we create change that
                continues long after our direct involvement ends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are transparent about our funding and intentional about building school
                systems that serve girls today while creating lasting institutional change.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <img
                src={IMAGES.sections.community}
                alt="Sustainability in practice"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SIX PILLARS ── */}
      <section className="py-24" style={{ backgroundColor: '#fef2f8' }}>
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">How We Sustain</span>
            <h2 className="section-title mb-3">Six Sustainability Pillars</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              A multi-stream model combining mission funding and earned revenue for long-term impact.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(({ icon: Icon, color, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SUSTAINABILITY ── */}
      <section className="py-24 bg-[#0f0a1a]">
        <div className="max-w-11/12l mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">The Foundation</span>
            <h2 className="section-title text-white">Why Sustainability Matters</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Heart,      color: '#e8216b', title: 'Consistent Support',  desc: 'Girls need reliable, ongoing support  ,  not one-time interventions that disappear after a project cycle.' },
              { Icon: Repeat2,    color: '#7b2fbf', title: 'School-Embedded',     desc: 'Programs embedded in school culture outlast any project funding cycle and adapt to school changes.' },
              { Icon: Users,      color: '#e8216b', title: 'Peer Leadership',      desc: 'Ambassador clubs create a self-renewing peer leadership model each school year.' },
              { Icon: TrendingUp, color: '#7b2fbf', title: 'Multiple Streams',    desc: 'Diverse funding reduces dependency risk and builds long-term organisational resilience.' },
            ].map(({ Icon, color, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 border border-white/5"
                  style={{ backgroundColor: '#1a0a2e' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-white mb-2 text-base">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-2">
            {FAQ.map(({ q, a }, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div
                  className="rounded-xl border overflow-hidden transition-colors duration-200"
                  style={{ borderColor: openIdx === i ? '#e8216b' : '#e5e7eb' }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-sm pr-4 leading-snug">{q}</span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
                      style={{ backgroundColor: openIdx === i ? '#e8216b' : '#f3f4f6' }}
                    >
                      {openIdx === i
                        ? <Minus size={13} className="text-white" />
                        : <Plus size={13} className="text-gray-500" />
                      }
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                          {a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE SCALABILITY ── */}
      <section className="py-24" style={{ backgroundColor: '#f5f0ff' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#7b2fbf' }}>Future Growth</span>
            <h2 className="section-title mb-5">Designed to Scale</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our infrastructure is built with expansion in mind. As funding and partnerships grow,
              we will expand to more schools, launch annual reporting, and explore an eco-product store
              and school partnership dashboard.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['Blog Section', 'Annual Reports', 'Eco-Product Store', 'School Dashboard', 'More Schools'].map(item => (
                <span
                  key={item}
                  className="rounded-full px-4 py-2 text-sm font-semibold border-2 bg-white"
                  style={{ color: '#7b2fbf', borderColor: '#e9d5ff' }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved" className="btn-primary">Support Our Growth <ArrowRight size={15} /></Link>
              <Link to="/contact" className="btn-secondary">Explore Partnership <ArrowRight size={15} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
