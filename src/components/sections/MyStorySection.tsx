import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "../ui/Reveal";

const MyStorySection = () => {
  // State for slider position (0-100%)
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle mouse/touch events for slider
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    const startDrag = (e: MouseEvent) => {
      const rect = sliderRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(newPosition);
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", startDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", startDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    const startDrag = (e: TouchEvent) => {
      const rect = sliderRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.touches[0].clientX - rect.left;
      const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(newPosition);
    };

    const stopDrag = () => {
      document.removeEventListener("touchmove", startDrag);
      document.removeEventListener("touchend", stopDrag);
    };

    document.addEventListener("touchmove", startDrag);
    document.addEventListener("touchend", stopDrag);
  };

  // Animate slider handle slightly to draw attention
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPosition((prev) => {
        const random = Math.random() * 2 - 1;
        return Math.max(49, Math.min(51, prev + random));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="w-full py-16 px-4 md:px-8 bg-[#FFF1F1]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B0082] mb-4">
              MY STORY
            </h2>
            <p className="text-xl text-[#4B0082]/90 font-medium">
              YOUR JOURNEY TO CONFIDENCE STARTS HERE
            </p>
          </div>
        </Reveal>

        {/* Two column layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left column: Story text */}
          <div className="flex-1">
            <Reveal>
              <p className="text-[#4B0082]/90 leading-relaxed mb-6">
                As a certified Personal Trainer, I understand the struggles of
                feeling insecure about your body. My personal transformation
                fuels my passion to help you achieve your fitness goals.
              </p>

              <div className="mb-6">
                <h3 className="text-xl text-[#4B0082] font-semibold mb-2">
                  CERTIFIED TRAINER
                </h3>
                <p className="text-[#4B0082]/80 leading-relaxed">
                  I'm here to guide you every step of the way.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl text-[#4B0082] font-semibold mb-2">
                  PERSONAL JOURNEY
                </h3>
                <p className="text-[#4B0082]/80 leading-relaxed">
                  Join me in embracing a healthier lifestyle without sacrificing
                  your happiness.
                </p>
              </div>

              {/* Three icon-text values */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#4B0082] flex items-center justify-center flex-shrink-0 text-white">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#4B0082] font-semibold mb-1">
                      YOUR JOURNEY STARTS HERE
                    </h4>
                    <p className="text-[#4B0082]/80 leading-relaxed">
                      Achieve your fitness goals with personalized coaching that
                      fits your lifestyle and personality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#4B0082] flex items-center justify-center flex-shrink-0 text-white">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#4B0082] font-semibold mb-1">
                      EMPOWERING COMMUNITY
                    </h4>
                    <p className="text-[#4B0082]/80 leading-relaxed">
                      Join a supportive network of women who inspire and
                      motivate each other on their journeys.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#4B0082] flex items-center justify-center flex-shrink-0 text-white">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#4B0082] font-semibold mb-1">
                      EXPERT GUIDANCE
                    </h4>
                    <p className="text-[#4B0082]/80 leading-relaxed">
                      Benefit from my team and I's expertise as certified
                      trainers dedicated to your unique fitness journey.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column: Before/After slider */}
          <div className="flex-1">
            <Reveal>
              <div
                ref={sliderRef}
                className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                {/* After image (full width) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="first.png"
                    alt="After transformation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#4B0082] text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-2xl font-serif">G</span>
                  </div>
                </div>

                {/* Before image (clipped using slider position) */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                  }}
                >
                  <img
                    src="/after-image.jpg"
                    alt="Before transformation (2021)"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-pink-200 text-[#4B0082] rounded-full px-4 py-1 text-sm font-medium">
                    2021
                  </div>
                </div>

                {/* Slider handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                  style={{
                    left: `${sliderPosition}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#4B0082]">
                    <img
                      src="/logo.png"
                      alt="Momentum Coaching Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MyStorySection;
