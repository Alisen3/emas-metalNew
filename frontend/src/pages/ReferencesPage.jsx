import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Building2, ArrowRight } from 'lucide-react';
import { SectionHeader, LoadingSpinner, Alert } from '../components/ui';
import { PageHero } from '../components/sections';
import { referencesApi, getImageUrl } from '../api';

// Fallback data for when API is unavailable
const fallbackReferences = [
  { id: '1', name: 'Siemens Energy', industry: 'Energy & Power', description: 'Precision turbine components', websiteUrl: 'https://siemens-energy.com', createdAt: '' },
  { id: '2', name: 'Bosch Rexroth', industry: 'Industrial Automation', description: 'Hydraulic system components', websiteUrl: 'https://boschrexroth.com', createdAt: '' },
  { id: '3', name: 'MAN Truck & Bus', industry: 'Automotive', description: 'Heavy-duty engine components', websiteUrl: 'https://man.eu', createdAt: '' },
  { id: '4', name: 'ThyssenKrupp', industry: 'Steel & Materials', description: 'Steel processing equipment parts', websiteUrl: 'https://thyssenkrupp.com', createdAt: '' },
  { id: '5', name: 'ABB Ltd', industry: 'Electrical Equipment', description: 'Motor housings and enclosures', websiteUrl: 'https://abb.com', createdAt: '' },
  { id: '6', name: 'KUKA Robotics', industry: 'Robotics', description: 'Robotic arm components', websiteUrl: 'https://kuka.com', createdAt: '' },
  { id: '7', name: 'Liebherr', industry: 'Heavy Machinery', description: 'Construction equipment parts', websiteUrl: 'https://liebherr.com', createdAt: '' },
  { id: '8', name: 'Voith', industry: 'Industrial Technology', description: 'Power transmission components', websiteUrl: 'https://voith.com', createdAt: '' },
];

export const ReferencesPage = () => {
  const { t } = useTranslation();
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const industries = [
    { name: t('references.aerospaceDefense'), count: 15 },
    { name: t('references.automotive'), count: 25 },
    { name: t('references.energyPower'), count: 18 },
    { name: t('references.medicalDevices'), count: 12 },
    { name: t('references.industrialMachinery'), count: 30 },
    { name: t('references.roboticsAutomation'), count: 20 },
  ];

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        setLoading(true);
        const data = await referencesApi.getAll();
        setReferences(data.length > 0 ? data : fallbackReferences);
        setError(null);
      } catch (err) {
        console.warn('Using fallback data:', err);
        setReferences(fallbackReferences);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchReferences();
  }, []);

  return (
    <div>
      <PageHero title={t('references.pageTitle')} subtitle={t('references.pageSubtitle')} />

      {/* Stats */}
      

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t('references.industriesTitle')}
            subtitle={t('references.industriesSubtitle')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center justify-between p-6 bg-emas-light-bg rounded-xl hover:bg-emas-soft-blue/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Building2 className="w-6 h-6 text-emas-soft-blue" />
                  <span className="font-medium text-emas-deep-blue">{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client References */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t('references.ourClientsTitle')}
            subtitle={t('references.ourClientsSubtitle')}
          />

          {loading ? (
            <div className="flex justify-center py-20">
              <LoadingSpinner size="lg" text={t('references.loadingReferences')} />
            </div>
          ) : error ? (
            <Alert type="error" message={error} className="mt-8" />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {references.map((ref) => (
                <div
                  key={ref.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  {ref.logoUrl ? (
                    <div className="h-16 flex items-center justify-center mb-4">
                      <img
                        src={getImageUrl(ref.logoUrl)}
                        alt={`${ref.name} logo`}
                        className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  ) : (
                    <div className="h-16 flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-emas-light-bg rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-heading font-bold text-emas-soft-blue">
                          {ref.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  <h3 className="font-heading font-semibold text-emas-deep-blue text-center mb-2">
                    {ref.name}
                  </h3>

                  {ref.industry && (
                    <p className="text-xs text-gray-500 text-center mb-2">{ref.industry}</p>
                  )}

                  {ref.description && (
                    <p className="text-sm text-gray-600 text-center mb-3">{ref.description}</p>
                  )}

                  {ref.websiteUrl && (
                    <div className="text-center">
                      <a
                        href={ref.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-emas-soft-blue hover:text-emas-deep-blue transition-colors"
                      >
                        {t('references.visitWebsite')}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonial */}
      

      {/* CTA */}
      
    </div>
  );
};

export default ReferencesPage;
