import { type ReactNode, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  image: string;
  badge?: string;
  badgeIcon?: ReactNode;
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  align?: 'left' | 'center';
  height?: 'screen' | 'large' | 'medium';
  overlay?: number;
  children?: ReactNode;
  showScroll?: boolean;
}

export default function HeroSection({
  image,
  badge,
  badgeIcon,
  title,
  subtitle,
  actions,
  align = 'center',
  height = 'large',
  overlay = 62,
  children,
  showScroll = false,
}: HeroSectionProps) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const handler = () => {
      el.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const heightClass =
    height === 'screen' ? 'min-h-screen' :
    height === 'large'  ? 'min-h-[78vh]'  :
                          'min-h-[50vh]';

  const alignClass = align === 'left'
    ? 'text-left items-start'
    : 'text-center items-center';

  return (
    <section className={`relative ${heightClass} flex flex-col justify-center overflow-hidden pt-20`}>
      {/* Background */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Solid overlay  ,  no gradient */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(15, 10, 26, ${overlay / 100})` }}
      />

      {/* Content */}
      <div className={`relative z-10 max-w-11/12l mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 flex flex-col ${alignClass} gap-5`}>
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium text-white">
              {badgeIcon}
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-serif font-bold text-white leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            {actions}
          </motion.div>
        )}

        {children}
      </div>

      {showScroll && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={28} />
        </motion.div>
      )}
    </section>
  );
}
