import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';

export default function IntroSection() {
  return (
    <div className="w-full bg-[#F8F6FF]">
      <Reveal>
        <section className="py-20 px-8 mx-auto text-center">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-3xl font-medium text-[#4B0082] mb-6">
              Stuck at the starting line?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              You've tried home workouts, trendy diets, and sheer willpower—yet motivation fades, and progress stalls.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Imagine moving with calm consistency, seeing the scale shift, feeling energy rise, and trusting that this time the change will last.
            </p>
            
            <a 
              href="#method" 
              className="text-[#4B0082] text-lg font-medium hover:underline inline-flex items-center"
            >
              See how Momentum makes that real →
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
