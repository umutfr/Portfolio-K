import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TrFlag from "@/assets/Flag_of_Turkey.png";
import USAFlag from "@/assets/Flag_of_America.png";
import DEFlag from "@/assets/Flag_of_Germany.png";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languages = [
    { code: "tr", label: "turkiye_bayrak", flag: TrFlag },
    { code: "en", label: "amerika_bayrak", flag: USAFlag },
    { code: "de", label: "almanya_bayrak", flag: DEFlag },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => changeLanguage(lang.code)}
          className={`
            px-3 py-1 rounded-lg text-sm font-semibold shadow-md flex items-center gap-2
            transition-colors
            ${i18n.language === lang.code ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}
          `}
        >
          {lang.label}
          <img src={lang.flag} alt={lang.label} className="w-7 h-5 border rounded-lg" />
        </motion.button>
      ))}
    </div>
  );
}
