"use client";

// import { Chrono } from "react-chrono";
import SafeHydrate from "@/components/safe-hydrate";
import dynamic from "next/dynamic";

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

const Chrono = dynamic(
  () =>
    import("react-chrono").then((res) => {
      return res.Chrono;
    }),
  {
    ssr: false,
  }
);

const VerticalTimeline = () => {
  return <Chrono items={items} mode="VERTICAL_ALTERNATING" disableToolbar />;
};

export default function Travel() {
  return (
    <div className="px-14">
      旅行照片
      <VerticalTimeline />
    </div>
  );
}
