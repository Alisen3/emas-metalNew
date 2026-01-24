import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Compass, Star, ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../components/ui';
import { PageHero } from '../components/sections';

export const MissionVisionPage = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t('missionVision.precision'), description: t('missionVision.precisionDesc') },
    { icon: Star, title: t('missionVision.quality'), description: t('missionVision.qualityDesc') },
    { icon: Compass, title: t('missionVision.innovation'), description: t('missionVision.innovationDesc') },
  ];

  return (
    <div>
      <PageHero title={t('missionVision.pageTitle')} subtitle={t('missionVision.pageSubtitle')} />

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
            {/* Mission Image Box */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/mission.jpg"
                  alt={t('missionVision.mission')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder - shown if image fails to load */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-emas-soft-blue/10 to-emas-deep-blue/10 border border-emas-soft-blue/20 items-center justify-center hidden"
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-emas-soft-blue/40 rounded-xl flex items-center justify-center">
                      <Target className="w-10 h-10 text-emas-soft-blue/60" />
                    </div>
                    <p className="text-sm text-emas-deep-blue/60">
                      /images/mission.jpg
                    </p>
                  </div>
                </div>
              </div>
              {/* Quote overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-sm font-medium text-emas-deep-blue italic text-center">
                  "{t('missionVision.missionQuote')}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision Image Box */}
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/vision.jpg"
                  alt={t('missionVision.vision')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder - shown if image fails to load */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-emas-deep-blue to-emas-soft-blue items-center justify-center hidden"
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-white/40 rounded-xl flex items-center justify-center">
                      <Eye className="w-10 h-10 text-white/60" />
                    </div>
                    <p className="text-sm text-white/60">
                      /images/vision.jpg
                    </p>
                  </div>
                </div>
              </div>
              {/* Quote overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-emas-deep-blue/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-sm font-medium text-white italic text-center">
                  "{t('missionVision.visionQuote')}"
                </p>
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
