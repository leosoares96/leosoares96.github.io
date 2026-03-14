import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import profileImg from "@/assets/profile.png";

function DataGrid() {
  return (
    <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
  );
}

function FloatingNodes() {
  const nodes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: 15 + Math.random() * 70,
    y: 15 + Math.random() * 70,
    delay: i * 0.8,
    size: 3 + Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-primary/20"
          style={{ left: `${node.x}%`, top: `${node.y}%`, width: node.size, height: node.size }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + node.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <line x1="20%" y1="30%" x2="60%" y2="50%" stroke="hsl(217 91% 60%)" strokeWidth="1" />
        <line x1="60%" y1="50%" x2="80%" y2="25%" stroke="hsl(217 91% 60%)" strokeWidth="1" />
        <line x1="40%" y1="70%" x2="70%" y2="40%" stroke="hsl(217 91% 60%)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DataGrid />
      <FloatingNodes />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-8 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10"
        >
          <img src={profileImg} alt="Leonardo Soares" className="w-full h-full object-cover" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.03em] text-foreground mb-4"
        >
          {t.hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-muted-foreground mb-6"
        >
          {t.hero.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 glow-blue"
          >
            {t.hero.cta} <ArrowDown size={14} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-muted transition-all duration-200"
          >
            {t.hero.projects}
          </a>
          <a
            href="https://github.com/Leosoares96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-muted transition-all duration-200"
          >
            <Github size={14} /> {t.hero.github}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-muted transition-all duration-200"
          >
            <Mail size={14} /> {t.hero.contact}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
