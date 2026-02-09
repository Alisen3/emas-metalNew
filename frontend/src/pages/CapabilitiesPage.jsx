import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../components/ui';
import { PageHero } from '../components/sections';

const machines = [
  { name: 'MEKAY MEKAMAT 6YC', type: 'CNC Otomat Torna', specs: '4 Eksen, Ø42 mm çubuk kapasite ', qty: 1 },
  { name: 'JİNFA JCL 42TG', type: 'CNC Otomat Torna', specs: '2 Eksen, Ø42 mm çubuk kapasite', qty: 1 },
  { name: 'GOODWAY GLS-150', type: 'CNC Otomat Torna', specs: '2 Eksen, Ø42 mm çubuk kapasite', qty: 1 },
  { name: 'MİYANO BNC-42CS', type: 'CNC Otomat Torna', specs: '2 Eksen, Ø42 mm çubuk kapasite', qty: 1 },
  { name: 'DOOSAN S280', type: 'CNC Torna', specs: '2 Eksen, Maksimum tornalama çapı 280 mm ', qty: 1 },
  { name: 'HAAS SL-10HE', type: 'CNC Torna', specs: '2 Eksen, Maksimum tornalama çapı 280 mm ', qty: 1 },
  { name: 'ETASİS ETAMILL VL850', type: 'CNC Dik İşleme Merkezi', specs: '3 Eksen, Tabla boyutu 850x500x550 mm', qty: 1 },
  { name: 'KARMETAL WOS280', type: 'CNC Testere', specs: 'Ø280 mm Kesme kapasite', qty: 1 },
  { name: 'İNDEX B42', type: 'Mekanik Otomat Torna', specs: '3 Eksen, Ø42 mm Çubuk kapasite', qty: 8 },
  { name: 'KOWAY X6325A', type: 'NC Freze', specs: '3 Eksen, Tabla boyutu 900x380x380mm', qty: 1 },
  { name: 'KOWAY C6240B1/1000', type: 'NC Torna', specs: '2 Eksen, Maksimum tornalama çapı 240 mm', qty: 1 },
  { name: 'KOWAY ETS-24', type: 'Servo Kılavuz Çekme ', specs: 'M5-M24 Diş çekme kapasite', qty: 1 },
  { name: 'RETOSAN RM35-ES Ø42 ', type: 'Şanzımanlı Matkap ', specs: 'Ø35 mm Delik delme kapasite', qty: 1 },

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
    { category: t('capabilities.aluminumAlloys'), items: ['6061-T6', '7075-T6', '2024-T3', '5052-H32'] },
    { category: t('capabilities.steelStainless'), items: ['304/316 SS', '4140/4340', 'C20/C30/C40/C50', 'A36'] },
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
      <PageHero title={t('capabilities.pageTitle')} subtitle={t('capabilities.pageSubtitle')} />

      {/* Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('capabilities.equipmentTitle')}  />
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
                    <td className="py-4 px-4  text-gray-800">{machine.name}</td>
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
          <SectionHeader title={t('capabilities.materialsTitle')}  />
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
      

      {/* Surface Finishes */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('capabilities.finishesTitle')}  />
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
      
    </div>
  );
};

export default CapabilitiesPage;
