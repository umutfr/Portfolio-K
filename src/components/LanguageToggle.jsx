// src/components/LanguageToggle.jsx
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TrFlag from "@/assets/Flag_of_Turkey.png";
import USAFlag from "@/assets/Flag_of_America.png";

export function LanguageToggle() {

  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-lg bg-primary text-white text-sm font-semibold shadow-md transition-colors hover:bg-primary/80 flex items-center gap-2"
    >
      {i18n.language === "tr" ? (
        <>
            EN <img src={USAFlag} alt="ENG" className="w-7 h-5 border-1 rounded-lg" />
        </>) : (
        <>
            TR <img src={TrFlag} alt="TR" className="w-7 h-5 border-1 rounded-lg" />
        </>

        )}
    </motion.button>
  );
}
