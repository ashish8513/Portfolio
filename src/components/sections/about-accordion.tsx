"use client";

import { about } from "@/lib/content";
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function AboutAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="w-full space-y-2">
      {about.experienceLessons.map((item, i) => (
        <Accordion.Item
          key={item.title}
          value={`lesson-${i}`}
          className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-white",
                "hover:bg-white/[0.04] outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60",
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
            <div className="border-t border-white/5 px-4 pb-4 pt-2 text-sm leading-relaxed text-zinc-400">
              {item.body}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
