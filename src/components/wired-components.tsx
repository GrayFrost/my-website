"use client";

import {
  WiredCard as WiredCardComponent,
  WiredButton as WiredButtonComponent,
} from "wired-elements-react";

const WiredCard = (
  props: typeof WiredCardComponent & { children: React.ReactNode }
) => {
  return <WiredCardComponent {...props}>{props.children}</WiredCardComponent>;
};

const WiredButton = (
  props: typeof WiredButtonComponent & { children: React.ReactNode }
) => {
  return (
    <WiredButtonComponent {...props}>{props.children}</WiredButtonComponent>
  );
};

export { WiredCard, WiredButton };
