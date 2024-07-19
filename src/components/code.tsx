"use client";

import dynamic from "next/dynamic";
import { useState } from 'react';
import type { Annotation } from "react-rough-notation/dist/RoughNotation/types";

const RoughNotation = dynamic(
  () =>
    import("react-rough-notation").then((res) => {
      return res.RoughNotation;
    }),
  {
    ssr: false,
  }
);

let loaded = false;

if (typeof window !== 'undefined') {
  window.onload = () => {
    loaded = true;
    console.log('zzh window onload');
  }
}

export const Code = ({ children }: { children: React.ReactElement }) => {
  const [notationObj, setNotationObj] = useState<Annotation>();

  if (loaded && notationObj) {
    notationObj.show();
  }
  
  return (
    <RoughNotation type="underline" show={false} getAnnotationObject={(obj) => {
      setNotationObj(obj);
    }} animate={true}>
      <span className="whitespace-nowrap">{children}</span>
    </RoughNotation>
  );
};
