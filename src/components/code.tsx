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
  
  return (
    <RoughNotation type="underline" show={true} getAnnotationObject={(obj) => {
      // console.log('zzh obj', obj);
    }} animate={false}>
      <span className="whitespace-nowrap">{children}</span>
    </RoughNotation>
  );
};
