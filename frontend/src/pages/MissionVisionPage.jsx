import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Compass, Star, ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../components/ui';

export const MissionVisionPage = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t('missionVision.precision'), description: t('missionVision.precisionDesc') },
    { icon: Star, title: t('missionVision.quality'), description: t('missionVision.qualityDesc') },
    { icon: Compass, title: t('missionVision.innovation'), description: t('missionVision.innovationDesc') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emas-light-bg to-white">
        <div className="absolute inset-0 bg-industrial-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-emas-deep-blue mb-6">
              {t('missionVision.pageTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('missionVision.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emas-soft-blue to-emas-deep-blue rounded-2xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-emas-deep-blue">
                  {t('missionVision.mission')}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">{t('missionVision.missionText1')}</p>
                <p>{t('missionVision.missionText2')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-emas-soft-blue/10 to-emas-deep-blue/10 rounded-2xl flex items-center justify-center border border-emas-soft-blue/20">
                <div className="text-center p-8">
                  <Target className="w-16 h-16 text-emas-soft-blue mx-auto mb-4" />
                  <p className="text-lg font-medium text-emas-deep-blue italic">
                    "{t('missionVision.missionQuote')}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-emas-deep-blue to-emas-soft-blue rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Eye className="w-16 h-16 text-white mx-auto mb-4" />
                  <p className="text-lg font-medium text-white italic">
                    "{t('missionVision.visionQuote')}"
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Eye className="w-7 h-7 text-emas-deep-blue" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-emas-deep-blue">
                  {t('missionVision.vision')}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">{t('missionVision.visionText1')}</p>
                <p>{t('missionVision.visionText2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      

      {/* CTA */}
      
    </div>
  );
};

export default MissionVisionPage;
