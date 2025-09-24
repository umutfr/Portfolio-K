import { ArrowDown } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";


export const HeroSection = () => {
    const { t, i18n } = useTranslation();

    return (
        <section key={i18n.language}
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1
                        className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">{t('hero.title.0')}</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-1">{t('hero.title.1')}</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">{t('hero.title.2')}</span>
                    </h1>

                    <p className="text-l md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">{t('hero.subtitle')}
                    </p>
                    
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            {t('hero.button')}
                        </a>
                    </div>
                </div>
            </div>
            <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-default">
            <span className="text-sm text-muted-foreground mb-2">{t('hero.scroll')}</span>
            <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    );

};