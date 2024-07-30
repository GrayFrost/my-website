"use client";

// import {
//   WiredCard as WiredCardComponent,
//   WiredButton as WiredButtonComponent,
// } from "react-wired-elements";
import dynamic from "next/dynamic";
import type { WiredCardProps, WiredButtonProps, WiredImageProps } from "react-wired-elements";

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

const WiredImageComponent = dynamic(
  () =>
    import("react-wired-elements").then((res) => {
      return res.WiredImage;
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

const WiredImage = (props: WiredCardProps) => {
  return <WiredImageComponent {...props} />;
};

export { WiredCard, WiredButton, WiredImage };
