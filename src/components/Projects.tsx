import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader title={t.projects.sectionTitle} />
        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative card-surface-hover p-6 flex flex-col"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 relative z-10 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-secondary text-muted-foreground font-mono text-[10px] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors relative z-10"
              >
                {t.projects.viewRepo} <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
