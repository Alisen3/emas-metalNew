import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn } from 'lucide-react';
import { PageHero } from '../components/sections';

// Sertifikalar - Resimleri frontend/public/certificates/ klasörüne koyun
const certificates = [
  { id: '1', name: 'ISO 9001:2015', imageUrl: '/certificates/iso-9001.jpg' },
  { id: '2', name: 'ISO 14001:2015', imageUrl: '/certificates/iso-14001.jpg' },
  { id: '3', name: 'IATF 16949:2016', imageUrl: '/certificates/iatf-16949.jpg' },
];

export const CertificatesPage = () => {
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState(null);

  const openLightbox = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <PageHero title={t('certificates.pageTitle')} subtitle={t('certificates.pageSubtitle')} />

      {/* Certificates Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-emas-soft-blue/30 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(cert)}
              >
                {/* Certificate Image */}
                <div className="aspect-[3/4] bg-emas-light-bg">
                  <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-emas-deep-blue/0 group-hover:bg-emas-deep-blue/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/0 group-hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <ZoomIn className="w-6 h-6 text-emas-deep-blue" />
                  </div>
                </div>

                {/* Certificate Name */}
                <div className="p-4 text-center border-t border-gray-100">
                  <h3 className="text-lg font-heading font-semibold text-emas-deep-blue">
                    {cert.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.imageUrl}
              alt={selectedCert.name}
              className="w-full rounded-lg bg-white"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-heading font-semibold text-white">
                {selectedCert.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
