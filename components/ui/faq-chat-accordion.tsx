"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { CircleQuestionMarkIcon, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

interface FaqAccordionProps {
  data: FaqItem[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <div className={cn("p-4", className)}>
      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item
            value={item.id.toString()}
            key={item.id}
            className="mb-2"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between gap-x-4">
                <div
                  className={cn(
                    "relative flex flex-1 items-center space-x-2 rounded-xl p-2 transition-colors cursor-pointer",
                    openItem === item.id.toString()
                      ? "bg-white text-black border border-black/5"
                      : "bg-white text-black border border-black/5 hover:bg-neutral-50",
                    questionClassName
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        "absolute bottom-6",
                        item.iconPosition === "right" ? "right-0" : "left-0"
                      )}
                      style={{
                        transform:
                          item.iconPosition === "right"
                            ? "rotate(7deg)"
                            : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium flex items-center gap-1.5 text-left">
                    <CircleQuestionMarkIcon className="h-4 w-4 shrink-0" />
                    {item.question}
                  </span>
                </div>

                <span
                  className={cn(
                    "relative flex h-5 w-5 shrink-0 items-center justify-center transition-colors duration-300",
                    openItem === item.id.toString() ? "text-black" : "text-black/70"
                  )}
                >
                  <Plus
                    className={cn(
                      "absolute h-5 w-5 cursor-pointer transition-all duration-300",
                      openItem === item.id.toString() ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                    )}
                  />
                  <Minus
                    className={cn(
                      "absolute h-5 w-5 cursor-pointer transition-all duration-300",
                      openItem === item.id.toString() ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                    )}
                  />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="ml-7 mt-1 md:ml-16">
                  <div
                    className={cn(
                      "relative max-w-xs rounded-2xl bg-primary px-4 py-2 text-black text-left",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
