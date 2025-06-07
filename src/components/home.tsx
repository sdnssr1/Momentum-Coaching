import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../lib/languageContext";
import ApplicationForm from "./ApplicationForm";
import Header from "./Header";
import { Button } from "./ui/button";
import FloatingCta from "./ui/FloatingCta";
import { Separator } from "./ui/separator";

// Import section components
import FAQSection from "./sections/FAQSection";
import Hero from "./sections/Hero";
import IntroSection from "./sections/IntroSection";
import MethodCardSection from "./sections/MethodCardSection";
import MyStorySection from "./sections/MyStorySection";
import ProblemSection from "./sections/ProblemSection";
import TransformSection from "./sections/TransformSection";

const HomePage = () => {
  const { t } = useLanguage();
  // State for Calendly popup
  const [showCalendly, setShowCalendly] = useState(false);
  // State for Application Form
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Add Calendly script and initialize when popup shows
  useEffect(() => {
    if (showCalendly) {
      // Add Calendly script
      const head = document.querySelector("head");
      const script = document.createElement("script");
      script.setAttribute(
        "src",
        "https://assets.calendly.com/assets/external/widget.js"
      );
      script.setAttribute("async", "");
      head?.appendChild(script);

      // Add structured data for BookingService schema for SEO
      const schemaScript = document.createElement("script");
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Discovery Call",
        provider: {
          "@type": "LocalBusiness",
          name: "Momentum Coaching",
          description:
            "Personalized coaching services for women to reconnect with purpose through guidance that honors both ambition and self-care.",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      });
      head?.appendChild(schemaScript);

      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";

      return () => {
        // Clean up
        if (head?.contains(script)) {
          head.removeChild(script);
        }
        if (head?.contains(schemaScript)) {
          head.removeChild(schemaScript);
        }
        document.body.style.overflow = "auto";
      };
    }
  }, [showCalendly]);

  // Service cards data
  const services = [
    {
      title: t("services.coaching"),
      description:
        t("services.coachingDesc") ||
        "Personalized sessions tailored to your unique goals and lifestyle. We'll work together to create sustainable habits that fit your schedule and preferences.",
      icon: <MessageCircle className="h-8 w-8" />,
      learnMoreHref: "/coaching",
    },
    {
      title: t("services.training"),
      description:
        t("services.trainingDesc") ||
        "Custom workout plans designed for your body, goals, and available equipment. Progress at your own pace with expert guidance every step of the way.",
      icon: <ArrowRight className="h-8 w-8" />,
      learnMoreHref: "/training",
    },
    {
      title: t("services.accountability"),
      description:
        t("services.accountabilityDesc") ||
        "Regular support to keep you on track and motivated. Celebrate wins, navigate challenges, and adjust your approach as needed.",
      icon: <CheckCircle className="h-8 w-8" />,
      learnMoreHref: "/accountability",
    },
    {
      title: t("services.wellness"),
      description:
        t("services.wellnessDesc") ||
        "Holistic approach to nutrition, movement, rest, and mindfulness. Create balance that supports your physical and mental wellbeing.",
      icon: <Calendar className="h-8 w-8" />,
      learnMoreHref: "/wellness",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onApplyClick={() => setShowApplicationForm(true)} />

      {/* Floating CTA that appears at bottom on desktop */}
      <FloatingCta
        onApplyClick={() => setShowApplicationForm(true)}
        isFormOpen={showApplicationForm}
      />

      {/* Page sections with scroll animations */}
      <Hero onApplyClick={() => setShowApplicationForm(true)} />
      <IntroSection />
      <ProblemSection />

      <MyStorySection />
      <MethodCardSection />
      <TransformSection />
      <FAQSection />

      {/* Application Form */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-800">
                  Application Form
                </h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ApplicationForm
                isOpen={showApplicationForm}
                onClose={() => setShowApplicationForm(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Calendly Modal Popup */}
      {showCalendly && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 backdrop-blur-sm transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <div className="relative bg-white w-full max-w-4xl h-[650px] rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <header className="bg-[#4B0082] text-white py-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5" />
                <h2 id="booking-modal-title" className="text-xl font-semibold">
                  {t("booking.title") || "Schedule Your Free Discovery Call"}
                </h2>
              </div>
              <button
                className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
                onClick={() => setShowCalendly(false)}
                aria-label="Close booking modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </header>

            <div className="p-6">
              <p className="mb-4 text-gray-700">
                {t("booking.description") ||
                  "Select a convenient time for your complimentary 30-minute session. We'll discuss your goals and how Momentum Coaching can support your journey."}
              </p>

              {/* IMPORTANT: SITE OWNER - REPLACE THIS SECTION WITH YOUR CALENDLY */}
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center bg-purple-50">
                <h3 className="text-xl font-semibold mb-4 text-[#4B0082]">
                  Connect Your Calendly Account
                </h3>
                <p className="mb-4">To display your availability calendar:</p>
                <ol className="text-left list-decimal pl-5 mb-6 space-y-2">
                  <li>
                    Sign up or log in at{" "}
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4B0082] underline"
                    >
                      Calendly.com
                    </a>
                  </li>
                  <li>Create an event type for "Discovery Call"</li>
                  <li>Set your availability preferences in Calendly</li>
                  <li>Get your Calendly username and event link</li>
                  <li>
                    Replace the placeholder URL in this file with your actual
                    Calendly link
                  </li>
                </ol>
                <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-6 text-left overflow-x-auto">
                  <p>
                    <span className="text-blue-600">data-url=</span>
                    <span className="text-green-600">
                      "https://calendly.com/YOUR-USERNAME/discovery-call"
                    </span>
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Once connected, users will see your availability first, then
                  only provide their email after selecting a time slot.
                </p>
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
        {/* Coach image removed */}
      </section>

      <Separator className="max-w-5xl mx-auto opacity-30" />

      {/* Services Section removed */}

      {/* Application form was moved to the header dropdown */}

      {/* 'Why Choose Momentum' section removed */}
      {/* The Momentum Method section moved above MethodCardSection */}

      {/* Footer/Contact Section */}
      <footer
        id="contact"
        className="px-8 pt-16 pb-24 bg-[#4B0082] text-white transition-colors duration-700 ease-in-out"
      >
        <div className="max-w-6xl mx-auto">
          {/* Reduced spacer */}
          <div className="h-8"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t("footer.heading") || "Connect With Momentum"}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#FFF8E1]/90">
              {t("footer.subheading") ||
                "Ready to start your journey or have questions? Reach out and let's talk about how Momentum Coaching can support your goals."}
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="max-w-2xl mx-auto space-y-16">
            {/* Social Icons */}
            <div className="text-center py-4">
              <h3 className="text-xl font-semibold mb-4 text-[#FFF8E1] text-center">
                {t("footer.socialHeading") || "Follow Along"}
              </h3>
              <div className="flex gap-8 justify-center">
                <a
                  href="https://www.instagram.com/hannahloee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110 hover:bg-[#FFF8E1]/30"
                  aria-label="Instagram - @hannahloee"
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
              </div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              className="bg-gradient-to-br from-white/30 to-white/10 p-10 rounded-[40px] text-center shadow-xl relative overflow-hidden"
              style={{
                boxShadow:
                  "0 10px 30px rgba(255, 255, 255, 0.2), inset 0 -5px 20px rgba(255, 255, 255, 0.3)",
              }}
              initial={{ y: 0 }}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              {/* Cloud-like decorative elements */}
              <div className="absolute top-[-30px] left-[10%] w-24 h-16 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-[-20px] right-[15%] w-32 h-16 bg-white/20 rounded-full blur-xl"></div>

              <div className="flex justify-center mb-3 relative z-10">
                <motion.img
                  src="/logo.png"
                  alt="Momentum Coaching Logo"
                  className="h-32 md:h-40"
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.h3
                className="text-2xl font-semibold mb-6 text-[#FFF8E1] relative z-10"
                animate={{
                  scale: [1, 1.03, 1],
                  color: ["#FFF8E1", "#ffffff", "#FFF8E1"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                {t("newsletter.title") || "Join Momentum Notes"}
              </motion.h3>
              <motion.p
                className="mb-6 text-white/90 text-lg max-w-md mx-auto relative z-10"
                initial={{ opacity: 0.9 }}
                animate={{
                  y: [0, -8, 0, -5, 0],
                  opacity: [0.9, 1, 0.95, 1, 0.9],
                  textShadow: [
                    "0 1px 3px rgba(255,255,255,0.1)",
                    "0 3px 10px rgba(255,255,255,0.3)",
                    "0 1px 3px rgba(255,255,255,0.1)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                }}
              >
                {t("newsletter.description") ||
                  "Sign up for our newsletter to receive tips, inspiration, and updates on your wellness journey."}
              </motion.p>
              <form
                className="space-y-4 relative z-10"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const emailInput = e.currentTarget.querySelector(
                    'input[type="email"]'
                  ) as HTMLInputElement;
                  const email = emailInput.value;

                  if (email) {
                    try {
                      // Add loading state
                      const successMessage =
                        document.getElementById("newsletter-success");
                      const submitButton =
                        e.currentTarget.querySelector("button");
                      if (submitButton) {
                        submitButton.innerHTML = "Sending...";
                        submitButton.setAttribute("disabled", "true");
                      }

                      // You'd implement an actual API call here
                      // For now, we'll simulate a successful subscription
                      await new Promise((resolve) => setTimeout(resolve, 1000));

                      // In production, you would use a service like EmailJS, Formspree, or your own backend API
                      console.log(`Subscription request for: ${email}`);
                      console.log(
                        `Will send notification to: momentum@hannahloee.com`
                      );

                      // Show success message
                      if (successMessage) {
                        successMessage.classList.remove("hidden");
                      }

                      // Reset form
                      emailInput.value = "";
                      if (submitButton) {
                        submitButton.innerHTML =
                          t("newsletter.button") || "Subscribe";
                        submitButton.removeAttribute("disabled");
                      }
                    } catch (error) {
                      console.error("Error submitting form:", error);
                      alert(
                        "There was a problem submitting your subscription. Please try again."
                      );
                    }
                  }
                }}
              >
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <motion.div
                    className="flex-grow relative max-w-xs"
                    whileHover={{ scale: 1.01 }}
                  >
                    <motion.input
                      type="email"
                      name="email"
                      placeholder={t("newsletter.placeholder") || "Your email"}
                      className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none bg-white/90 backdrop-blur-sm border-2 border-transparent transition-all duration-300 focus:border-[#FFF8E1]"
                      aria-label="Email for newsletter"
                      required
                      initial={{ boxShadow: "0 0 0 rgba(255,248,225,0)" }}
                      whileFocus={{
                        boxShadow: "0 0 15px rgba(255,248,225,0.3)",
                        backgroundColor: "rgba(255,255,255,0.95)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      // Add event handler for typing animation
                      onChange={(e) => {
                        const input = e.target;
                        // Add a subtle scale pulse when typing
                        if (input.value) {
                          const el = input as HTMLElement;
                          el.animate(
                            [
                              { transform: "scale(1.01)" },
                              { transform: "scale(1)" },
                            ],
                            {
                              duration: 200,
                              easing: "ease-out",
                            }
                          );
                        }
                      }}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="bg-[#FFF8E1] text-[#4B0082] hover:bg-[#FFF8E1]/90 transition-colors shadow-lg h-auto px-4 py-2 rounded-full"
                    >
                      {t("newsletter.button") || "Subscribe"}
                    </Button>
                  </motion.div>
                </div>
                <div
                  className="text-sm text-[#FFF8E1]/70 hidden"
                  id="newsletter-success"
                >
                  {t("newsletter.success") ||
                    "Thank you for subscribing! Watch your inbox for wellness tips and updates."}
                </div>
                {/* Hidden field for notification email */}
                <input
                  type="hidden"
                  name="_notify"
                  value="momentum@hannahloee.com"
                />
              </form>
            </motion.div>

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
