"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "../Container";
import { FAQs } from "@/app/faq";
import { motion } from "framer-motion";
interface FAQ {
  question: string;
  answer: string;
}
export const FAQ = () => {
  return (
    <Container className="w-full sm:w-[87.5%] ">
      <Accordion type="single" collapsible>
        {FAQs.map((item, index) => (
          <AccordionItem key={index} value={item.question}>
            <AccordionTrigger className="text-2xl sm:text-4xl text-textblack font-bold hover:no-underline my-4 sm:my-6 ">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-lg sm:text-xl text-textblack overflow-hidden"
              >
                {item.answer}
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};
