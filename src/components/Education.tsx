import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { useI18n } from "@/i18n";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const { t } = useI18n();

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Education */}
        <SectionHeader title={t.education.sectionTitle} />
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {t.education.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-5 flex items-start gap-4"
            >
              <GraduationCap size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">{item.institution}</h4>
                <p className="text-sm text-muted-foreground">{item.degree}</p>
                {item.period && (
                  <span className="font-mono text-[11px] text-primary">{item.period}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <SectionHeader title={t.certifications.sectionTitle} />
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {t.certifications.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-5 flex items-start gap-4"
            >
              <Award size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">{item.name}</h4>
                <p className="text-xs text-muted-foreground font-mono">{item.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <SectionHeader title={t.awards.sectionTitle} />
        <div className="grid sm:grid-cols-3 gap-4">
          {t.awards.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-5 flex items-start gap-4"
            >
              <Trophy size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">{item.name}</h4>
                <p className="text-xs text-muted-foreground font-mono">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
