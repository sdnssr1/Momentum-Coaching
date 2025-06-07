import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Reveal from "../ui/Reveal";

interface HeroProps {
  onApplyClick?: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <Reveal>
        <section
          id="about"
          className="relative px-8 py-24 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10"
        >
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-extrabold leading-tight text-purple-800">
              Find Your Strength.
              <br />
              Feel at Home in Your Body.
            </h1>

            <p className="mt-4 text-xl text-gray-700 max-w-xl">
              Private 1-to-1 coaching for true beginners who crave confidence,
              steady progress, and a kinder way to train. Gentle workouts,
              mindful nutrition, and compassionate accountability—so you lose
              fat, build strength, and reclaim inner peace.
            </p>

            <div>
              <Button
                className="mt-8 inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
                onClick={onApplyClick}
              >
                Apply for a Spot&nbsp;
                <ArrowRight className="h-4 w-4 inline" />
              </Button>

              <p className="mt-2 text-sm text-gray-500">
                A few openings each month · 100% personalized · Judgment-free
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/hero.jpg"
                alt="Person exercising with coach guidance"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
