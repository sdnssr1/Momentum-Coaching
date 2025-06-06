import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import ServiceCard from "./ServiceCard";
import FAQAccordion from "./FAQAccordion";
import ContactForm from "./ContactForm";
import Header from "./Header";
import ApplicationForm from "./ApplicationForm";
import { useLanguage } from "../lib/languageContext";

const HomePage = () => {
  const { t } = useLanguage();
  // State for Calendly popup
  const [showCalendly, setShowCalendly] = useState(false);
  // State for Application Form
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  // Add Calendly script and initialize when popup shows
  useEffect(() => {
    if (showCalendly) {
      // Add Calendly script
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      script.setAttribute('async', '');
      head?.appendChild(script);
      
      // Add structured data for BookingService schema for SEO
      const schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Discovery Call",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Momentum Coaching",
          "description": "Personalized coaching services for women to reconnect with purpose through guidance that honors both ambition and self-care."
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      });
      head?.appendChild(schemaScript);
      
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Clean up
        if (head?.contains(script)) {
          head.removeChild(script);
        }
        if (head?.contains(schemaScript)) {
          head.removeChild(schemaScript);
        }
        document.body.style.overflow = 'auto';
      };
    }
  }, [showCalendly]);

  // Service cards data
  const services = [
    {
      title: t('services.coaching'),
      description:
        t('services.coachingDesc') || "Personalized sessions tailored to your unique goals and lifestyle. We'll work together to create sustainable habits that fit your schedule and preferences.",
      icon: <MessageCircle className="h-8 w-8" />,
      learnMoreHref: "/coaching",
    },
    {
      title: t('services.training'),
      description:
        t('services.trainingDesc') || "Custom workout plans designed for your body, goals, and available equipment. Progress at your own pace with expert guidance every step of the way.",
      icon: <ArrowRight className="h-8 w-8" />,
      learnMoreHref: "/training",
    },
    {
      title: t('services.accountability'),
      description:
        t('services.accountabilityDesc') || "Regular support to keep you on track and motivated. Celebrate wins, navigate challenges, and adjust your approach as needed.",
      icon: <CheckCircle className="h-8 w-8" />,
      learnMoreHref: "/accountability",
    },
    {
      title: t('services.wellness'),
      description:
        t('services.wellnessDesc') || "Holistic approach to nutrition, movement, rest, and mindfulness. Create balance that supports your physical and mental wellbeing.",
      icon: <Calendar className="h-8 w-8" />,
      learnMoreHref: "/wellness",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onApplyClick={() => setShowApplicationForm(true)} />
      {/* Hero Section - Full Width White Background */}
      <div className="w-full bg-white">
        <section
          id="about"
          className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto text-center"
        >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#4B0082] mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {t('home.heading1') || 'Feel Stronger. Live Clearer.'}
          <br />
          {t('home.heading2') || 'Move with Momentum.'}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          {t('home.subtitle') || 'A safe space for women to reconnect with purpose through personalized guidance that honors both ambition and self-care.'}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          {/* Button removed as requested */}
        </motion.div>
      </section>
      </div>

      {/* Application Form now is positioned inline in the page */}

      {/* Calendly Modal Popup */}
      {showCalendly && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 backdrop-blur-sm transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <div 
            className="relative bg-white w-full max-w-4xl h-[650px] rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
          >
            <header className="bg-[#4B0082] text-white py-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5" />
                <h2 id="booking-modal-title" className="text-xl font-semibold">{t('booking.title') || 'Schedule Your Free Discovery Call'}</h2>
              </div>
              <button 
                className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
                onClick={() => setShowCalendly(false)}
                aria-label="Close booking modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>
            
            <div className="p-6">
              <p className="mb-4 text-gray-700">{t('booking.description') || "Select a convenient time for your complimentary 30-minute session. We'll discuss your goals and how Momentum Coaching can support your journey."}</p>
              
              {/* IMPORTANT: SITE OWNER - REPLACE THIS SECTION WITH YOUR CALENDLY */}
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center bg-purple-50">
                <h3 className="text-xl font-semibold mb-4 text-[#4B0082]">Connect Your Calendly Account</h3>
                <p className="mb-4">To display your availability calendar:</p>
                <ol className="text-left list-decimal pl-5 mb-6 space-y-2">
                  <li>Sign up or log in at <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-[#4B0082] underline">Calendly.com</a></li>
                  <li>Create an event type for "Discovery Call"</li>
                  <li>Set your availability preferences in Calendly</li>
                  <li>Get your Calendly username and event link</li>
                  <li>Replace the placeholder URL in this file with your actual Calendly link</li>
                </ol>
                <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-6 text-left overflow-x-auto">
                  <p><span className="text-blue-600">data-url=</span><span className="text-green-600">"https://calendly.com/YOUR-USERNAME/discovery-call"</span></p>
                </div>
                <p className="text-sm text-gray-500">Once connected, users will see your availability first, then only provide their email after selecting a time slot.</p>
              </div>
              
              {/* Uncomment and update this when you have your Calendly account */}
              {/* 
              <div 
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/YOUR-USERNAME/discovery-call?hide_gdpr_banner=1&background_color=ffffff&text_color=4B0082&primary_color=4B0082"
                style={{ minWidth: '320px', height: '500px' }}
              />
              */}
            </div>
          </div>
        </div>
      )}

      <Separator className="max-w-5xl mx-auto opacity-30" />

      {/* Introduction Section */}
      <section className="px-4 py-16 max-w-5xl mx-auto transition-colors duration-700 ease-in-out">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80"
              alt={t('intro.altText') || "Hannah, Momentum Coach"}
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold text-[#4B0082] mb-4">
              {t('intro.heading') || "Hi, I'm Hannah"}
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              {t('intro.para1') || "I built Momentum Coaching for women like you—ambitious, caring, and constantly balancing what you want to achieve with what your body and mind need to thrive."}
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              {t('intro.para2') || "As someone who's navigated the ups and downs of fitness journeys, I understand that sustainable change doesn't come from extreme measures or one-size-fits-all plans."}
            </p>
            <p className="text-gray-700 text-lg">
              {t('intro.para3') || "My approach combines evidence-based practices with genuine compassion, creating a partnership where you feel supported, understood, and empowered to build lasting momentum."}
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto opacity-30" />

      {/* Services Section */}
      <section id="services" className="px-4 py-16 max-w-6xl mx-auto transition-colors duration-700 ease-in-out bg-gradient-to-r from-white via-[#FFF8E1]/10 to-white">
        <h2 className="text-3xl font-semibold text-[#4B0082] mb-2 text-center">
          {t('servicesSection.heading') || "How We'll Work Together"}
        </h2>
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto text-lg">
          {t('servicesSection.description') || "Momentum Coaching offers personalized support through several complementary approaches, each designed to meet you where you are."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              learnMoreHref={service.learnMoreHref}
            />
          ))}
        </div>
      </section>

      {/* Application form was moved to the header dropdown */}

      {/* Why Choose Momentum */}
      <section className="px-4 py-16 bg-gradient-to-b from-white via-[#FFF8E1]/10 to-white transition-all duration-700 ease-in-out">
        <div className="max-w-5xl mx-auto transform transition-transform duration-700 ease-in-out">
          <h2 className="text-3xl font-semibold text-[#4B0082] mb-2 text-center">
            {t('whySection.heading') || "Why Choose Momentum"}
          </h2>
          <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto text-lg">
            {t('whySection.description') || "What makes our approach different from traditional fitness coaching"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF8E1] p-6 rounded-lg shadow-md transition-all duration-700 ease-in-out hover:shadow-lg">
              <CheckCircle className="h-10 w-10 text-[#4B0082] mb-4" />
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2 transition-colors duration-500">
                {t('whySection.reason1.title') || "Empathy-Driven Coaching"}
              </h3>
              <p className="text-gray-700 transition-colors duration-700">
                {t('whySection.reason1.desc') || "We start by listening and understanding your unique story, challenges, and aspirations before creating any plans."}
              </p>
            </div>

            <div className="bg-[#FFF8E1] p-6 rounded-lg shadow-md transition-all duration-700 ease-in-out hover:shadow-lg">
              <CheckCircle className="h-10 w-10 text-[#4B0082] mb-4" />
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2 transition-colors duration-500">
                {t('whySection.reason2.title') || "Fully Customized Plans"}
              </h3>
              <p className="text-gray-700 transition-colors duration-700">
                {t('whySection.reason2.desc') || "No cookie-cutter programs here—every recommendation is tailored to your body, preferences, and lifestyle realities."}
              </p>
            </div>

            <div className="bg-[#FFF8E1] p-6 rounded-lg shadow-md transition-all duration-700 ease-in-out hover:shadow-lg">
              <CheckCircle className="h-10 w-10 text-[#4B0082] mb-4" />
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2 transition-colors duration-500">
                {t('whySection.reason3.title') || "Integration-Focused"}
              </h3>
              <p className="text-gray-700 transition-colors duration-700">
                {t('whySection.reason3.desc') || "We'll develop strategies that realistically fit into your life, rather than asking you to reshape your entire existence."}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gentle spacing between sections */}
      <div className="h-16 max-w-5xl mx-auto bg-gradient-to-b from-white via-[#FFF8E1]/10 to-white transition-all duration-700 ease-in-out">
      </div>

      {/* The Momentum Method */}
      <section className="py-16 w-full bg-gradient-to-b from-white via-[#FFF8E1]/5 to-white transition-all duration-700 ease-in-out">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <h2 className="text-3xl font-semibold text-[#4B0082] mb-2 text-center">
            {t('momentumMethod.heading') || "The Momentum Method"}
          </h2>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto text-lg">
            {t('momentumMethod.subheading') || "Building sustainable progress that carries you forward even when motivation fluctuates"}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm py-12 px-4 md:px-8 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 mb-6 text-lg">
            {t('momentumMethod.intro') || "Momentum is the engine that keeps progress alive when motivation inevitably dips. Unlike quick-fix approaches that lead to burnout, we focus on building genuine momentum through:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border-l-4 border-[#4B0082] pl-4 transition-all duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2 transition-colors duration-500">
                {t('momentumMethod.pillar1.title') || "Consistent Actions"}
              </h3>
              <p className="text-gray-700 transition-colors duration-700">
                {t('momentumMethod.pillar1.desc') || "Small, manageable steps that compound over time, creating sustainable habits rather than exhausting sprints."}
              </p>
            </div>

            <div className="border-l-4 border-[#4B0082] pl-4 transition-all duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2 transition-colors duration-500">
                {t('momentumMethod.pillar2.title') || "Thoughtful Adjustments"}
              </h3>
              <p className="text-gray-700 transition-colors duration-700">
                {t('momentumMethod.pillar2.desc') || "Regular reflection and fine-tuning of your approach based on what's working and what needs to change."}
              </p>
            </div>

            <div className="border-l-4 border-[#4B0082] pl-4 transition-all duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2 transition-colors duration-500">
                {t('momentumMethod.pillar3.title') || "Compassionate Support"}
              </h3>
              <p className="text-gray-700 transition-colors duration-700">
                {t('momentumMethod.pillar3.desc') || "Guidance that celebrates your wins and helps you navigate challenges without judgment or pressure."}
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg">
            {t('momentumMethod.conclusion') || "This balanced and personalized approach helps you create sustainable progress that feels good and lasts—even when life gets complicated."}
          </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-16 bg-white transition-colors duration-700 ease-in-out">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#4B0082] mb-2 text-center">
            {t('faq.heading') || "Frequently Asked Questions"}
          </h2>
          <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto text-lg">
            {t('faq.subheading') || "Answers to common questions about Momentum Coaching"}
          </p>

          <FAQAccordion />
        </div>
      </section>

      {/* Footer/Contact Section */}
      <footer id="contact" className="px-8 pt-16 pb-24 bg-[#4B0082] text-white transition-colors duration-700 ease-in-out">
        <div className="max-w-6xl mx-auto">
          {/* Reduced spacer */}
          <div className="h-8"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('footer.heading') || "Connect With Momentum"}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#FFF8E1]/90">
              {t('footer.subheading') || "Ready to start your journey or have questions? Reach out and let's talk about how Momentum Coaching can support your goals."}
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="max-w-2xl mx-auto space-y-16">
            {/* Social Icons */}
            <div className="text-center py-4">
                <h3 className="text-xl font-semibold mb-4 text-[#FFF8E1] text-center">
                  {t('footer.socialHeading') || "Follow Along"}
                </h3>
                <div className="flex gap-8 justify-center">
                  <a
                    href="#"
                    className="transform transition-all duration-300 hover:scale-110 hover:bg-[#FFF8E1]/30"
                    aria-label="Instagram"
                  >
                    <div className="bg-white/20 p-3 rounded-full">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="transform transition-all duration-300 hover:scale-110 hover:bg-[#FFF8E1]/30"
                    aria-label="Twitter"
                  >
                    <div className="bg-white/20 p-3 rounded-full">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="transform transition-all duration-300 hover:scale-110 hover:bg-[#FFF8E1]/30"
                    aria-label="GitHub"
                  >
                    <div className="bg-white/20 p-3 rounded-full">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 p-10 rounded-lg text-center">
                <div className="flex justify-center mb-3">
                  <img src="/logo.png" alt="Momentum Coaching Logo" className="h-16 md:h-20" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-[#FFF8E1]">
                  Join Momentum Notes
                </h3>
                <p className="mb-6 text-white/90 text-lg max-w-md mx-auto">
                  Sign up for our newsletter to receive tips, inspiration, and
                  updates on your wellness journey.
                </p>
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-4 py-2 rounded-md text-gray-800 flex-grow focus:outline-none focus:ring-2 focus:ring-[#FFF8E1]/50"
                      aria-label="Email for newsletter"
                      required
                    />
                    <Button className="bg-[#FFF8E1] text-[#4B0082] hover:bg-[#FFF8E1]/90 transition-colors">
                      Subscribe
                    </Button>
                  </div>
                  <div
                    className="text-sm text-[#FFF8E1]/70 hidden"
                    id="newsletter-success"
                  >
                    Thank you for subscribing! Watch your inbox for wellness
                    tips and updates.
                  </div>
                </form>
              </div>

            {/* Mobile Contact Form removed */}
          </div>

          {/* Copyright */}
          <div className="mt-24 pt-12 border-t border-white/20 text-center text-white/70">
            <p>
              © {new Date().getFullYear()} Momentum Coaching. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
