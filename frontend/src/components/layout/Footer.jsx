import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  ArrowUpRight
} from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.capabilities'), path: '/capabilities' },
    { name: t('nav.references'), path: '/references' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const services = [
    t('footer.cncMilling'),
    t('footer.cncTurning'),
    t('footer.multiAxisMachining'),
    t('footer.precisionGrinding'),
    t('footer.qualityInspection'),
    t('footer.assemblyServices'),
  ];

  return (
    <footer className="bg-emas-deep-blue text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight">
                  EMAS Metal
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Precision CNC
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('footer.companyDesc')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-emas-soft-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-emas-soft-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm whitespace-pre-line">
                  {t('contact.addressValue')}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-emas-soft-blue flex-shrink-0" />
                <a href="tel:+902222361028" className="text-gray-300 text-sm hover:text-white transition-colors">
                  +90 222 236 10 28
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-emas-soft-blue flex-shrink-0" />
                <a href="mailto:info@emasmetal.com.tr" className="text-gray-300 text-sm hover:text-white transition-colors">
                  info@emasmetal.com.tr
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-emas-soft-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm whitespace-pre-line">
                  {t('contact.hoursValue')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} EMAS Metal. {t('footer.allRightsReserved')}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
