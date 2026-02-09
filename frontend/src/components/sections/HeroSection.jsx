import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../ui';

export const HeroSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Shield, value: '15+', label: t('hero.yearsExperience') },
    { icon: Award, value: 'ISO 9001', label: t('hero.certified') },
    { icon: Clock, value: '48h', label: t('hero.quickQuotes') },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background - Desktop only */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        poster="/images/hero-cnc.jpg"
      >
        <source src="/videos/hero-cnc.mp4" type="video/mp4" />
      </video>

      {/* Static Image Background - Mobile only */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/hero-cnc.jpg')" }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-emas-soft-blue rounded-full" />
              <span className="text-sm font-medium text-white">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              {t('hero.title1')}{' '}
              <span className="text-emas-soft-blue">{t('hero.title2')}</span>{' '}
              {t('hero.title3')}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact">
                <PrimaryButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {t('hero.requestQuote')}
                </PrimaryButton>
              </Link>
              <Link to="/capabilities">
                <SecondaryButton size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  {t('hero.ourCapabilities')}
                </SecondaryButton>
              </Link>
            </div>

            {/* Stats */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
