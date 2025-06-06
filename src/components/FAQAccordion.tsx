import React from "react";
import { useLanguage } from "@/lib/languageContext";
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
  // Get translation function from language context
  const { t } = useLanguage();

  // Default FAQs using translation keys
  const defaultFaqs: FAQItem[] = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5'),
    },
  ];

  const faqsToDisplay = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white/50 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#4B0082] mb-6 text-center">
        {t('faq.heading')}
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
