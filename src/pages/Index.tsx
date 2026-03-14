import { I18nProvider } from "@/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default Index;
