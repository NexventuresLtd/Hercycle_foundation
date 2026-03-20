import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  videoId: string;
  thumbnail?: string;
  title?: string;
  subtitle?: string;
}

export default function VideoSection({
  videoId,
  thumbnail,
  title = 'Watch Our Story',
  subtitle = "See the real impact HerCycle Foundation is creating in Rwanda's schools.",
}: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 bg-[#0f0a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="section-label">Our Story in Video</span>
          <h2 className="section-title text-white mb-4">{title}</h2>
          <p className="section-subtitle text-white/60 max-w-xl mx-auto">{subtitle}</p>
        </div>

        {/* Player */}
        <div
          className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
          onClick={() => setPlaying(true)}
        >
          {/* Thumbnail */}
          {thumbnail ? (
            <img src={thumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full"
              style={{ backgroundColor: '#1a0a2e' }}
            >
              <div
                className="absolute inset-0 dot-pattern opacity-40"
              />
            </div>
          )}

          {/* Overlay (solid, no gradient) */}
          <div
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
            style={{ backgroundColor: 'rgba(15, 10, 26, 0.55)' }}
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/40"
              style={{ backgroundColor: 'var(--brand-pink)' }}
            >
              <Play size={32} className="text-white fill-white translate-x-0.5" />
            </motion.div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-5 right-5 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-white text-xs font-medium">
            3:24 min
          </div>
        </div>

        {/* YouTube Modal */}
        <AnimatePresence>
          {playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4"
              style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
              onClick={() => setPlaying(false)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="HerCycle Foundation Video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </motion.div>
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
