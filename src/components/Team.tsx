import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin } from 'lucide-react';

export function Team() {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      name: language === 'en' ? 'Lucien Cheung' : 'ルシャン・チャン',
      role: language === 'en' ? 'Managing Partner' : 'マネージングパートナー',
      image: '/WhatsApp_Image_2025-04-10_at_15.26.09.jpeg',
      bio: language === 'en'
        ? 'Lucien is a Managing Partner & Co-Founder at Epyon Capital Partners.\n\nPrior to Epyon, Lucien was an Executive Director and founding investment team member at Keyrock Capital Management in Hong Kong.\n\nBefore Keyrock, Lucien was an Investment Professional at Castik Capital Partners in Munich. Lucien started his career in investment banking with Citi in London.\n\nLucien holds a B.Sc. in Economics and Management from the University of Bristol.'
        : 'ルシアンは、エピオン・キャピタル・パートナーズの共同創業者兼マネージング・パートナーです。\n\nエピオン以前は、香港のKeyrock Capital Managementでエグゼクティブ・ディレクター兼創設投資チームメンバーを務めていました。\n\nKeyrock以前は、ミュンヘンのCastik Capital Partnersで投資専門家として勤務。ロンドンのCitiで投資銀行業務のキャリアをスタート。\n\nブリストル大学にて経済学および経営学の理学士号を取得。',
      isParagraph: true,
      linkedin: 'https://www.linkedin.com/in/luciencheung'
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('team_title')}
          </h2>
          <p className="text-xl text-slate-600">{t('team_subtitle')}</p>
        </div>

        <div className="flex justify-center max-w-xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#800020] hover:text-[#600018] transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-lg text-slate-600 mb-4 font-medium">{member.role}</p>
                <div className="border-t border-slate-200 pt-4">
                  {member.isParagraph ? (
                    <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </div>
                  ) : (
                    <>
                      <ul className="space-y-2 mb-4">
                        {(member.bio as string[]).map((item, i) => (
                          <li key={i} className="text-sm text-slate-700 flex items-start">
                            <span className="text-slate-400 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-sm text-slate-600 italic leading-relaxed">{member.tagline}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
