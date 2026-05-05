"use client";

import { about } from "@/lib/content";
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function AboutAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="w-full space-y-3">
      {about.experienceLessons.map((item, i) => (
        <Accordion.Item
          key={item.title}
          value={`lesson-${i}`}
          className="overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold text-white sm:px-5 sm:py-4",
                "transition-colors hover:bg-white/[0.04] outline-none focus-visible:ring-2 focus-visible:ring-[#0052ff]/40",
              )}
            >
              {item.title}
              <ChevronDown
                className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden">
            <div className="border-t border-white/[0.06] px-4 pb-4 pt-1 text-sm leading-relaxed text-zinc-400 sm:px-5">
              {item.body}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
