import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Award, FileText, Download, ExternalLink, ArrowRight, X } from 'lucide-react';
import { SectionHeader, PrimaryButton } from '../components/ui';

// Sertifikalar - PDF dosyalarını frontend/public/certificates/ klasörüne koyun
const certificates = [
  {
    id: '1',
    name: 'ISO 9001:2015',
    title: 'Quality Management System',
    titleTr: 'Kalite Yönetim Sistemi',
    description: 'International standard for quality management systems',
    descriptionTr: 'Kalite yönetim sistemleri için uluslararası standart',
    pdfUrl: '/certificates/iso-9001.pdf',
    issuer: 'TÜV',
    validUntil: '2026',
  },
  {
    id: '2',
    name: 'ISO 14001:2015',
    title: 'Environmental Management System',
    titleTr: 'Çevre Yönetim Sistemi',
    description: 'International standard for environmental management',
    descriptionTr: 'Çevre yönetimi için uluslararası standart',
    pdfUrl: '/certificates/iso-14001.pdf',
    issuer: 'TÜV',
    validUntil: '2026',
  },
  {
    id: '3',
    name: 'AS9100D',
    title: 'Aerospace Quality Management',
    titleTr: 'Havacılık Kalite Yönetimi',
    description: 'Quality management standard for aerospace industry',
    descriptionTr: 'Havacılık sektörü için kalite yönetim standardı',
    pdfUrl: '/certificates/as9100d.pdf',
    issuer: 'TÜV',
    validUntil: '2026',
  },
];

export const CertificatesPage = () => {
  const { t, i18n } = useTranslation();
  const [selectedCert, setSelectedCert] = useState(null);
  const isEnglish = i18n.language === 'en';

  const openPdfViewer = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closePdfViewer = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emas-light-bg to-white">
        <div className="absolute inset-0 bg-industrial-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-emas-deep-blue mb-6">
              {t('certificates.pageTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('certificates.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t('certificates.ourCertificates')}
            subtitle={t('certificates.ourCertificatesDesc')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-emas-soft-blue/20 transition-all duration-300"
              >
                {/* Certificate Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-emas-soft-blue to-emas-deep-blue rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>

                {/* Certificate Info */}
                <h3 className="text-2xl font-heading font-bold text-emas-deep-blue mb-2">
                  {cert.name}
                </h3>
                <p className="text-lg font-medium text-emas-soft-blue mb-3">
                  {isEnglish ? cert.title : cert.titleTr}
                </p>
                <p className="text-gray-600 mb-4">
                  {isEnglish ? cert.description : cert.descriptionTr}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{t('certificates.issuer')}: {cert.issuer}</span>
                  <span>•</span>
                  <span>{t('certificates.validUntil')}: {cert.validUntil}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openPdfViewer(cert)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emas-light-bg text-emas-deep-blue font-medium rounded-lg hover:bg-emas-soft-blue hover:text-white transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    {t('certificates.view')}
                  </button>
                  <a
                    href={cert.pdfUrl}
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 text-gray-600 font-medium rounded-lg hover:border-emas-soft-blue hover:text-emas-soft-blue transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-emas-deep-blue mb-6">
                {t('certificates.commitmentTitle')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('certificates.commitmentP1')}</p>
                <p>{t('certificates.commitmentP2')}</p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <PrimaryButton>
                    {t('certificates.contactUs')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl font-heading font-bold text-emas-soft-blue mb-2">100%</div>
                <div className="text-gray-600">{t('certificates.qualityInspection')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl font-heading font-bold text-emas-soft-blue mb-2">15+</div>
                <div className="text-gray-600">{t('certificates.yearsExperience')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl font-heading font-bold text-emas-soft-blue mb-2">3</div>
                <div className="text-gray-600">{t('certificates.isoCertificates')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl font-heading font-bold text-emas-soft-blue mb-2">0</div>
                <div className="text-gray-600">{t('certificates.defectRate')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closePdfViewer}
        >
          <button
            onClick={closePdfViewer}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label={t('certificates.close')}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="w-full max-w-5xl h-[85vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-emas-light-bg">
              <div>
                <h3 className="text-xl font-heading font-semibold text-emas-deep-blue">
                  {selectedCert.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {isEnglish ? selectedCert.title : selectedCert.titleTr}
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-emas-soft-blue transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('certificates.openNewTab')}
                </a>
                <a
                  href={selectedCert.pdfUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-emas-soft-blue text-white rounded-lg hover:bg-emas-deep-blue transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t('certificates.download')}
                </a>
              </div>
            </div>

            {/* PDF Embed */}
            <iframe
              src={selectedCert.pdfUrl}
              className="w-full h-[calc(85vh-80px)]"
              title={selectedCert.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
