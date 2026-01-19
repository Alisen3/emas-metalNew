import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Target, Heart, Users, TrendingUp, Award } from 'lucide-react';
import { SectionHeader, PrimaryButton } from '../components/ui';

export const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t('about.precision'), description: t('about.precisionDesc') },
    { icon: Heart, title: t('about.integrity'), description: t('about.integrityDesc') },
    { icon: Users, title: t('about.partnership'), description: t('about.partnershipDesc') },
    { icon: TrendingUp, title: t('about.innovation'), description: t('about.innovationDesc') },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'AS9100D Aerospace Quality',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emas-light-bg to-white">
        <div className="absolute inset-0 bg-industrial-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-emas-deep-blue mb-6">
              {t('about.pageTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('about.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-emas-deep-blue mb-6">{t('about.ourStory')}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-emas-soft-blue to-emas-deep-blue rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-heading font-bold mb-2">15+</div>
                  <div className="text-lg opacity-90">{t('about.yearsOfExcellence')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('about.coreValuesTitle')} subtitle={t('about.coreValuesSubtitle')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center p-6 bg-white rounded-xl">
                  <div className="w-16 h-16 mx-auto bg-emas-light-bg rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-emas-soft-blue" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-emas-deep-blue mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('about.certificationsTitle')} subtitle={t('about.certificationsSubtitle')} />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-4 p-6 bg-emas-light-bg rounded-xl">
                <Award className="w-8 h-8 text-emas-soft-blue flex-shrink-0" />
                <span className="font-medium text-emas-deep-blue">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emas-deep-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">{t('about.partnerWithUs')}</h2>
          <p className="text-white/80 mb-8">
            {t('about.partnerWithUsDesc')}
          </p>
          <Link to="/contact">
            <PrimaryButton className="bg-white text-emas-deep-blue hover:bg-gray-100">
              {t('about.getInTouch')}
            </PrimaryButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
