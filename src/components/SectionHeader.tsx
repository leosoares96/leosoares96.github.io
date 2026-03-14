import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
        {title}
        <span className="text-primary">.</span>
      </h2>
      <div className="mt-3 h-px w-12 bg-primary/40" />
    </motion.div>
  );
}
