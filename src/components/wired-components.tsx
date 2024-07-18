"use client";

import {
  WiredCard as WiredCardComponent,
  WiredButton as WiredButtonComponent,
} from "react-wired-elements";
import type { WiredCardProps, WiredButtonProps } from "react-wired-elements";

const WiredButton = (props: WiredButtonProps) => {
  return <WiredButtonComponent {...props} />;
};

const WiredCard = (props: WiredCardProps) => {
  return <WiredCardComponent {...props} />;
};

export { WiredCard, WiredButton };
