import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import { Check } from 'lucide-react';

export default function MethodSection() {
  return (
    <motion.section
      className="py-20 px-8 max-w-[1280px] mx-auto bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Reveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">
            A Method That Actually Works For Beginners
          </h2>
          <p className="text-xl text-gray-700">
            No more one-size-fits-all programs. Our approach is designed specifically for people who are just starting their fitness journey.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/method.jpg" 
              alt="Coach working with a client on a personalized plan" 
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>
        
        <Reveal>
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-6">The Momentum Approach</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-5 w-5" /></span>
                <span className="text-gray-700"><strong className="text-purple-800">Personalized Programming</strong> - Workouts designed for your body, goals, and available equipment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-5 w-5" /></span>
                <span className="text-gray-700"><strong className="text-purple-800">Sustainable Nutrition</strong> - No restrictive diets, just gentle guidance toward foods that fuel your body</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-5 w-5" /></span>
                <span className="text-gray-700"><strong className="text-purple-800">Mindset Coaching</strong> - Break through mental blocks and build confidence with each session</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-5 w-5" /></span>
                <span className="text-gray-700"><strong className="text-purple-800">Accountability System</strong> - Regular check-ins and adjustments to keep you consistent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-5 w-5" /></span>
                <span className="text-gray-700"><strong className="text-purple-800">Progress Tracking</strong> - Monitor improvements beyond just the scale (energy, strength, mood)</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}
