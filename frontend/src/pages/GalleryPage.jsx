import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X, ArrowRight, ZoomIn } from 'lucide-react';
import { LoadingSpinner, Alert } from '../components/ui';
import { galleryApi, getImageUrl } from '../api';

// Galeri fotoğrafları - Fotoğraflarınızı frontend/public/images/gallery/ klasörüne koyun
// Dosya isimleri: milling-1.jpg, milling-2.jpg, turning-1.jpg, parts-1.jpg vb.
const fallbackGallery = [
  // Freze (Milling) Kategorisi
  { id: '1', title: '5 Eksenli CNC Freze Merkezi', category: 'Milling', imageUrl: '/images/gallery/milling-1.jpg', description: 'Yüksek hassasiyetli 5 eksenli işleme merkezi', createdAt: '' },
  { id: '2', title: 'CNC Freze İşlemi', category: 'Milling', imageUrl: '/images/gallery/milling-2.jpg', description: 'Karmaşık geometri frezeleme', createdAt: '' },
  { id: '3', title: 'Dikey İşleme Merkezi', category: 'Milling', imageUrl: '/images/gallery/milling-3.jpg', description: 'Hassas dikey freze operasyonu', createdAt: '' },

  // Dönerşaft (Turning) Kategorisi
  { id: '4', title: 'CNC Torna İşlemi', category: 'Turning', imageUrl: '/images/gallery/turning-1.jpg', description: 'Hassas torna operasyonu', createdAt: '' },
  { id: '5', title: 'Döner Mil Üretimi', category: 'Turning', imageUrl: '/images/gallery/turning-2.jpg', description: 'Yüksek toleranslı şaft üretimi', createdAt: '' },
  { id: '6', title: 'Swiss Tipi Torna', category: 'Turning', imageUrl: '/images/gallery/turning-3.jpg', description: 'Küçük hassas parça üretimi', createdAt: '' },

  // Parçalar (Parts) Kategorisi
  { id: '7', title: 'İşlenmiş Alüminyum Parça', category: 'Parts', imageUrl: '/images/gallery/parts-1.jpg', description: 'CNC ile işlenmiş alüminyum komponent', createdAt: '' },
  { id: '8', title: 'Hassas Metal Parça', category: 'Parts', imageUrl: '/images/gallery/parts-2.jpg', description: 'Yüksek toleranslı metal parça', createdAt: '' },
  { id: '9', title: 'Özel Üretim Parça', category: 'Parts', imageUrl: '/images/gallery/parts-3.jpg', description: 'Müşteri isteğine göre özel üretim', createdAt: '' },
];

export const GalleryPage = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const categories = [
    { key: 'All', label: t('gallery.all') },
    { key: 'Milling', label: t('gallery.milling') },
    { key: 'Turning', label: t('gallery.turning') },
    { key: 'Parts', label: t('gallery.parts') },
    { key: 'Factory', label: t('gallery.factory') },
  ];

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const data = await galleryApi.getAll();
        setItems(data.length > 0 ? data : fallbackGallery);
        setError(null);
      } catch (err) {
        console.warn('Using fallback gallery:', err);
        setItems(fallbackGallery);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const openLightbox = (item) => {
    setLightboxItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxItem(null);
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
              {t('gallery.pageTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('gallery.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === cat.key
                    ? 'bg-emas-soft-blue text-white'
                    : 'bg-emas-light-bg text-gray-600 hover:bg-emas-soft-blue/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <LoadingSpinner size="lg" text={t('gallery.loadingGallery')} />
            </div>
          ) : error ? (
            <Alert type="error" message={error} />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[4/3] bg-emas-light-bg rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  {item.imageUrl ? (
                    <img
                      src={getImageUrl(item.imageUrl)}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emas-soft-blue/20 to-emas-deep-blue/20">
                      <span className="text-4xl font-heading font-bold text-emas-soft-blue/40">
                        {item.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-heading font-semibold mb-1">{item.title}</h3>
                      {item.category && (
                        <span className="inline-block px-2 py-1 bg-white/20 rounded text-xs text-white">
                          {item.category}
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-500">{t('gallery.noItems')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label={t('gallery.closeLightbox')}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.imageUrl ? (
              <img
                src={getImageUrl(lightboxItem.imageUrl)}
                alt={lightboxItem.title}
                className="w-full rounded-lg"
              />
            ) : (
              <div className="aspect-video bg-emas-deep-blue/50 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-heading font-bold text-white/30">
                  {lightboxItem.title.charAt(0)}
                </span>
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                {lightboxItem.title}
              </h3>
              {lightboxItem.description && (
                <p className="text-white/70">{lightboxItem.description}</p>
              )}
              {lightboxItem.category && (
                <span className="inline-block mt-2 px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                  {lightboxItem.category}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-emas-light-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-emas-deep-blue mb-6">
            {t('gallery.readyToSee')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('gallery.readyToSeeDesc')}
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-emas-cta-blue text-white font-medium rounded-lg hover:bg-emas-deep-blue transition-colors inline-flex items-center gap-2">
              {t('gallery.requestQuote')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
