import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Cog, Target, Zap, Wrench, Microscope, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { PageHero } from '../components/sections';

export const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Cog,
      title: t('services.cncMilling'),
      description: t('services.cncMillingDescLong'),
      capabilities: [
        '5-axis simultaneous machining',
        'Tolerances to ±0.005mm',
        'Work envelope up to 1500x800x700mm',
        'High-speed machining up to 24,000 RPM',
      ],
      materials: ['Aluminum', 'Steel', 'Titanium', 'Inconel', 'Plastics'],
    },
    {
      icon: Target,
      title: t('services.cncTurning'),
      description: t('services.cncTurningDescLong'),
      capabilities: [
        'Live tooling capability',
        'Bar feeding up to Ø65mm',
        'Swiss-type turning for small parts',
        'Y-axis milling operations',
      ],
      materials: ['Stainless Steel', 'Brass', 'Copper', 'Tool Steel', 'Aluminum'],
    },
    {
      icon: Zap,
      title: t('services.rapidPrototyping'),
      description: t('services.rapidPrototypingDescLong'),
      capabilities: [
        '48-hour quote turnaround',
        'DFM feedback included',
        'Material selection support',
        'Finish options available',
      ],
      materials: ['All machinable metals', 'Engineering plastics'],
    },
    {
      icon: Wrench,
      title: t('services.assemblyServices'),
      description: t('services.assemblyServicesDescLong'),
      capabilities: [
        'Mechanical assembly',
        'Press-fit operations',
        'Thread inserts installation',
        'Functional testing',
      ],
      materials: ['Customer-supplied components', 'Purchased parts'],
    },
    {
      icon: Microscope,
      title: t('services.qualityInspection'),
      description: t('services.qualityInspectionDescLong'),
      capabilities: [
        'CMM inspection to 0.001mm',
        'First Article Inspection (FAI)',
        'Material certifications',
        'Surface roughness testing',
      ],
      materials: ['All materials'],
    },
    {
      icon: Package,
      title: t('services.surfaceFinishing'),
      description: t('services.surfaceFinishingDescLong'),
      capabilities: [
        'Anodizing (Type II & III)',
        'Powder coating',
        'Passivation',
        'Bead blasting',
      ],
      materials: ['Aluminum', 'Steel', 'Stainless Steel'],
    },
  ];

  return (
    <div>
      <PageHero title={t('services.pageTitle')} subtitle={t('services.pageSubtitle')} />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 bg-emas-light-bg rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-emas-soft-blue" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-emas-deep-blue mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-emas-deep-blue mb-3">{t('services.capabilities')}:</h4>
                      <ul className="space-y-2">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-3 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-emas-soft-blue flex-shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emas-deep-blue mb-3">{t('services.materials')}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.materials.map((mat) => (
                          <span key={mat} className="px-3 py-1 bg-emas-light-bg text-emas-deep-blue text-sm rounded-full">
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="aspect-[4/3] bg-gradient-to-br from-emas-light-bg to-emas-soft-blue/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-24 h-24 text-emas-soft-blue/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      
    </div>
  );
};

export default ServicesPage;
