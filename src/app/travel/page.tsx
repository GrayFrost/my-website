"use client";

import { Chrono } from "react-chrono";
import SafeHydrate from "@/components/safe-hydrate";

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  },
];

const VerticalTimeline = () => {
  return (
    <SafeHydrate>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" disableToolbar />
    </SafeHydrate>
  );
};

export default function Travel() {
  return (
    <div className="px-14">
      旅行照片
      <VerticalTimeline />
    </div>
  );
}
