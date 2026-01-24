import PropTypes from 'prop-types';

export const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-hero-bg.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-emas-deep-blue/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/80 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageHero;
