"use client";

import { useCallback, useId, useState } from "react";
import type { FaqItemType } from "@/types/content";

export interface IFaqItem {
  item: FaqItemType;
}

// A question that slides open and closed. The answer is always in the HTML; while closed it is
// collapsed to zero height and hidden from keyboard and screen reader users.
export const FaqItem = ({ item }: IFaqItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();

  const handleToggle = useCallback(() => setIsOpen((open) => !open), []);

  return (
    <div className="border-t border-line-strong">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={handleToggle}
          className="heading-md flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left"
        >
          {item.question}
          <span
            aria-hidden
            className={`text-xl leading-none text-accent transition-transform duration-300 motion-reduce:transition-none ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </h3>

      {/* Animating grid rows from 0fr to 1fr slides to the answer's natural height without measuring it. */}
      <div
        id={answerId}
        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[60ch] pb-6 text-charcoal">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};
