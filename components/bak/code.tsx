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

export const CodeComponent = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  // TODO: 位置在图片加载时的偏移
  return (
    <RoughNotation
      type="underline"
      show={true}
      animate={false}
      animationDelay={1500}
    >
      <span className="whitespace-nowrap">
        {children}
      </span>
    </RoughNotation>
  );
};

export const Code = dynamic(() => Promise.resolve(CodeComponent), {
  ssr: false,
});
