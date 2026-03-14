import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import SectionHeader from "./SectionHeader";

const techData = {
  languages: [
    { name: "Python", icon: "🐍" },
    { name: "PySpark", icon: "⚡" },
    { name: "SQL", icon: "🗄️" },
    { name: "PostgreSQL", icon: "🐘" },
  ],
  cloud: [
    { name: "AWS", icon: "☁️" },
    { name: "S3", icon: "📦" },
    { name: "Glue", icon: "🔗" },
    { name: "Athena", icon: "🔍" },
    { name: "EMR", icon: "⚙️" },
    { name: "Lambda", icon: "λ" },
    { name: "Step Functions", icon: "🔀" },
    { name: "GCP", icon: "🌐" },
    { name: "Terraform", icon: "🏗️" },
    { name: "CloudFormation", icon: "📋" },
  ],
  data: [
    { name: "Kafka", icon: "📡" },
    { name: "Data Mesh", icon: "🕸️" },
    { name: "Data Governance", icon: "🛡️" },
    { name: "Data Quality", icon: "✅" },
    { name: "Infrastructure as Code", icon: "💻" },
  ],
};

export default function TechStack() {
  const { t } = useI18n();

  const categories = [
    { key: "languages" as const, label: t.techStack.categories.languages },
    { key: "cloud" as const, label: t.techStack.categories.cloud },
    { key: "data" as const, label: t.techStack.categories.data },
  ];

  return (
    <section id="tech-stack" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader title={t.techStack.sectionTitle} />
        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {techData[cat.key].map((tech) => (
                  <div
                    key={tech.name}
                    className="card-surface-hover px-4 py-3 flex items-center gap-2.5 cursor-default"
                  >
                    <span className="text-base">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
