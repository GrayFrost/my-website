"use client";

import { WiredCard } from "wired-elements-react";

export const Card = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return <WiredCard className={className}>{children}</WiredCard>;
};
