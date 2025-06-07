import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../lib/languageContext";

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

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "no" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Momentum Coaching"
              className="h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end space-x-8">
            {/* Center section - empty after Services removal */}
            <div className="flex-1"></div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-800 hover:text-[#4B0082] transition-colors font-medium hover:bg-white/30 px-3 py-1 rounded-md"
            >
              {language === "en" ? "🇳🇴" : "🇬🇧"}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
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

                {/* Language Toggle */}
                <button
                  onClick={() => {
                    toggleLanguage();
                    handleLinkClick();
                  }}
                  className="flex items-center px-2 py-1.5 text-gray-700 hover:text-[#4B0082] transition-colors"
                >
                  {language === "en" ? "🇳🇴 Norsk" : "🇬🇧 English"}
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
