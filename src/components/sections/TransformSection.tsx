import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';

export default function TransformSection() {
  return (
    <motion.section
      className="py-20 w-full bg-purple-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-8">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">
            Transform More Than Just Your Body
          </h2>
          <p className="text-xl text-gray-700">
            Our clients don't just change physically – they experience profound shifts in confidence, energy, and outlook on life.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        <Reveal>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="h-48 mb-6 rounded-lg bg-gray-100 overflow-hidden">
              <img 
                src="/transform-1.jpg" 
                alt="Client before and after transformation" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Sarah, 34</h3>
            <p className="text-gray-600 mb-4">
              "I've tried every workout program out there, but always quit after a few weeks. With Momentum Coaching, I've been consistent for 8 months and counting. The personalized approach makes all the difference."
            </p>
            <p className="text-purple-700 font-medium">
              Lost 18 pounds • Gained confidence • Sleeps better
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="h-48 mb-6 rounded-lg bg-gray-100 overflow-hidden">
              <img 
                src="/transform-2.jpg" 
                alt="Client performing exercise with proper form" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Michael, 29</h3>
            <p className="text-gray-600 mb-4">
              "I always felt lost in the gym and embarrassed to ask for help. My coach made me feel comfortable from day one and taught me how to work out effectively for the first time in my life."
            </p>
            <p className="text-purple-700 font-medium">
              Gained muscle • Reduced anxiety • Improved posture
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="h-48 mb-6 rounded-lg bg-gray-100 overflow-hidden">
              <img 
                src="/transform-3.jpg" 
                alt="Client practicing mindful nutrition" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Jaime, 37</h3>
            <p className="text-gray-600 mb-4">
              "I was caught in a cycle of restrictive dieting followed by binges. Momentum taught me a sustainable approach to nutrition that fits my life and makes me feel good."
            </p>
            <p className="text-purple-700 font-medium">
              Healed relationship with food • Consistent energy • More strength
            </p>
          </div>
        </Reveal>
      </div>
      </div>
    </motion.section>
  );
}
