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

  // todo mutationobserver?

  return (
    <RoughNotation type="underline" show={true} animate={true} animationDelay={1500}>
      <span className="whitespace-nowrap">{children}</span>
    </RoughNotation>
  );
};

// export const Code = dynamic(() => Promise.resolve(CodeComponent), {
//   ssr: false,
// });
