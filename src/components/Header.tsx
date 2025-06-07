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
        isScrolled 
          ? "bg-transparent backdrop-blur-sm bg-white/10 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo (Left-aligned) */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Momentum Coaching"
              className="h-16 md:h-20"
            />
          </a>

          {/* Right controls */}
          <div className="flex justify-end">
            {/* Language Toggle (Desktop) */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center text-gray-800 hover:text-[#4B0082] transition-colors font-medium bg-white/20 hover:bg-white/40 px-3 py-1 rounded-md shadow-sm"
            >
              {language === "en" ? "🇳🇴" : "🇬🇧"}
            </button>
          </div>

          {/* Mobile Navigation Toggle - positioned inside the right spacer div */}
          <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
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
            <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-b-lg px-4 py-5 mt-2 border-t border-purple-100">
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
