import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onBookCall?: () => void;
}

const Header = ({ onBookCall = () => {} }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          
          {/* Services Dropdown */}
          <div 
            className="relative" 
            ref={servicesRef}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className="flex items-center text-gray-700 hover:text-[#4B0082] transition-colors font-medium gap-1"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "transform rotate-180")} />
            </button>
            
            {/* Dropdown Menu - Dovetail Style */}
            <div 
              className={cn(
                "absolute top-full left-0 w-64 bg-white mt-1 py-2 rounded-md shadow-lg border border-gray-200 z-50 transition-all duration-200 overflow-hidden",
                isServicesOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              )}
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)", // Dovetail style
                transformOrigin: "top center"
              }}
            >
              <a 
                href="/coaching" 
                className="block px-4 py-2 text-gray-700 hover:text-[#4B0082] hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                One-to-One Coaching
              </a>
              <a 
                href="/training" 
                className="block px-4 py-2 text-gray-700 hover:text-[#4B0082] hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Training Programs
              </a>
              <a 
                href="/wellness" 
                className="block px-4 py-2 text-gray-700 hover:text-[#4B0082] hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Wellness Planning
              </a>
              <a 
                href="/accountability" 
                className="block px-4 py-2 text-gray-700 hover:text-[#4B0082] hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Accountability Check-Ins
              </a>
            </div>
          </div>
          
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
            "md:hidden fixed inset-x-0 bg-[#FFF8E1] shadow-md transition-all duration-300 overflow-hidden z-50",
            isMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0",
          )}
        >
          <nav className="flex flex-col space-y-4 px-6">
            
            {/* Mobile Services Section */}
            <div className="py-2">
              <div className="font-medium text-[#4B0082] border-b border-gray-200 pb-1 mb-2">Services</div>
              <div className="pl-4 flex flex-col space-y-3">
                <a
                  href="/coaching"
                  className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-1"
                  onClick={handleLinkClick}
                >
                  One-to-One Coaching
                </a>
                <a
                  href="/training"
                  className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-1"
                  onClick={handleLinkClick}
                >
                  Training Programs
                </a>
                <a
                  href="/wellness"
                  className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-1"
                  onClick={handleLinkClick}
                >
                  Wellness Planning
                </a>
                <a
                  href="/accountability"
                  className="text-gray-700 hover:text-[#4B0082] transition-colors font-medium py-1"
                  onClick={handleLinkClick}
                >
                  Accountability Check-Ins
                </a>
              </div>
            </div>
            
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
