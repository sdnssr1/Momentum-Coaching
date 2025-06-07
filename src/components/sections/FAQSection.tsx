import { motion } from "framer-motion";
import FAQAccordion from "../FAQAccordion";
import Reveal from "../ui/Reveal";

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
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </Reveal>
    </motion.section>
  );
}
