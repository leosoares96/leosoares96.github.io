import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader title={t.experience.sectionTitle} />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {t.experience.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary" />
                </div>

                <div className="card-surface p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                    <span className="font-mono text-xs text-primary mt-1 sm:mt-0">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.role}</p>
                  <ul className="space-y-2">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
