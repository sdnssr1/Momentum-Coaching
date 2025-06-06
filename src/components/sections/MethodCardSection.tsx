import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import { ClipboardIcon, HeartIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function MethodCardSection() {
  return (
    <section 
      id="method"
      className="w-full bg-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold text-[#4B0082] mb-12">
          How the Momentum Method Works
        </h2>
        
        <Reveal>
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center text-center">
              <Reveal>
                <motion.div 
                  className="rounded-lg bg-[#FFF9E9] p-6 shadow-sm transition hover:shadow-md flex-1"
                  initial={{ opacity: 0, y: 20 }}
                >
                  <ClipboardIcon className="h-8 w-8 text-[#4B0082] mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-[#4B0082] mb-3">Plan</h3>
                  <p className="text-gray-700">We map workouts and meals around your real life.</p>
                </motion.div>
              </Reveal>
              
              <Reveal>
                <motion.div
                  className="rounded-lg bg-[#FFF9E9] p-6 shadow-sm transition hover:shadow-md flex-1"
                  initial={{ opacity: 0, y: 20 }}
                >
                  <BoltIcon className="h-8 w-8 text-[#4B0082] mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-[#4B0082] mb-3">Action</h3>
                  <p className="text-gray-700">Gentle, progressive training you can actually stick with.</p>
                </motion.div>
              </Reveal>
              
              <Reveal>
                <motion.div
                  className="rounded-lg bg-[#FFF9E9] p-6 shadow-sm transition hover:shadow-md flex-1"
                  initial={{ opacity: 0, y: 20 }}
                >
                  <HeartIcon className="h-8 w-8 text-[#4B0082] mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-[#4B0082] mb-3">Accountability</h3>
                  <p className="text-gray-700">Weekly check-ins and compassionate feedback keep momentum alive.</p>
                </motion.div>
              </Reveal>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
