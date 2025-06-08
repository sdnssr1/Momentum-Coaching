import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "../ui/Reveal";

interface TimelineCard {
  timeLabel: string;
  headline: string;
  description: string;
  imageUrl: string;
}

export default function MethodCardSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const timelineCards: TimelineCard[] = [
    {
      timeLabel: "WEEK 0",
      headline: "Clarity Call",
      description:
        "We meet on Zoom to map goals, constraints, and desired timeline.",
      imageUrl: "public/images/timeline/week0.jpg", // Images should be placed in the public directory
    },
    {
      timeLabel: "WEEK 1",
      headline: "Your Custom Blueprint",
      description:
        "You receive a phased workout & nutrition plan aligned to hormones, schedule, and preferences.",
      imageUrl: "public/images/timeline/week1.jpg",
    },
    {
      timeLabel: "WEEK 2",
      headline: "Habit Foundations",
      description:
        "Small daily actions anchor movement, hydration, and sleep; momentum starts here.",
      imageUrl: "public/images/timeline/week2.jpg",
    },
    {
      timeLabel: "WEEK 4",
      headline: "Momentum Checkpoint",
      description:
        "First progress photos and metrics review; we tweak macros or training load if needed.",
      imageUrl: "public/images/timeline/week4.jpg",
    },
    {
      timeLabel: "WEEK 8",
      headline: "Change Others Notice",
      description:
        "Friends and family see the glow; strength and confidence peak.",
      imageUrl: "public/images/timeline/week8.jpg",
    },
    {
      timeLabel: "WEEK 12",
      headline: "Breakthrough Phase",
      description:
        "Visible physique shifts and mental resilience; you master advanced lifts or longer runs.",
      imageUrl: "public/images/timeline/week12.jpg",
    },
    {
      timeLabel: "WEEK 16",
      headline: "Lifestyle Integration",
      description:
        "We lock in routines that fit travel, work, and cycles; wellness feels second-nature.",
      imageUrl: "public/images/timeline/week16.jpg",
    },
    {
      timeLabel: "WEEK 20+",
      headline: "Self-Sustained Flow",
      description:
        "You can fly solo or stay for elite coaching; either way, your new rhythm is yours for life.",
      imageUrl: "public/images/timeline/week20.jpg",
    },
  ];

  // Handle auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);

      if (isAutoPlaying) {
        autoPlayTimerRef.current = setInterval(() => {
          goToNext();
        }, 4000); // Auto-play every 6 seconds
      }
    };

    startAutoPlay();

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  // Navigation functions
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? timelineCards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === timelineCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Scroll to card when index changes
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cardWidth = slider.scrollWidth / timelineCards.length;
      slider.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="method" className="w-full py-20 px-4 md:px-8 bg-[#FFF9E9]">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4B0082] mb-8 text-center font-poppins">
          How the Momentum Method Works
        </h2>

        <div className="w-full relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-[#4B0082] rounded-full p-2 text-white hover:bg-[#5c1e9c] transition-colors"
            onFocus={() => setIsAutoPlaying(false)}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            aria-label="Next slide"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-[#4B0082] rounded-full p-2 text-white hover:bg-[#5c1e9c] transition-colors"
            onFocus={() => setIsAutoPlaying(false)}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Timeline Slider */}
          <Reveal>
            <div
              ref={sliderRef}
              className="w-full overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none" }} // Hide scrollbar for Firefox
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              onTouchStart={() => setIsAutoPlaying(false)}
              onTouchEnd={() => setIsAutoPlaying(true)}
              role="region"
              aria-label="Timeline carousel"
              tabIndex={0}
            >
              <div className="flex gap-4 md:gap-6 w-max">
                {timelineCards.map((card, index) => (
                  <div
                    key={card.timeLabel}
                    className="w-[280px] md:w-[320px] shrink-0 snap-center"
                  >
                    <motion.div
                      className={`h-full rounded-xl border-2 border-[#B663A9] bg-white p-4 md:p-5 flex flex-col shadow-md transition-all duration-300 ${
                        index === currentIndex
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-90"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-[#4B0082] text-white text-xs font-bold py-1 px-3 rounded-full self-start mb-3 font-poppins">
                        {card.timeLabel}
                      </div>

                      <h3 className="text-xl font-bold text-[#4B0082] mb-2 font-poppins">
                        {card.headline}
                      </h3>

                      <p className="text-[#3A3142] flex-grow mb-4 font-poppins">
                        {card.description}
                      </p>

                      <div className="mt-auto rounded-lg overflow-hidden aspect-video bg-purple-100">
                        {card.timeLabel === "WEEK 0" ? (
                          <img
                            src="/images/timeline/week0.jpg"
                            alt="Clarity Call"
                            className="w-full h-full object-cover"
                            data-component-name="MethodCardSection"
                          />
                        ) : card.timeLabel === "WEEK 1" ? (
                          <img
                            src="/images/timeline/week1.jpg"
                            alt="Your Custom Blueprint illustration"
                            className="w-full h-full object-cover"
                            data-component-name="MethodCardSection"
                          />
                        ) : card.timeLabel === "WEEK 2" ? (
                          <img
                            src="public/images/timeline/week2.jpg"
                            alt="Habit Foundations illustration"
                            className="w-full h-full object-cover"
                            data-component-name="MethodCardSection"
                          />
                        ) : card.timeLabel === "WEEK 4" ? (
                          <img
                            src="public/images/timeline/week4.jpg"
                            alt="Momentum Checkpoint illustration"
                            className="w-full h-full object-cover"
                            data-component-name="MethodCardSection"
                          />
                        ) : card.timeLabel === "WEEK 8" ? (
                          <img
                            src="public/images/timeline/week8.jpg"
                            alt="Momentum Checkpoint illustration"
                            className="w-full h-full object-cover"
                            data-component-name="MethodCardSection"
                          />
                        ) : card.timeLabel === "WEEK 12" ? (
                          <img
                            src="public/images/timeline/week12.jpg"
                            alt="Breakthrough Phase illustration"
                            className="w-full h-full object-cover"
                            data-component-name="MethodCardSection"
                          />
                        ) : card.timeLabel === "WEEK 16" ? (
                          <img
                            src="public/images/timeline/week16.jpg"
                            alt="Lifestyle Integration illustration"
                            className="w-full h-full object-cover"
                            data-component-name="MethodCardSection"
                          />
                        ) : card.timeLabel === "WEEK 20+" ? (
                          <img
                            src="public/images/timeline/week20.jpg"
                            alt="Self-Sustained Flow illustration"
                            className="w-full h-full object-cover"
                            data-component-name="MethodCardSection"
                          />
                        ) : (
                          <div
                            className="w-full h-full bg-gradient-to-br from-[#B663A9]/20 to-[#4B0082]/10 flex items-center justify-center"
                            aria-label={`${card.headline} illustration`}
                            data-component-name="MethodCardSection"
                          >
                            <span className="text-[#4B0082] opacity-50 text-sm font-light">
                              {card.timeLabel}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Timeline Indicator Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {timelineCards.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#4B0082] w-4" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <a
            href="#apply"
            className="inline-block bg-[#4B0082] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5c1e9c] transition-colors shadow-md hover:shadow-lg font-poppins"
          >
            Ready to start your timeline? Apply for Coaching →
          </a>
        </div>
      </div>
    </section>
  );
}
