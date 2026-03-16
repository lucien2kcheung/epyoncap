import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav_about: 'About Us',
    nav_philosophy: 'Investment Philosophy',
    nav_team: 'Team',
    nav_recruitment: 'Opportunities',
    nav_contact: 'Contact Us',

    hero_title: 'Investing in Japan\'s Future',
    hero_subtitle: 'Partnering with SMEs in legacy service industries to create sustainable growth',
    hero_cta: 'Learn More',

    about_title: 'About Us',
    about_text_1: 'We are a private equity investment firm focused on partnering with small and medium-sized enterprises in Japan\'s legacy service industries.',
    about_text_2: 'Our mission is to preserve and enhance the value of established businesses while supporting their evolution for the next generation.',
    about_text_3: 'With deep expertise in traditional industries including construction, demolition, and infrastructure services, we bring operational excellence and strategic capital to drive sustainable growth.',

    philosophy_title: 'Investment Philosophy',
    philosophy_subtitle: 'Our Approach to Value Creation',
    philosophy_1_title: 'Long-term Partnership',
    philosophy_1_text: 'We invest with a long-term perspective, working closely with management teams to build sustainable businesses.',
    philosophy_2_title: 'Operational Excellence',
    philosophy_2_text: 'We combine financial resources with operational expertise to drive meaningful improvements.',
    philosophy_3_title: 'Preserving Legacy',
    philosophy_3_text: 'We respect the heritage of established businesses while positioning them for future success.',

    team_title: 'Our Team',
    team_subtitle: 'Experienced professionals with deep industry knowledge',

    recruitment_title: 'Join Our Team',
    recruitment_subtitle: 'We are always looking for talented individuals who share our vision',
    recruitment_text: 'If you are passionate about Japanese industry, value creation, and building lasting partnerships, we want to hear from you.',
    recruitment_cta: 'View Opportunities',

    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch to learn more about our investment approach',
    contact_name: 'Name',
    contact_email: 'Email',
    contact_company: 'Company',
    contact_message: 'Message',
    contact_send: 'Send Message',

    footer_rights: 'All rights reserved.',
  },
  ja: {
    nav_about: '会社概要',
    nav_philosophy: '投資哲学',
    nav_team: 'チーム',
    nav_recruitment: '採用情報',
    nav_contact: 'お問い合わせ',

    hero_title: '日本の未来への投資',
    hero_subtitle: '伝統的サービス産業の中小企業と共に持続可能な成長を実現',
    hero_cta: '詳しく見る',

    about_title: '会社概要',
    about_text_1: '私たちは、日本の伝統的なサービス産業における中小企業とのパートナーシップに注力するプライベートエクイティ投資会社です。',
    about_text_2: '確立された事業の価値を保全し、次世代への進化を支援することを使命としています。',
    about_text_3: '建設、解体、インフラサービスなどの伝統産業に関する深い専門知識を活かし、オペレーショナルエクセレンスと戦略的資本を提供し、持続可能な成長を推進します。',

    philosophy_title: '投資哲学',
    philosophy_subtitle: '価値創造へのアプローチ',
    philosophy_1_title: '長期的パートナーシップ',
    philosophy_1_text: '長期的な視点で投資を行い、経営チームと密接に協力して持続可能な事業を構築します。',
    philosophy_2_title: 'オペレーショナルエクセレンス',
    philosophy_2_text: '財務資源と運営の専門知識を組み合わせ、意義のある改善を推進します。',
    philosophy_3_title: 'レガシーの保全',
    philosophy_3_text: '確立された事業の伝統を尊重しながら、将来の成功に向けて位置付けます。',

    team_title: 'チーム紹介',
    team_subtitle: '深い業界知識を持つ経験豊富な専門家',

    recruitment_title: '採用情報',
    recruitment_subtitle: '私たちのビジョンを共有する優秀な人材を募集しています',
    recruitment_text: '日本の産業、価値創造、そして永続的なパートナーシップの構築に情熱を持っている方からのご連絡をお待ちしています。',
    recruitment_cta: '募集要項を見る',

    contact_title: 'お問い合わせ',
    contact_subtitle: '投資アプローチについて詳しく知りたい方はご連絡ください',
    contact_name: 'お名前',
    contact_email: 'メールアドレス',
    contact_company: '会社名',
    contact_message: 'メッセージ',
    contact_send: '送信する',

    footer_rights: '全著作権所有。',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
