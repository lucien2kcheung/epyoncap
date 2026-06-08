import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorKey, setErrorKey] = useState('contact_error');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setErrorKey('contact_error_email');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/mkoarbla', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setErrorKey('contact_error');
        setStatus('error');
      }
    } catch {
      setErrorKey('contact_error');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-xl text-slate-600">{t('contact_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('contact_name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('contact_email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('contact_company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('contact_message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-8 py-4 bg-[#800020] text-white font-semibold rounded-lg hover:bg-[#600018] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? t('contact_sending') : t('contact_send')}
              </button>

              {status === 'success' && (
                <p className="text-green-700 text-sm" role="status">
                  {t('contact_success')}
                </p>
              )}
              {status === 'error' && (
                <p className="text-[#800020] text-sm" role="alert">
                  {t(errorKey)}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#800020] p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {language === 'en' ? 'Office' : 'オフィス'}
                  </h3>
                  <p className="text-slate-600 whitespace-pre-line">
                    {language === 'en'
                      ? 'Aoyama Marutake Building 6F\n3-1-36 Minami-Aoyama, Minato-ku\nTokyo 107-0062 Japan'
                      : '〒107-0062\n東京都港区 3-1-36\n南青山3丁目1番36号青山丸竹ビル6階'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a
                  href="mailto:info@epyoncap.co.jp"
                  className="bg-[#800020] p-3 rounded-lg inline-flex hover:bg-[#600018] transition-colors"
                  aria-label={language === 'en' ? 'Send us an email' : 'メールを送る'}
                >
                  <Mail className="h-6 w-6 text-white" />
                </a>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {language === 'en' ? 'Email' : 'メール'}
                  </h3>
                  <a
                    href="mailto:info@epyoncap.co.jp"
                    className="text-slate-600 hover:text-[#800020] transition-colors"
                  >
                    info@epyoncap.co.jp
                  </a>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tokyo cityscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
