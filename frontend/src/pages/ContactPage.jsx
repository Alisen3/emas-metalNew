import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Input, Textarea, FileUpload, PrimaryButton, Alert } from '../components/ui';
import { contactApi } from '../api';

export const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo = [
    { icon: MapPin, label: t('contact.address'), value: t('contact.addressValue') },
    { icon: Phone, label: t('contact.phone'), value: '+90 216 555 1234', href: 'tel:+902165551234' },
    { icon: Mail, label: t('contact.email'), value: 'info@emasmetal.com', href: 'mailto:info@emasmetal.com' },
    { icon: Clock, label: t('contact.hours'), value: t('contact.hoursValue') },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.messageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitStatus('loading');

    try {
      const request = {
        name: formData.name.trim(),
        company: formData.company.trim() || undefined,
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        message: formData.message.trim(),
      };

      const response = await contactApi.submit(request, attachment || undefined);

      setSubmitStatus('success');
      setSubmitMessage(response.message || t('contact.successMessage'));

      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      setAttachment(null);
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage(err.message || t('contact.errorMessage'));
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emas-light-bg to-white">
        <div className="absolute inset-0 bg-industrial-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-emas-deep-blue mb-6">
              {t('contact.pageTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('contact.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold text-emas-deep-blue mb-6">
                {t('contact.contactInfo')}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 bg-emas-light-bg rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-emas-soft-blue" />
                      </div>
                      <div>
                        <div className="font-medium text-emas-deep-blue mb-1">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-600 hover:text-emas-soft-blue transition-colors whitespace-pre-line"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-gray-600 whitespace-pre-line">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Map */}
              <div className="mt-8 aspect-[4/3] bg-emas-light-bg rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900397887!2d29.1553!3d40.9097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzM1LjAiTiAyOcKwMDknMTkuMSJF!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.interactiveMap')}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-emas-light-bg rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold text-emas-deep-blue mb-2">
                  {t('contact.requestQuote')}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t('contact.formSubtitle')}
                </p>

                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-emas-deep-blue mb-2">
                      {t('contact.messageSent')}
                    </h3>
                    <p className="text-gray-600 mb-6">{submitMessage}</p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-emas-soft-blue hover:text-emas-deep-blue font-medium"
                    >
                      {t('contact.sendAnother')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitStatus === 'error' && (
                      <Alert
                        type="error"
                        message={submitMessage}
                        onClose={() => setSubmitStatus('idle')}
                      />
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('contact.fullName')}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                        placeholder="John Smith"
                      />
                      <Input
                        label={t('contact.company')}
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corporation"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('contact.emailLabel')}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                        placeholder="john@company.com"
                      />
                      <Input
                        label={t('contact.phoneLabel')}
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <Textarea
                      label={t('contact.projectDetails')}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      required
                      placeholder={t('contact.projectPlaceholder')}
                      rows={5}
                    />

                    <FileUpload
                      label={t('contact.attachDrawings')}
                      onFileSelect={setAttachment}
                      helperText={t('contact.attachHelperText')}
                    />

                    <PrimaryButton
                      type="submit"
                      loading={submitStatus === 'loading'}
                      leftIcon={<Send className="w-5 h-5" />}
                      className="w-full md:w-auto"
                    >
                      {submitStatus === 'loading' ? t('contact.sending') : t('contact.sendMessage')}
                    </PrimaryButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="py-16 bg-emas-deep-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-4">
            {t('contact.responseGuarantee')}
          </h2>
          <p className="text-white/80">
            {t('contact.responseGuaranteeDesc')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
