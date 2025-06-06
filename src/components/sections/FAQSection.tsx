import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import FAQAccordion from '../FAQAccordion';

export default function FAQSection() {
  // Using the existing FAQAccordion component from the project
  return (
    <motion.section
      id="faq"
      className="py-20 px-8 max-w-[1280px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Reveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700">
            Get answers to common questions about our coaching services.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </Reveal>
    </motion.section>
  );
}
