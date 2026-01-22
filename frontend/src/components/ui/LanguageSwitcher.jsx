import { useTranslation } from 'react-i18next';

// Turkish Flag SVG
const TurkishFlag = ({ className }) => (
  <svg className={className} viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="800" fill="#E30A17"/>
    <circle cx="425" cy="400" r="200" fill="#ffffff"/>
    <circle cx="475" cy="400" r="160" fill="#E30A17"/>
    <polygon fill="#ffffff" points="583,400 764,458 656,350 656,450 764,342"/>
  </svg>
);

// UK Flag SVG
const UKFlag = ({ className }) => (
  <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex items-center gap-1">
      {/* Turkish Button */}
      <button
        onClick={() => changeLanguage('tr')}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
          currentLang === 'tr'
            ? 'bg-emas-soft-blue/10 text-emas-deep-blue ring-1 ring-emas-soft-blue/30'
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Türkçe"
        title="Türkçe"
      >
        <TurkishFlag className="w-5 h-3.5 rounded-sm shadow-sm" />
        <span className="hidden sm:inline">TR</span>
      </button>

      {/* English Button */}
      <button
        onClick={() => changeLanguage('en')}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-emas-soft-blue/10 text-emas-deep-blue ring-1 ring-emas-soft-blue/30'
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="English"
        title="English"
      >
        <UKFlag className="w-5 h-3.5 rounded-sm shadow-sm" />
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
