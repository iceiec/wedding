import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619905155368-47500f5fa2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NTg2NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wedding couple at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p
            className="text-xl mb-4 tracking-widest uppercase"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            We're Getting Married
          </p>
          <h1
            className="text-7xl md:text-8xl mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: '1.2'
            }}
          >
            Sarah & James
          </h1>
          <div
            className="text-2xl mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            June 15, 2026
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-white/50" />
            <p className="text-lg tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>
              Save the Date
            </p>
            <div className="h-px w-16 bg-white/50" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
