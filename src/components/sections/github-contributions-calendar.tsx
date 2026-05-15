"use client";

import type { GitHubActivity } from "@/lib/github";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import "react-github-calendar/tooltips.css";

const calendarTheme = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

type CalendarSize = {
  blockSize: number;
  blockMargin: number;
  fontSize: number;
  showWeekdayLabels: boolean;
};

function getCalendarSize(width: number): CalendarSize {
  if (width < 400) {
    return { blockSize: 9, blockMargin: 2, fontSize: 10, showWeekdayLabels: false };
  }
  if (width < 640) {
    return { blockSize: 11, blockMargin: 3, fontSize: 11, showWeekdayLabels: true };
  }
  if (width < 1024) {
    return { blockSize: 12, blockMargin: 3, fontSize: 12, showWeekdayLabels: true };
  }
  return { blockSize: 14, blockMargin: 4, fontSize: 14, showWeekdayLabels: true };
}

type Props = {
  contributions: GitHubActivity[];
};

export function GitHubContributionsCalendar({ contributions }: Props) {
  const [size, setSize] = useState<CalendarSize>(() =>
    typeof window !== "undefined" ? getCalendarSize(window.innerWidth) : getCalendarSize(1280),
  );

  useEffect(() => {
    const onResize = () => setSize(getCalendarSize(window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="github-contributions-calendar w-full min-w-0 rounded-xl border border-white/[0.06] bg-[#0a0a0a]/50 p-3 sm:p-4 md:p-5">
      <div className="min-w-0 overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch]">
        <ActivityCalendar
          data={contributions}
          theme={calendarTheme}
          colorScheme="dark"
          blockSize={size.blockSize}
          blockMargin={size.blockMargin}
          blockRadius={3}
          fontSize={size.fontSize}
          showWeekdayLabels={size.showWeekdayLabels}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
        />
      </div>
    </div>
  );
}
