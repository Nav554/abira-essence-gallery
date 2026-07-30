import { motion } from "framer-motion";

export function Particles({ count = 24 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 10 + Math.random() * 14;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              background:
                "radial-gradient(circle, #f5d989 0%, rgba(212,175,55,0) 70%)",
              animation: `particle ${duration}s linear ${delay}s infinite`,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
}

export function FloatingBottle({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="animate-float"
        whileHover={{ scale: 1.03, rotate: 1 }}
      >
        <BottleSVG />
      </motion.div>
    </motion.div>
  );
}

export function BottleSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 320" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f6e6b3" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#d4af37" stopOpacity="0.18" />
          <stop offset="1" stopColor="#8a6a1f" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="cap" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1a1a1a" />
          <stop offset="0.5" stopColor="#0a0a0a" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <linearGradient id="ring" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#b8892e" />
          <stop offset="0.5" stopColor="#f9e7a1" />
          <stop offset="1" stopColor="#8a6a1f" />
        </linearGradient>
        <linearGradient id="label" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0d0d0d" />
          <stop offset="1" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>
      {/* Bottle body */}
      <rect x="40" y="70" width="120" height="220" rx="16" fill="url(#glass)" stroke="url(#ring)" strokeWidth="1.2" />
      {/* Highlights */}
      <rect x="52" y="80" width="8" height="200" rx="4" fill="#fff" opacity="0.15" />
      <rect x="140" y="90" width="4" height="170" rx="2" fill="#fff" opacity="0.08" />
      {/* Neck */}
      <rect x="78" y="40" width="44" height="34" fill="url(#glass)" stroke="url(#ring)" strokeWidth="1" />
      {/* Cap */}
      <rect x="72" y="6" width="56" height="42" rx="6" fill="url(#cap)" />
      <rect x="72" y="44" width="56" height="4" fill="url(#ring)" />
      {/* Label */}
      <rect x="60" y="150" width="80" height="110" rx="4" fill="url(#label)" stroke="url(#ring)" strokeWidth="0.8" />
      <text x="100" y="210" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="18" fill="#e9c96a" letterSpacing="2">
        ABIRA
      </text>
      <text x="100" y="232" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill="#c9a84c" letterSpacing="3">
        FRAGRANCE
      </text>
      <text x="100" y="185" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="26" fill="#d4af37">
        A
      </text>
    </svg>
  );
}
