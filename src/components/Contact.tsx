import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useI18n } from "@/i18n";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const { t } = useI18n();

  const links = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/leonardo-soares/" },
    { icon: Mail, label: "leo.soares64@outlook.com", href: "mailto:leo.soares64@outlook.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/Leosoares96" },
  ];

  const externalLinks = [
    { label: "Medium", href: "https://medium.com/@leosoares96" },
    { label: "Tableau Public", href: "https://public.tableau.com/profile/leosoares96" },
    { label: "Credly", href: "https://www.credly.com/users/leonardo-soares-pereira/badges" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <SectionHeader title={t.contact.sectionTitle} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground mb-10 leading-relaxed italic"
        >
          "{t.contact.subtitle}"
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="card-surface-hover px-5 py-3 flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground w-full sm:w-auto justify-center"
            >
              <link.icon size={16} className="text-primary shrink-0" />
              {link.label}
            </a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-mono bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
