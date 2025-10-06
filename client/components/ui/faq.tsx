import { CourseFAQ } from "@shared/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  faqs: CourseFAQ[];
  title?: string;
}

const FAQ = ({ faqs, title = "Frequently Asked Questions" }: FAQProps) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faqItem) => (
          <AccordionItem
            key={faqItem._id}
            value={faqItem._id}
            className="border-b border-gray-200"
          >
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-gray-700 py-4">
              {faqItem.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;