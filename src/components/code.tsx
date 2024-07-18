"use client";

import dynamic from "next/dynamic";

const RoughNotation = dynamic(
  () =>
    import("react-rough-notation").then((res) => {
      return res.RoughNotation;
    }),
  {
    ssr: false,
  }
);

export const Code = ({ children }: { children: React.ReactElement }) => {
  console.log("zzh code children", children);
  return (
    <RoughNotation type="underline" show={true}>
      <span className="whitespace-nowrap">{children}</span>
    </RoughNotation>
  );
};
