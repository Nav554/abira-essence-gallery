import { motion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
}: PropsWithChildren<{ delay?: number; className?: string }>) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl leading-tight text-gold-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base text-muted-foreground ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
