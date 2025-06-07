import React from "react";
import { useLanguage } from "@/lib/languageContext";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

// Custom AccordionTrigger with plus/minus icons
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between transition-all group",
        className
      )}
      {...props}
    >
      {children}
      <span className="text-white text-xl font-bold mr-1">
        {/* Using CSS to control visibility based on parent state */}
        <span className="group-data-[state=closed]:inline group-data-[state=open]:hidden">+</span>
        <span className="group-data-[state=open]:inline group-data-[state=closed]:hidden">−</span>
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// Import other accordion components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
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
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-[#4B0082] mb-8 text-center">
        {t('faq.heading')}
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqsToDisplay.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-lg border-2 border-purple-700 overflow-hidden mb-4"
          >
            <AccordionTrigger className="bg-purple-700 text-white font-medium py-4 px-6 hover:bg-purple-800 hover:text-white hover:no-underline text-lg rounded-t-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#333] pb-4 px-6 bg-white">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
