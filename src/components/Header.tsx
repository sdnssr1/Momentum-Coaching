import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Maximize2, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../lib/languageContext";
import ApplicationForm from "./ApplicationForm";
import { Button } from "./ui/button";

interface HeaderProps {
  onBookCall?: () => void;
  onApplyClick?: () => void;
}

const Header = ({
  onBookCall = () => {},
  onApplyClick = () => {},
}: HeaderProps) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const applicationFormRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const applyButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        applicationFormRef.current &&
        !applicationFormRef.current.contains(event.target as Node)
      ) {
        setIsApplicationFormOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update button position for dropdown alignment
  useEffect(() => {
    if (servicesButtonRef.current) {
      const rect = servicesButtonRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--services-button-left",
        `${rect.left}px`
      );
      document.documentElement.style.setProperty(
        "--services-button-bottom",
        `${rect.bottom}px`
      );
      document.documentElement.style.setProperty(
        "--services-button-width",
        `${rect.width}px`
      );
    }
  }, [isServicesOpen]);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "no" : "en");
  };

  return (
    <header
      className={cn(
        "w-full py-4 px-4 md:px-8 transition-all duration-300 z-50 backdrop-blur-md backdrop-saturate-150",
        isScrolled
          ? "fixed top-0 left-0 bg-white/10 shadow-lg border-b border-white/20"
          : "relative bg-white/5"
      )}
      data-component-name="Header"
      style={{
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left section with logo */}
        <div className="flex-1 flex justify-start">
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Momentum Coaching Logo"
              className="h-16 md:h-20"
            />
          </a>
        </div>

        {/* Center section (Apply button removed) */}
        <div className="flex-1 flex justify-center">

          {/* Application Form Popup */}
          <AnimatePresence>
            {isApplicationFormOpen && (
              <div 
                className="fixed z-50"
                style={{
                  top: `${applyButtonRef.current?.getBoundingClientRect().bottom + window.scrollY}px`,
                  left: `${(applyButtonRef.current?.getBoundingClientRect().left || 0) + ((applyButtonRef.current?.getBoundingClientRect().width || 0) / 2) - 140}px`, // Center it under the button
                  width: "280px",
                  maxWidth: "280px",
                }}
              >
                {/* Small connecting stem to Apply button */}
                <div className="absolute top-[-10px] left-[125px] w-[20px] h-[15px] bg-[#4B0082] rounded-t-full z-40" />
                
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0, y: -10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30, duration: 0.2 }}
                  className="bg-[#4B0082] overflow-hidden shadow-2xl w-full relative mx-0"
                  style={{
                    backgroundImage: "radial-gradient(circle at 50% 0%, rgba(120, 40, 200, 0.8) 0%, rgba(75, 0, 130, 1) 70%)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3), inset 0 -10px 30px rgba(255,255,255,0.15), inset 0 10px 30px rgba(255,255,255,0.1)",
                    borderRadius: "20px"
                  }}
                >
                  <motion.div
                    className="cloud-shape absolute inset-0 pointer-events-none"
                    animate={{
                      borderRadius: [
                        "20px",
                        "25% 15% 18% 22% / 18% 22% 15% 20%",
                        "22% 18% 20% 15% / 20% 15% 18% 22%",
                        "18% 22% 15% 20% / 22% 18% 20% 15%",
                        "20px"
                      ]
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 8,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="relative w-full p-4 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button 
                      onClick={() => setIsApplicationFormOpen(false)}
                      className="absolute top-3 right-3 text-white hover:text-white/80 transition-colors z-20"
                      aria-label="Close application form"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    
                    <ApplicationForm 
                      isOpen={isApplicationFormOpen}
                      onClose={() => setIsApplicationFormOpen(false)}
                      disablePinkBackground={true}
                    />
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Right section with navigation */}
        <div className="flex-1">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative" 
              ref={servicesRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                ref={servicesButtonRef}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                data-component-name="Header"
                className="flex items-center text-gray-800 hover:text-[#4B0082] transition-colors font-medium gap-1 hover:bg-white/30 px-3 py-1 rounded-md"
              >
                {t("nav.services") || "Services"}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    isServicesOpen && "transform rotate-180"
                  )}
                />
              </button>

              {/* Services dropdown menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <div
                    className="fixed z-50"
                    style={{
                      top: `${servicesButtonRef.current?.getBoundingClientRect().bottom + window.scrollY}px`,
                      left: `${(servicesButtonRef.current?.getBoundingClientRect().left)}px`,
                      width: "280px",
                      maxWidth: "280px",
                    }}
                  >
                    {/* Small connecting stem to services button */}
                    <div className="absolute top-[-10px] left-[25px] w-[20px] h-[15px] bg-[#4B0082] rounded-t-full z-40" />
                    
                    <motion.div
                      initial={{ 
                        scale: 0.9,
                        opacity: 0,
                        y: -10
                      }}
                      animate={{ 
                        scale: 1,
                        opacity: 1,
                        y: 0
                      }}
                      exit={{ 
                        scale: 0.9,
                        opacity: 0,
                        y: -10
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 0.2
                      }}
                      className="bg-[#4B0082] overflow-hidden shadow-2xl w-full relative mx-0"
                      style={{
                        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(120, 40, 200, 0.8) 0%, rgba(75, 0, 130, 1) 70%)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3), inset 0 -10px 30px rgba(255,255,255,0.15), inset 0 10px 30px rgba(255,255,255,0.1)",
                        borderRadius: "20px"
                      }}
                    >
                      <motion.div
                        className="cloud-shape absolute inset-0 pointer-events-none"
                        animate={{
                          borderRadius: [
                            "20px",
                            "25% 15% 18% 22% / 18% 22% 15% 20%",
                            "22% 18% 20% 15% / 20% 15% 18% 22%",
                            "18% 22% 15% 20% / 22% 18% 20% 15%",
                            "20px"
                          ]
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 8,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="relative w-full py-6 px-5 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <button 
                          onClick={() => setIsServicesOpen(false)}
                          className="absolute top-3 right-3 text-white hover:text-white/80 transition-colors z-20"
                          aria-label="Close services menu"
                        >
                          <X className="h-5 w-5" />
                        </button>
                        
                        <div className="text-center mb-4">
                          <h2 className="text-xl font-bold uppercase tracking-wider text-white mb-1">
                            {t("nav.services") || "Services"}
                          </h2>
                          <div className="w-12 h-1 bg-white/50 mx-auto"></div>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <a 
                            href="/services/coaching" 
                            onClick={() => setIsServicesOpen(false)}
                            className="text-white hover:text-pink-200 py-2 px-3 rounded transition-colors text-center"
                          >
                            {t("services.coaching") || "One-to-One Coaching"}
                          </a>
                          <a 
                            href="/services/training" 
                            onClick={() => setIsServicesOpen(false)}
                            className="text-white hover:text-pink-200 py-2 px-3 rounded transition-colors text-center"
                          >
                            {t("services.training") || "Training Program"}
                          </a>
                          <a 
                            href="/services/accountability" 
                            onClick={() => setIsServicesOpen(false)}
                            className="text-white hover:text-pink-200 py-2 px-3 rounded transition-colors text-center"
                          >
                            {t("services.accountability") || "Accountability Check-in"}
                          </a>
                          <a 
                            href="/services/wellness" 
                            onClick={() => setIsServicesOpen(false)}
                            className="text-white hover:text-pink-200 py-2 px-3 rounded transition-colors text-center"
                          >
                            {t("services.wellness") || "Wellness Planning"}
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* About link removed as requested */}
            <a
              href="/contact"
              className="text-gray-800 hover:text-[#4B0082] transition-colors font-medium hover:bg-white/30 px-3 py-1 rounded-md"
            >
              {t("nav.contact") || "Contact"}
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-800 hover:text-[#4B0082] transition-colors font-medium hover:bg-white/30 px-3 py-1 rounded-md"
            >
              {language === "en" ? "🇳🇴" : "🇬🇧"}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-end">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#4B0082] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white shadow-lg rounded-b-lg px-4 py-5 mt-2">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => {
                    if (isServicesOpen) {
                      setTimeout(() => setIsServicesOpen(false), 150);
                    } else {
                      setIsServicesOpen(true);
                    }
                    setIsApplicationFormOpen(false);
                  }}
                  className="flex justify-between items-center w-full px-2 py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
                >
                  <span>{t("nav.services") || "Services"}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isServicesOpen && "transform rotate-180"
                    )}
                  />
                </button>

                {isServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-l-2 border-[#4B0082]/30 ml-2 pl-4 space-y-1.5"
                  >
                    <a
                      href="/services/coaching"
                      className="block py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t("services.coaching") || "One-to-One Coaching"}
                    </a>
                    <a
                      href="/services/training"
                      className="block py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t("services.training") || "Training Program"}
                    </a>
                    <a
                      href="/services/accessibility"
                      className="block py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t("services.accessibility") || "Accessibility Check-in"}
                    </a>
                    <a
                      href="/services/wellness"
                      className="block py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t("services.wellness") || "Wellness Planning"}
                    </a>
                  </motion.div>
                )}

                <a
                  href="/about"
                  className="block px-2 py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("nav.about") || "About"}
                </a>
                <a
                  href="/contact"
                  className="block px-2 py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("nav.contact") || "Contact"}
                </a>
                
                {/* Language Toggle */}
                <button
                  onClick={() => {
                    toggleLanguage();
                    handleLinkClick();
                  }}
                  className="flex items-center px-2 py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors"
                >
                  {language === "en" 
                    ? "🇳🇴 Norsk" 
                    : "🇬🇧 English"}
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
