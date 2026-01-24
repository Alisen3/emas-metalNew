import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Input, Textarea, FileUpload, PrimaryButton, Alert } from '../components/ui';
import { PageHero } from '../components/sections';
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
      <PageHero title={t('contact.pageTitle')} subtitle={t('contact.pageSubtitle')} />

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
                  src="https://maps.google.com/maps?q=75.+Y%C4%B1l+Mahallesi+11231+Sokak+Odunpazar%C4%B1+Eski%C5%9Fehir&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
                      />
                      <Input
                        label={t('contact.company')}
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
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
                      />
                      <Input
                        label={t('contact.phoneLabel')}
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <Textarea
                      label={t('contact.projectDetails')}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      required
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
      
    </div>
  );
};

export default ContactPage;
