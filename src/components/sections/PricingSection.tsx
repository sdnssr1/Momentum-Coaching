import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onApplyClick?: () => void;
}

export default function PricingSection({ onApplyClick }: PricingSectionProps) {
  return (
    <motion.section
      className="py-20 px-8 max-w-[1280px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Reveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">
            Coaching Options to Fit Your Needs
          </h2>
          <p className="text-xl text-gray-700">
            Choose the level of support that works for your goals and lifestyle.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Reveal>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Essential</h3>
            <div className="text-4xl font-bold mb-6 flex items-end">
              $297<span className="text-lg text-gray-500 font-normal ml-1">/month</span>
            </div>
            <p className="text-gray-600 mb-6">
              Perfect for beginners looking for guidance and accountability without breaking the bank.
            </p>

            <ul className="space-y-3 mb-10 flex-grow">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">Custom workout program</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">Nutrition guidelines</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">Bi-weekly check-ins</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">Email support</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-xl shadow-sm transition-colors duration-200"
              onClick={onApplyClick}
            >
              Apply Now
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-purple-700 p-8 rounded-xl shadow-lg border border-purple-600 flex flex-col h-full relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
            <div className="text-4xl font-bold mb-6 flex items-end text-white">
              $497<span className="text-lg text-purple-200 font-normal ml-1">/month</span>
            </div>
            <p className="text-purple-100 mb-6">
              Comprehensive support with personalized coaching sessions to accelerate your progress.
            </p>

            <ul className="space-y-3 mb-10 flex-grow">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-300"><Check className="h-4 w-4" /></span>
                <span className="text-white">All Essential features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-300"><Check className="h-4 w-4" /></span>
                <span className="text-white">Weekly 1-on-1 coaching sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-300"><Check className="h-4 w-4" /></span>
                <span className="text-white">Personalized meal plans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-300"><Check className="h-4 w-4" /></span>
                <span className="text-white">Priority messaging support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-300"><Check className="h-4 w-4" /></span>
                <span className="text-white">Form video reviews</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-white hover:bg-purple-50 text-purple-700 font-semibold py-3 rounded-xl shadow-sm transition-colors duration-200"
              onClick={onApplyClick}
            >
              Apply Now
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">VIP</h3>
            <div className="text-4xl font-bold mb-6 flex items-end">
              $997<span className="text-lg text-gray-500 font-normal ml-1">/month</span>
            </div>
            <p className="text-gray-600 mb-6">
              An intensive coaching experience for those seeking maximum support and acceleration.
            </p>

            <ul className="space-y-3 mb-10 flex-grow">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">All Premium features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">2x weekly coaching sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">24/7 WhatsApp access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">Monthly strategy sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                <span className="text-gray-700">Lifetime access to resources</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-xl shadow-sm transition-colors duration-200"
              onClick={onApplyClick}
            >
              Apply Now
            </Button>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}
