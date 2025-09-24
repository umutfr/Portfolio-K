import { Briefcase, Code, User } from "lucide-react"
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative" >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.heading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("about.subheading")}</h3>
            <p className="text-muted-foreground">{t("about.paragraph1")}</p>
            <p className="text-muted-foreground">{t("about.paragraph2")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button ">
                {t("about.getInTouch")}
              </a>

              <a href="https://github.com/umutfr" target="_blank"
                //download="umutfr-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                {t("about.downloadCV")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {t("about.skills", { returnObjects: true }).map((skill, i) => (
              <div key={i} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {i === 0 && <Code className="h-6 w-6 text-primary" />}
                    {i === 1 && <User className="h-6 w-6 text-primary" />}
                    {i === 2 && <Briefcase className="h-6 w-6 text-primary" />}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
