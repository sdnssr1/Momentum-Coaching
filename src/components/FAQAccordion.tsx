import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs?: FAQItem[];
}

const FAQAccordion = ({ faqs = [] }: FAQAccordionProps) => {
  // Default FAQs if none are provided
  const defaultFaqs: FAQItem[] = [
    {
      question: "Do I need to be at a certain fitness level to start?",
      answer:
        "Not at all! Momentum Coaching is designed for women at all fitness levels. Whether you're just beginning your journey or looking to advance your current routine, we'll create a personalized approach that meets you exactly where you are and builds from there.",
    },
    {
      question: "What does a typical coaching session feel like?",
      answer:
        "Our sessions are collaborative, supportive, and focused on your specific goals. We'll start by checking in on your progress, address any challenges you've faced, adjust your plan as needed, and provide clear guidance for moving forward. Every session is a judgment-free zone where questions are encouraged and your unique needs are prioritized.",
    },
    {
      question: "How is this different from having a personal trainer?",
      answer:
        "While personal trainers typically focus on workout execution, Momentum Coaching takes a more holistic approach. We address not just physical training but also nutrition, recovery, mindset, and how fitness integrates into your whole life. Our coaching relationship is ongoing, adaptive, and considers all aspects of wellness that contribute to sustainable results.",
    },
    {
      question: "Can I try before committing to a full program?",
      answer:
        "Absolutely! That's exactly why we offer a free discovery call. This gives us both a chance to discuss your goals, answer your questions, and determine if we're a good fit before you make any commitment. It's important that you feel completely comfortable with the coaching relationship from the start.",
    },
    {
      question:
        "How do we handle setbacks or weeks when life gets overwhelming?",
      answer:
        "Setbacks are a normal part of any journey and actually provide valuable learning opportunities. At Momentum Coaching, we build flexibility into your plan and approach challenges with compassion rather than judgment. We'll help you navigate busy periods, adjust expectations when needed, and develop strategies to maintain momentum even during life's inevitable ups and downs.",
    },
  ];

  const faqsToDisplay = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white/50 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#4B0082] mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqsToDisplay.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-[#4B0082]/20"
          >
            <AccordionTrigger className="text-[#333] hover:text-[#4B0082] font-medium py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#333] pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
