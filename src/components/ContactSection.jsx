import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useTheme } from "@/context/ThemeContext";

export const ContactSection = () => {
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [charCount, setCharCount] = useState(0);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const form = useRef();

    // reCAPTCHA callback için useEffect ile window üstüne ekliyoruz
    useEffect(() => {
        window.handleCaptcha = () => setCaptchaVerified(true);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!captchaVerified) {
            toast({
                title: t("google.recaptchaError") || "Please verify you're not a robot",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current, 
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
          )
          .then(
            () => {
              toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon",
              });
              setIsSubmitting(false);
              setCaptchaVerified(false); // ✅ reset captcha
              setMessage("");
              setCharCount(0);
              if(window.grecaptcha) window.grecaptcha.reset(); // ✅ reCAPTCHA reset
            },
            (error) => {
              toast({
                title: "Failed to send",
                description: error.text,
                variant: "destructive"
              });
              setIsSubmitting(false);
            }
          );
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t("contact.getInTouch.p1")}
                    <span className="text-primary">{t("contact.getInTouch.p2")}</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t("contact.subheading")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">{t("contact.infoHeading")}</h3>
                        <div className="space-y-6 text-left">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:umutw4141@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        umutw4141@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t("contact.phone")}</h4>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        +90 538 438 41 06
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t("contact.location")}</h4>
                                    <span className="text-muted-foreground">
                                        {t("contact.locationText")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/umut-g/" target="_blank"
                                  className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary))]">
                                  <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/umut.exw/" target="_blank"
                                  className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary))]">
                                  <Instagram/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">{t("contact.sendMessage")}</h3>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                                    {t("contact.name")}
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder={t("contact.placeholders.name")}
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                                    {t("contact.yourEmail")}
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder={t("contact.placeholders.email")}
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    {t("contact.yourMessage")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    maxLength={400}
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                        setCharCount(e.target.value.length);
                                    }}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder={t("contact.placeholders.message")}
                                />
                                <span className="absolute bottom-2 right-2 text-sm text-muted-foreground">
                                    {charCount}/400
                                </span>
                            </div>

                            {/* Hidden input ile time ekle */}
                            <input
                                type="hidden"
                                name="time"
                                value={new Date().toLocaleString()}
                            />

                            {/* Google reCAPTCHA */}
                            <div className="flex flex-col items-center space-y-2">
                                <label htmlFor="g-recaptcha" className="block text-sm font-medium">
                                    {t("google.recaptchaError")}
                                </label>
                                <div
                                    id="g-recaptcha"
                                    className="g-recaptcha"
                                    data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // ✅ .env den al
                                    data-theme={isDarkMode ? "dark" : "light"} // ✅ dark mode
                                    data-callback="handleCaptcha"
                                ></div>
                            </div>

                            {/* Submit */}
                            <input
                                type="submit"
                                value={isSubmitting ? t("contact.sending") : t("contact.sendMessage")}
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
                                )}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
