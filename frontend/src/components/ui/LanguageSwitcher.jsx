import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-emas-deep-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
      aria-label="Change language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
    </button>
  );
};

export default LanguageSwitcher;
