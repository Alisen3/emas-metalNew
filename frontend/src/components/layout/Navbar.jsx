import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PrimaryButton, LanguageSwitcher } from '../ui';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    {
      name: t('nav.corporate'),
      dropdown: [
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.missionVision'), path: '/mission-vision' },
      ],
    },
    {
      name: t('nav.production'),
      dropdown: [
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.capabilities'), path: '/capabilities' },
        { name: t('nav.gallery'), path: '/gallery' },
      ],
    },
    { name: t('nav.references'), path: '/references' },
    { name: t('nav.certificates'), path: '/certificates' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const isDropdownActive = (dropdown) => {
    return dropdown.some((item) => location.pathname === item.path);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/EmasMetalLogo.png"
              alt="EMAS Metal"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item, index) => (
              item.dropdown ? (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-lg
                      transition-all duration-200 flex items-center gap-1
                      ${isDropdownActive(item.dropdown)
                        ? 'text-emas-soft-blue bg-emas-light-bg'
                        : 'text-gray-600 hover:text-emas-deep-blue hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`
                      absolute top-full left-0 mt-1 py-2 bg-white rounded-xl shadow-lg border border-gray-100
                      min-w-[200px] transition-all duration-200 origin-top
                      ${openDropdown === index
                        ? 'opacity-100 scale-100 visible'
                        : 'opacity-0 scale-95 invisible'
                      }
                    `}
                  >
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) => `
                          block px-4 py-2.5 text-sm font-medium
                          transition-all duration-200
                          ${isActive
                            ? 'text-emas-soft-blue bg-emas-light-bg'
                            : 'text-gray-600 hover:text-emas-deep-blue hover:bg-gray-50'
                          }
                        `}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    px-4 py-2 text-sm font-medium rounded-lg
                    transition-all duration-200
                    ${isActive
                      ? 'text-emas-soft-blue bg-emas-light-bg'
                      : 'text-gray-600 hover:text-emas-deep-blue hover:bg-gray-50'
                    }
                  `}
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </div>

          {/* Language Switcher & CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <Link to="/contact">
              <PrimaryButton size="sm">
                {t('nav.getQuote')}
              </PrimaryButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all duration-300 ease-out
            ${isOpen ? 'max-h-[600px] pb-4' : 'max-h-0'}
          `}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <div key={index}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`
                      w-full px-4 py-3 text-base font-medium rounded-lg
                      transition-all duration-200 flex items-center justify-between
                      ${isDropdownActive(item.dropdown)
                        ? 'text-emas-soft-blue bg-emas-light-bg'
                        : 'text-gray-600 hover:text-emas-deep-blue hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mobile Dropdown */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-200
                      ${openDropdown === index ? 'max-h-[200px]' : 'max-h-0'}
                    `}
                  >
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) => `
                          block pl-8 pr-4 py-2.5 text-base font-medium
                          transition-all duration-200
                          ${isActive
                            ? 'text-emas-soft-blue bg-emas-light-bg'
                            : 'text-gray-500 hover:text-emas-deep-blue hover:bg-gray-50'
                          }
                        `}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    px-4 py-3 text-base font-medium rounded-lg
                    transition-all duration-200
                    ${isActive
                      ? 'text-emas-soft-blue bg-emas-light-bg'
                      : 'text-gray-600 hover:text-emas-deep-blue hover:bg-gray-50'
                    }
                  `}
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <div className="px-4 pt-3 mt-2 border-t border-gray-100">
              <Link to="/contact" className="block">
                <PrimaryButton className="w-full">
                  {t('nav.getQuote')}
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
