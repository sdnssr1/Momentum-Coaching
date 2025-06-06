import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';

export default function ProblemSection() {
  return (
    <motion.section
      className="py-20 px-8 max-w-[1280px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Reveal>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">
            Tired of Fitness Programs That Don't Understand You?
          </h2>
          <p className="text-xl text-gray-700">
            Most fitness programs are designed for people who already feel comfortable in their bodies and know their way around a gym. But what about everyone else?
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-purple-800">1</span>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Overwhelmed by Options</h3>
            <p className="text-gray-600">
              Contradictory advice, aggressive marketing, and complicated programs make starting your fitness journey confusing and intimidating.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-purple-800">2</span>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Fear of Judgment</h3>
            <p className="text-gray-600">
              The gym can feel intimidating when you're just starting out. Many avoid exercise altogether for fear of doing it wrong or being judged.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-purple-800">3</span>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Cycle of Frustration</h3>
            <p className="text-gray-600">
              Start-stop patterns lead to disappointment, reinforcing the belief that you "just aren't a fitness person" when actually you just need the right approach.
            </p>
          </div>
        </div>
      </Reveal>
    </motion.section>
  );
}
