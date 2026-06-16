import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Mail } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  image: string;
  bio: string | string[];
  isParagraph: boolean;
  imagePosition?: string;
  tagline?: string;
  email?: string;
  linkedin?: string;
}

export function Team() {
  const { t, language } = useLanguage();

  const teamMembers: Member[] = [
    {
      name: language === 'en' ? 'Lucien Cheung' : 'ルシャン・チャン',
      role: language === 'en' ? 'Managing Partner' : 'マネージングパートナー',
      image: '/WhatsApp_Image_2025-04-10_at_15.26.09.jpeg',
      bio: language === 'en'
        ? 'Lucien is a Managing Partner & Co-Founder at Epyon Capital Partners.\n\nPrior to Epyon, Lucien was an Executive Director and founding investment team member at Keyrock Capital Management in Hong Kong.\n\nBefore Keyrock, Lucien was an Investment Professional at Castik Capital Partners in Munich. Lucien started his career in investment banking with Citi in London.\n\nLucien holds a B.Sc. in Economics and Management from the University of Bristol.'
        : 'エピオン・キャピタル・パートナーズの共同創業者兼マネージング・パートナー。\n\nエピオン設立以前は、香港のKeyrock Capital Managementにてエグゼクティブ・ディレクターおよび創設投資チームのメンバーを務める。\n\nKeyrock入社以前は、ミュンヘンのCastik Capital Partnersにて投資業務に従事。キャリアはロンドンのCitiにて投資銀行業務から開始。\n\nブリストル大学にて経済学および経営学の理学士号を取得。',
      isParagraph: true,
      imagePosition: 'object-top',
      email: 'lucien@epyoncap.co.jp',
      linkedin: 'https://www.linkedin.com/in/luciencheung',
    },
  ];

  const advisors: Member[] = [
    {
      name: language === 'en' ? 'Hiroshi Fukudome' : '福留 大士',
      role: language === 'en' ? 'Senior Advisor' : 'シニアアドバイザー',
      image: '/Hiroshi_Fukudome.jpg',
      isParagraph: false,
      imagePosition: 'object-top',
      bio: language === 'en'
        ? [
            'Representative Director, President and Executive Officer of Change Holdings, Inc. (3962:JP).',
            'Founded Change Holdings Inc. in 2003 and led its listing on the Prime Section of the TSE in 2018.',
            'Leveraging expertise in digital transformation (DX) and regional revitalization, serves as a director and advisor for multiple companies and organizations.',
            'Guided by the mission "Transform productivity, create change," he is dedicated to addressing Japan\u2019s social challenges and promoting regional revitalization through DX and investment.',
          ]
        : [
            '株式会社チェンジホールディングス（証券コード：3962）代表取締役兼社長執行役員。',
            '2003年に株式会社チェンジ（現チェンジホールディングス）を創業し、2018年に東京証券取引所への上場を主導。',
            'デジタルトランスフォーメーション（DX）および地方創生における専門性を活かし、複数の企業・団体において取締役・アドバイザーを務める。',
            '「生産性を変革する、変化を創造する」を理念に掲げ、DXと投資を通じて日本の社会課題の解決と地方創生に取り組む。',
          ],
    },
    {
      name: language === 'en' ? 'Masato Ishida' : '石田 將人',
      role: language === 'en' ? 'Senior Advisor' : 'シニアアドバイザー',
      image: '/Masato_Ishida.jpg',
      isParagraph: false,
      imagePosition: 'object-top',
      bio: language === 'en'
        ? [
            'Former senior executive at Sumitomo Corporation from 1983-2022, latterly as GM for EMEA & CIS, Chairman of Sumitomo Corporation Europe and Managing Executive Officer.',
            'President and CEO of T-GAIA (>$1bn listed company, 2022-Mar 26) that was taken private by a mega-fund. Currently Senior Advisor to T-GAIA.',
            'Independent board director of Brexa Holdings (formerly Outsourcing Inc.).',
            'Former Chairman National Association of Mobile-phone Distributors (2023-2025).',
          ]
        : [
            '住友商事株式会社にて常務執行役員、欧阿中東CIS総支配人、欧州住友商事ホールディング会社会長などを歴任。',
            '2022年より株式会社ティーガイア（当時東証プライム上場）の代表取締役社長執行役員に就任。大手PEファンドによる非公開化後も引き続き同社の経営を担い、現在はシニアアドバイザーを務める。',
            'BREXA Holdings（旧 株式会社アウトソーシング）の社外取締役（現任）。',
            '2023年から2025年まで一般社団法人全国携帯電話販売代理店協会の会長を務めた。',
          ],
    },
  ];

  const MemberCard = ({ member }: { member: Member }) => (
    <div className="group bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover ${member.imagePosition ?? 'object-center'} group-hover:scale-105 transition-transform duration-300`}
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
          {(member.email || member.linkedin) && (
            <div className="flex items-center gap-2">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white rounded p-1 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </div>
        <p className="text-lg text-slate-600 mb-4 font-medium">{member.role}</p>
        <div className="border-t border-slate-200 pt-4">
          {member.isParagraph ? (
            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {member.bio as string}
            </div>
          ) : (
            <>
              <ul className="space-y-2">
                {(member.bio as string[]).map((item, i) => (
                  <li key={i} className="text-sm text-slate-700 flex items-start">
                    <span className="text-slate-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {member.tagline && (
                <div className="border-t border-slate-200 pt-4 mt-4">
                  <p className="text-sm text-slate-600 italic leading-relaxed">{member.tagline}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('team_title')}
          </h2>
          <p className="text-xl text-slate-600">{t('team_subtitle')}</p>
        </div>

        {/* Managing Partner */}
        <div className="flex justify-center max-w-xl mx-auto">
          {teamMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        {/* Senior Advisors */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          {advisors.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
