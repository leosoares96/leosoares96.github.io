import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n";

const navItems = ["about", "experience", "projects", "techStack", "education", "contact"] as const;

export default function Navbar() {
  const { t, lang, toggleLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIds: Record<string, string> = {
    about: "about",
    experience: "experience",
    projects: "projects",
    techStack: "tech-stack",
    education: "education",
    contact: "contact",
  };

  // Função para scroll suave
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-background/50" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-mono text-sm font-medium text-foreground tracking-tight">
          LSP<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((key) => (
            <a
              key={key}
              href={`#${sectionIds[key]}`}
              onClick={(e) => {
                e.preventDefault(); // Evita o comportamento padrão
                handleScroll(sectionIds[key]); // Scroll suave
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {t.nav[key]}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-muted-foreground bg-secondary hover:text-foreground hover:bg-muted transition-all duration-200"
            aria-label="Toggle Language"
          >
            {lang === "en" ? "PT-BR" : "EN"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-muted-foreground bg-secondary"
            aria-label="Toggle Language"
          >
            {lang === "en" ? "PT-BR" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((key) => (
                <a
                  key={key}
                  href={`#${sectionIds[key]}`}
                  onClick={(e) => {
                    e.preventDefault(); // Evita o comportamento padrão
                    handleScroll(sectionIds[key]); // Scroll suave
                    setMobileOpen(false); // Fecha o menu mobile
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav[key]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}