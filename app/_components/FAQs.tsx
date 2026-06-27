import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

import defaultData from "@/data/FAQ.json";

function FAQs() {
  return (
    <section className='mt-15 flex flex-col font-instrument-sans justify-center items-center'>
      <div className=" grid grid-cols-2 justify-center items-center gap-50">
        <div className="space-y-4 text-center">
          <h2 className="max-w-md text-balance font-semibold tracking-tight text-9xl">
            FAQs
          </h2>
          <p className="text-neutral-600">
           Answers to the questions that matter most before your next move.
          </p>
        </div>

        <div className="w-full">
          <FaqAccordion
            data={defaultData}
            className="max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQs;