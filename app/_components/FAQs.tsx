"use client";

import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

import defaultData from "@/data/FAQ.json";

function FAQs() {
  return (
    <section className='mt-15 flex flex-col font-instrument-sans justify-center items-center'>
      <div className=" grid grid-cols-2 justify-center items-center gap-50 mx-15">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 text-center"
        >
          <h2 className="max-w-md text-balance font-semibold tracking-tight text-9xl">
            FAQs
          </h2>
          <p className="text-neutral-600">
           Answers to the questions that matter most before your next move.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full"
        >
          <FaqAccordion
            data={defaultData}
            className="max-w-[700px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default FAQs;