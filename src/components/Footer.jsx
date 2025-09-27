import { ArrowUp, X } from "lucide-react"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

export const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
export const Footer = () => {
    const { t } = useTranslation();
    return(
        <footer className="relative mt-20">
      {/* Üst çizgi */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto max-w-5xl py-12 px-6 flex flex-col items-center gap-6">
        {/* Sosyal medya ikonları */}
        <div className="flex space-x-6">
        <a
            href="https://github.com/umutfr"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
        >
            <Github className="h-5 w-5" />
        </a>

      
  
</div>


        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
      <div>
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 hover:drop-shadow-[0_0_12px_hsl(var(--primary))] transition-transform z-50"
            aria-label="Back to top"
            >
                <ArrowUp className="h-5 w-5" />
        </button>

      </div>
      
    </footer>
    )
}
