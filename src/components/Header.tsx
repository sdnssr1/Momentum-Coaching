import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onBookCall?: () => void;
}

const Header = ({ onBookCall = () => {} }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky header
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

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "w-full py-4 px-4 md:px-8 bg-[#FFF8E1] transition-all duration-300 z-50",
        isScrolled ? "fixed top-0 left-0 shadow-md" : "relative shadow-sm",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-[#4B0082] font-bold text-2xl md:text-3xl">
          Momentum Coaching
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="/coaching"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
          >
            One-to-One Coaching
          </a>
          <a
            href="/training"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
          >
            Training Programs
          </a>
          <a
            href="/accountability"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
          >
            Accountability Check-Ins
          </a>
          <a
            href="/wellness"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
          >
            Wellness Planning
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium"
          >
            Contact
          </a>
          <Button
            onClick={onBookCall}
            className="bg-[#4B0082] hover:bg-[#3a006b] text-white flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book a Free Discovery Call
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#4B0082] p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-[#FFF8E1] shadow-md transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-[300px] py-4" : "max-h-0 py-0",
        )}
      >
        <nav className="flex flex-col space-y-4 px-6">
          <a
            href="#about"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-2"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-2"
            onClick={handleLinkClick}
          >
            Services
          </a>
          <a
            href="/coaching"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-2"
            onClick={handleLinkClick}
          >
            One-to-One Coaching
          </a>
          <a
            href="/training"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-2"
            onClick={handleLinkClick}
          >
            Training Programs
          </a>
          <a
            href="/accountability"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-2"
            onClick={handleLinkClick}
          >
            Accountability Check-Ins
          </a>
          <a
            href="/wellness"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-2"
            onClick={handleLinkClick}
          >
            Wellness Planning
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-2"
            onClick={handleLinkClick}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-2"
            onClick={handleLinkClick}
          >
            Contact
          </a>
          <Button
            onClick={() => {
              onBookCall();
              handleLinkClick();
            }}
            className="bg-[#4B0082] hover:bg-[#3a006b] text-white w-full flex items-center justify-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book a Free Discovery Call
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
