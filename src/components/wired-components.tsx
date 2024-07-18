"use client";

import {
  WiredCard as WiredCardComponent,
  WiredButton as WiredButtonComponent,
} from "react-wired-elements";
import type { WiredCardProps, WiredButtonProps } from "react-wired-elements";
import SafeHydrate from "@/components/safe-hydrate";

const WiredButton = (props: WiredButtonProps) => {
  return (
    <SafeHydrate>
      <WiredButtonComponent {...props} />
    </SafeHydrate>
  );
};

const WiredCard = (props: WiredCardProps) => {
  return (
    <SafeHydrate>
      <WiredCardComponent {...props} />
    </SafeHydrate>
  );
};

export { WiredCard, WiredButton };
