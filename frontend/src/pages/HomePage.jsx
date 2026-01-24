import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Cog,
  Target,
  Zap,
  Users,
  CheckCircle,
  Gauge
} from 'lucide-react';
import { HeroSection } from '../components/sections';
import { SectionHeader, ServiceCard, PrimaryButton, SecondaryButton } from '../components/ui';

export const HomePage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Cog,
      title: t('services.cncMilling'),
      description: t('services.cncMillingDesc'),
      features: [t('services.fiveAxisSimultaneous'), t('services.toleranceTo'), t('services.largeFormat')],
    },
    {
      icon: Target,
      title: t('services.cncTurning'),
      description: t('services.cncTurningDesc'),
      features: [t('services.liveTooling'), t('services.barFeeding'), t('services.swissTypeTurning')],
    },
    
    {
      icon: Gauge,
      title: t('services.qualityInspection'),
      description: t('services.qualityInspectionDesc'),
      features: [t('services.fullCmmInspection'), t('services.firstArticleReports'), t('services.materialCertifications')],
    },
  ];

  const industries = [
    t('industries.agriculturalMachinery'),
    t('industries.automotive'),
    t('industries.homeAppliances'),
    t('industries.hydraulicPneumatic'),
    t('industries.industrialMachinery'),
    t('industries.machineParts'),
  ];

  const whyChooseUs = [
    {
      title: t('common.precisionEngineering'),
    },
    {
      title: t('common.fastTurnaround'),
    },
    {
      title: t('common.materialVariety'),
      description: t('common.materialVarietyDesc'),
    },
    {
      title: t('common.qualityCertified'),
      description: t('common.qualityCertifiedDesc'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t('home.servicesTitle')}
            subtitle={t('home.servicesSubtitle')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <PrimaryButton rightIcon={<ArrowRight className="w-5 h-5" />}>
                {t('home.viewAllServices')}
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title={t('home.whyChooseTitle')}
                subtitle={t('home.whyChooseSubtitle')}
                align="left"
              />

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-emas-soft-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-semibold text-emas-deep-blue mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about">
                  <SecondaryButton rightIcon={<ArrowRight className="w-5 h-5" />}>
                    {t('home.learnMoreAboutUs')}
                  </SecondaryButton>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-emas-soft-blue to-emas-deep-blue rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-industrial-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-heading font-bold mb-2">10+</div>
                    <div className="text-lg opacity-90">{t('home.yearsOfSustainability')}</div>
                  </div>
                </div>
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emas-light-bg rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-emas-soft-blue" />
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-emas-deep-blue">10+</div>
                    <div className="text-sm text-gray-500">{t('home.satisfiedClients')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t('home.industriesTitle')}
            subtitle={t('home.industriesSubtitle')}
          />

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {industries.map((industry) => (
              <div
                key={industry}
                className="px-6 py-3 bg-emas-light-bg rounded-full text-emas-deep-blue font-medium hover:bg-emas-soft-blue hover:text-white transition-colors cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/references">
              <SecondaryButton rightIcon={<ArrowRight className="w-5 h-5" />}>
                {t('home.viewOurReferences')}
              </SecondaryButton>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
