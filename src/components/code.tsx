"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef, useCallback } from "react";
import { Annotation } from "react-rough-notation/dist/RoughNotation/types";

const RoughNotation = dynamic(
  () =>
    import("react-rough-notation").then((res) => {
      return res.RoughNotation;
    }),
  {
    ssr: false,
  }
);

const options = {
  config: { attributes: true, childList: true, subtree: true },
};

export const CodeComponent = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  // todo mutationobserver?

  const [observer, setObserver] = useState<MutationObserver | null>(null);
  const articleRef = useRef<HTMLElement | null>(document.querySelector('article.prose'));
  const [obj, setObj] = useState<Annotation | null>(null);

  const updateLocation = useCallback(() => {
    if (obj) {
      console.log('zzh update');
      obj.show();
    }
  }, [obj]);

  useEffect(() => {
    const obs = new MutationObserver(updateLocation);
    setObserver(obs);
  }, []);

  useEffect(() => {
    if (!observer) return;
    if (!articleRef.current) {
      return;
    }
    const { config } = options;
    observer.observe(articleRef.current, config);
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, articleRef]);

  return (
    <RoughNotation
      type="underline"
      show={true}
      animate={true}
      animationDelay={1500}
      getAnnotationObject={(o) => setObj(o)}
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
