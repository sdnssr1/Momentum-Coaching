import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'no';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.apply': 'APPLY FOR A SPOT HERE',
    
    // Services dropdown
    'services.coaching': 'One-to-One Coaching',
    'services.training': 'Training Programs',
    'services.wellness': 'Wellness Planning',
    'services.accountability': 'Accountability Check-Ins',
    
    // Services descriptions
    'services.coachingDesc': 'Personalized sessions tailored to your unique goals and lifestyle. We\'ll work together to create sustainable habits that fit your schedule and preferences.',
    'services.trainingDesc': 'Custom workout plans designed for your body, goals, and available equipment. Progress at your own pace with expert guidance every step of the way.',
    'services.wellnessDesc': 'Holistic approach to nutrition, movement, rest, and mindfulness. Create balance that supports your physical and mental wellbeing.',
    'services.accountabilityDesc': 'Regular support to keep you on track and motivated. Celebrate wins, navigate challenges, and adjust your approach as needed.',

    // Home page
    'home.heading1': 'Feel Stronger. Live Clearer.',
    'home.heading2': 'Move with Momentum.',
    'home.subtitle': 'A safe space for women to reconnect with purpose through personalized guidance that honors both ambition and self-care.',

    // Introduction section
    'intro.altText': 'Hannah, Momentum Coach',
    'intro.heading': "Hi, I'm Hannah",
    'intro.para1': "I built Momentum Coaching for women like you—ambitious, caring, and constantly balancing what you want to achieve with what your body and mind need to thrive.",
    'intro.para2': "As someone who's navigated the ups and downs of fitness journeys, I understand that sustainable change doesn't come from extreme measures or one-size-fits-all plans.",
    'intro.para3': "My approach combines evidence-based practices with genuine compassion, creating a partnership where you feel supported, understood, and empowered to build lasting momentum.",

    // Services section
    'servicesSection.heading': "How We'll Work Together",
    'servicesSection.description': "Momentum Coaching offers personalized support through several complementary approaches, each designed to meet you where you are.",

    // Why Choose Momentum section
    'whySection.heading': 'Why Choose Momentum',
    'whySection.description': 'What makes our approach different from traditional fitness coaching',
    'whySection.reason1.title': 'Empathy-Driven Coaching',
    'whySection.reason1.desc': 'We start by listening and understanding your unique story, challenges, and aspirations before creating any plans.',
    'whySection.reason2.title': 'Fully Customized Plans',
    'whySection.reason2.desc': 'No cookie-cutter programs here—every recommendation is tailored to your body, preferences, and lifestyle realities.',
    'whySection.reason3.title': 'Integration-Focused',
    'whySection.reason3.desc': 'We\'ll develop strategies that realistically fit into your life, rather than asking you to reshape your entire existence.',
    
    // The Momentum Method section
    'momentumMethod.heading': 'The Momentum Method',
    'momentumMethod.subheading': 'Building sustainable progress that carries you forward even when motivation fluctuates',
    'momentumMethod.intro': 'Momentum is the engine that keeps progress alive when motivation inevitably dips. Unlike quick-fix approaches that lead to burnout, we focus on building genuine momentum through:',
    'momentumMethod.pillar1.title': 'Consistent Actions',
    'momentumMethod.pillar1.desc': 'Small, manageable steps that compound over time, creating sustainable habits rather than exhausting sprints.',
    'momentumMethod.pillar2.title': 'Thoughtful Adjustments',
    'momentumMethod.pillar2.desc': 'Regular reflection and fine-tuning of your approach based on what\'s working and what needs to change.',
    'momentumMethod.pillar3.title': 'Compassionate Support',
    'momentumMethod.pillar3.desc': 'Guidance that celebrates your wins and helps you navigate challenges without judgment or pressure.',
    'momentumMethod.conclusion': 'This balanced approach creates lasting change that fits into your real life—no extreme measures required.',

    // FAQ section
    'faq.heading': 'Frequently Asked Questions',
    'faq.subheading': 'Answers to common questions about Momentum Coaching',

    // Footer
    'footer.heading': 'Connect With Momentum',
    'footer.subheading': 'Ready to start your journey or have questions? Reach out and let\'s talk about how Momentum Coaching can support your goals.',
    'footer.socialHeading': 'Follow Along',
    'footer.connect': 'Connect With Momentum',
    'footer.ready': 'Ready to start your journey or have questions? Reach out and let\'s talk about how Momentum Coaching can support your goals.',
    'footer.follow': 'Follow Along',

    // Language selector
    'lang.en': 'English',
    'lang.no': 'Norsk',

    // Booking
    'booking.title': 'Schedule Your Free Discovery Call',
    'booking.description': "Select a convenient time for your complimentary 30-minute session. We'll discuss your goals and how Momentum Coaching can support your journey.",
  },
  no: {
    // Navigation
    'nav.services': 'Tjenester',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.apply': 'SØK OM EN PLASS HER',
    
    // Services dropdown
    'services.coaching': 'En-til-En Coaching',
    'services.training': 'Treningsprogrammer',
    'services.wellness': 'Velværeplanlegging',
    'services.accountability': 'Oppfølgingsøkter',
    
    // Services descriptions
    'services.coachingDesc': 'Personlige økter tilpasset dine unike mål og livsstil. Vi vil samarbeide for å skape bærekraftige vaner som passer din timeplan og preferanser.',
    'services.trainingDesc': 'Tilpassede treningsprogrammer designet for din kropp, mål og tilgjengelig utstyr. Fremgang i ditt eget tempo med ekspertveiledning hele veien.',
    'services.wellnessDesc': 'Helhetlig tilnærming til ernæring, bevegelse, hvile og mindfulness. Skap balanse som støtter ditt fysiske og mentale velvære.',
    'services.accountabilityDesc': 'Regelmessig støtte for å holde deg på sporet og motivert. Feire seire, navigere utfordringer og justere tilnærmingen etter behov.',

    // Home page
    'home.heading1': 'Føl Deg Sterkere. Lev Klarere.',
    'home.heading2': 'Beveg Deg Med Momentum.',
    'home.subtitle': 'Et trygt rom for kvinner å gjenoppdage formål gjennom personlig veiledning som ærer både ambisjon og egenomsorg.',

    // Introduction section
    'intro.altText': 'Hannah, Momentum Coach',
    'intro.heading': "Hei, jeg er Hannah",
    'intro.para1': "Jeg bygde Momentum Coaching for kvinner som deg—ambisiøs, omsorgsfull, og stadig balanserende mellom hva du vil oppnå og hva kropp og sinn trenger for å trives.",
    'intro.para2': "Som en som har navigert opp- og nedturene i treningsreiser, forstår jeg at varig endring ikke kommer fra ekstreme tiltak eller standardiserte planer.",
    'intro.para3': "Min tilnærming kombinerer evidensbasert praksis med genuin medfølelse, og skaper et partnerskap hvor du føler deg støttet, forstått og bemyndiget til å bygge varig momentum.",

    // Services section
    'servicesSection.heading': "Hvordan Vi Jobber Sammen",
    'servicesSection.description': "Momentum Coaching tilbyr personlig støtte gjennom flere komplementære tilnærminger, hver utformet for å møte deg der du er.",

    // Why Choose Momentum section
    'whySection.heading': 'Hvorfor Velge Momentum',
    'whySection.description': 'Hva gjør vår tilnærming annerledes fra tradisjonell treningscoaching',
    'whySection.reason1.title': 'Empatidrevet Coaching',
    'whySection.reason1.desc': 'Vi begynner med å lytte og forstå din unike historie, utfordringer og ambisjoner før vi lager noen planer.',
    'whySection.reason2.title': 'Fullstendig Tilpassede Planer',
    'whySection.reason2.desc': 'Ingen ferdiglagde programmer her—hver anbefaling er skreddersydd til din kropp, preferanser og livsstilsrealiteter.',
    'whySection.reason3.title': 'Integrasjonsfokusert',
    'whySection.reason3.desc': 'Vi vil utvikle strategier som realistisk passer inn i livet ditt, i stedet for å be deg omforme hele din eksistens.',
    
    // The Momentum Method section
    'momentumMethod.heading': 'Momentum-Metoden',
    'momentumMethod.subheading': 'Bygge bærekraftig fremgang som bærer deg fremover selv når motivasjonen svinger',
    'momentumMethod.intro': 'Momentum er motoren som holder fremgangen i live når motivasjonen uunngåelig synker. I motsetning til kjappe løsninger som fører til utbrenthet, fokuserer vi på å bygge ekte momentum gjennom:',
    'momentumMethod.pillar1.title': 'Konsistente Handlinger',
    'momentumMethod.pillar1.desc': 'Små, håndterbare skritt som sammensettes over tid, og skaper bærekraftige vaner i stedet for utmattende sprinter.',
    'momentumMethod.pillar2.title': 'Gjennomtenkte Justeringer',
    'momentumMethod.pillar2.desc': 'Regelmessig refleksjon og finjustering av din tilnærming basert på hva som fungerer og hva som må endres.',
    'momentumMethod.pillar3.title': 'Medfølende Støtte',
    'momentumMethod.pillar3.desc': 'Veiledning som feirer dine seire og hjelper deg å navigere utfordringer uten dom eller press.',
    'momentumMethod.conclusion': 'Denne balanserte tilnærmingen skaper varige endringer som passer inn i ditt virkelige liv—ingen ekstreme tiltak nødvendig.',

    // FAQ section
    'faq.heading': 'Ofte Stilte Spørsmål',
    'faq.subheading': 'Svar på vanlige spørsmål om Momentum Coaching',

    // Footer
    'footer.heading': 'Koble Til Momentum',
    'footer.subheading': 'Klar til å starte reisen din eller har spørsmål? Ta kontakt, og la oss snakke om hvordan Momentum Coaching kan støtte målene dine.',
    'footer.socialHeading': 'Følg Med',
    'footer.connect': 'Koble Med Momentum',
    'footer.ready': 'Klar til å starte reisen din eller har spørsmål? Ta kontakt, og la oss snakke om hvordan Momentum Coaching kan støtte målene dine.',
    'footer.follow': 'Følg Med',

    // Language selector
    'lang.en': 'English',
    'lang.no': 'Norsk',

    // Booking
    'booking.title': 'Planlegg Din Gratis Oppdagelsessamtale',
    'booking.description': "Velg et passende tidspunkt for din komplimentære 30-minutters økt. Vi vil diskutere målene dine og hvordan Momentum Coaching kan støtte reisen din.",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
