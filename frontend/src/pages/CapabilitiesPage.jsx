import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../components/ui';

const machines = [
  { name: 'DMG MORI DMU 80 eVo', type: '5-Axis Milling', specs: '800x650x550mm, 24,000 RPM', qty: 2 },
  { name: 'DMG MORI CMX 1100 V', type: '3-Axis Milling', specs: '1100x560x510mm, 12,000 RPM', qty: 3 },
  { name: 'Mazak INTEGREX i-200', type: 'Multi-Tasking', specs: 'Ø658mm, 1,500mm length', qty: 2 },
  { name: 'Mazak QT-250MY', type: 'CNC Turning', specs: 'Ø366mm, Y-axis, live tooling', qty: 4 },
  { name: 'Citizen L20', type: 'Swiss Turning', specs: 'Ø20mm bar capacity', qty: 2 },
  { name: 'Zeiss CONTURA', type: 'CMM', specs: '1000x1200x600mm, VAST XXT', qty: 1 },
];

const tolerances = [
  { feature: 'linearDimensions', standard: '±0.05mm', precision: '±0.01mm', highPrecision: '±0.005mm' },
  { feature: 'holeDiameters', standard: '±0.025mm', precision: '±0.013mm', highPrecision: '±0.005mm' },
  { feature: 'flatness', standard: '0.05mm', precision: '0.02mm', highPrecision: '0.01mm' },
  { feature: 'surfaceFinish', standard: 'Ra 3.2μm', precision: 'Ra 1.6μm', highPrecision: 'Ra 0.8μm' },
  { feature: 'concentricity', standard: '0.05mm', precision: '0.02mm', highPrecision: '0.01mm' },
  { feature: 'angularity', standard: '±0.5°', precision: '±0.1°', highPrecision: '±0.05°' },
];

export const CapabilitiesPage = () => {
  const { t } = useTranslation();

  const materials = [
    { category: t('capabilities.aluminumAlloys'), items: ['6061-T6', '7075-T6', '2024-T3', '5052-H32', 'MIC-6'] },
    { category: t('capabilities.steelStainless'), items: ['304/316 SS', '17-4 PH', '4140', '4340', 'A36'] },
    { category: t('capabilities.exoticAlloys'), items: ['Titanium Ti-6Al-4V', 'Inconel 625/718', 'Hastelloy', 'Monel'] },
    { category: t('capabilities.plastics'), items: ['Delrin/Acetal', 'PEEK', 'UHMW', 'Nylon', 'PTFE'] },
    { category: t('capabilities.copperAlloys'), items: ['C110', 'C360 Brass', 'Bronze', 'Beryllium Copper'] },
  ];

  const finishes = [
    { name: t('capabilities.asMachined'), description: t('capabilities.asMachinedDesc') },
    { name: t('capabilities.beadBlasted'), description: t('capabilities.beadBlastedDesc') },
    { name: t('capabilities.anodizingTypeII'), description: t('capabilities.anodizingTypeIIDesc') },
    { name: t('capabilities.anodizingTypeIII'), description: t('capabilities.anodizingTypeIIIDesc') },
    { name: t('capabilities.powderCoating'), description: t('capabilities.powderCoatingDesc') },
    { name: t('capabilities.passivation'), description: t('capabilities.passivationDesc') },
    { name: t('capabilities.electrolessNickel'), description: t('capabilities.electrolessNickelDesc') },
    { name: t('capabilities.blackOxide'), description: t('capabilities.blackOxideDesc') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emas-light-bg to-white">
        <div className="absolute inset-0 bg-industrial-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-emas-deep-blue mb-6">
              {t('capabilities.pageTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('capabilities.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('capabilities.equipmentTitle')} subtitle={t('capabilities.equipmentSubtitle')} />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-emas-light-bg">
                  <th className="text-left py-4 px-4 font-heading font-semibold text-emas-deep-blue">{t('capabilities.machine')}</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-emas-deep-blue">{t('capabilities.type')}</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-emas-deep-blue">{t('capabilities.specifications')}</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-emas-deep-blue">{t('capabilities.qty')}</th>
                </tr>
              </thead>
              <tbody>
                {machines.map((machine, index) => (
                  <tr key={machine.name} className={index % 2 === 0 ? 'bg-emas-light-bg/50' : ''}>
                    <td className="py-4 px-4 font-medium text-gray-800">{machine.name}</td>
                    <td className="py-4 px-4 text-gray-600">{machine.type}</td>
                    <td className="py-4 px-4 text-gray-600">{machine.specs}</td>
                    <td className="py-4 px-4 text-center font-semibold text-emas-soft-blue">{machine.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('capabilities.materialsTitle')} subtitle={t('capabilities.materialsSubtitle')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {materials.map((cat) => (
              <div key={cat.category} className="bg-white rounded-xl p-6">
                <h3 className="font-heading font-semibold text-emas-deep-blue mb-4">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emas-soft-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tolerances */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('capabilities.tolerancesTitle')} subtitle={t('capabilities.tolerancesSubtitle')} />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-emas-light-bg">
                  <th className="text-left py-4 px-4 font-heading font-semibold text-emas-deep-blue">{t('capabilities.feature')}</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-emas-deep-blue">{t('capabilities.standard')}</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-emas-deep-blue">{t('capabilities.precision')}</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-emas-deep-blue">{t('capabilities.highPrecision')}</th>
                </tr>
              </thead>
              <tbody>
                {tolerances.map((tol, index) => (
                  <tr key={tol.feature} className={index % 2 === 0 ? 'bg-emas-light-bg/50' : ''}>
                    <td className="py-4 px-4 font-medium text-gray-800">{t(`capabilities.${tol.feature}`)}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{tol.standard}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{tol.precision}</td>
                    <td className="py-4 px-4 text-center font-medium text-emas-soft-blue">{tol.highPrecision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Surface Finishes */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('capabilities.finishesTitle')} subtitle={t('capabilities.finishesSubtitle')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {finishes.map((finish) => (
              <div key={finish.name} className="bg-white rounded-xl p-6">
                <h3 className="font-heading font-semibold text-emas-deep-blue mb-2">{finish.name}</h3>
                <p className="text-sm text-gray-600">{finish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emas-deep-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            {t('capabilities.complexProject')}
          </h2>
          <p className="text-white/80 mb-8">
            {t('capabilities.complexProjectDesc')}
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-emas-deep-blue font-medium rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              {t('capabilities.discussProject')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesPage;
