"use client";

// import {
//   WiredCard as WiredCardComponent,
//   WiredButton as WiredButtonComponent,
// } from "react-wired-elements";
import dynamic from "next/dynamic";
import type { WiredCardProps, WiredButtonProps } from "react-wired-elements";
import SafeHydrate from "@/components/safe-hydrate";

const WiredButtonComponent = dynamic(
  () =>
    import("react-wired-elements").then((res) => {
      return res.WiredButton;
    }),
  {
    ssr: false,
  }
);

const WiredCardComponent = dynamic(
  () =>
    import("react-wired-elements").then((res) => {
      return res.WiredCard;
    }),
  {
    ssr: false,
  }
);

const WiredButton = (props: WiredButtonProps) => {
  return <WiredButtonComponent {...props} />;
};

const WiredCard = (props: WiredCardProps) => {
  return <WiredCardComponent {...props} />;
};

export { WiredCard, WiredButton };
