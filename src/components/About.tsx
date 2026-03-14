import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader title={t.about.sectionTitle} />
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">{t.about.p1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.about.p2}</p>
            <p className="text-muted-foreground leading-relaxed">{t.about.p3}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface p-6 space-y-4 h-fit"
          >
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              {t.about.location}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail size={16} className="text-primary" />
              {t.about.email}
            </div>
            <div className="pt-2 flex gap-3">
              <a
                href="https://github.com/Leosoares96"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-soares/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
