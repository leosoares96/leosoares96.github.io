import { useI18n } from "@/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          {t.footer.built}
        </p>
      </div>
    </footer>
  );
}
