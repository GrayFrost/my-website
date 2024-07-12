"use client";

import { useRef, useEffect, useState } from "react";

function useHighlighted(id: string) {
  const observer = useRef();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -35% 0px",
    });

    const elements = document.querySelectorAll("h2, h3, h4");
    elements.forEach((elem) => observer.current.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return [activeId === id, setActiveId];
}

const TOCLink = ({ node }) => {
  const fontSizes = { 2: "base", 3: "sm", 4: "xs" };
  const id = node.value;
  const [highlighted, setHighlighted] = useHighlighted(id);
  return (
    <a
      href={`#${id}`}
      className={`block text-${fontSizes[node.depth]} hover:accent-color py-1 ${
        highlighted && "accent-color"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setHighlighted(id);
        console.log("zzh id", id, document.getElementById(id), document);
        document
          .getElementById(id)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {node.value}
    </a>
  );
};

function renderNodes(nodes) {
  return (
    <ul className="pl-2">
      {nodes.map((node) => (
        <li key={node.value}>
          <TOCLink node={node} />
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}

export const TableOfContents = ({ nodes }) => {
  console.log("zzh heading", nodes);
  if (!nodes?.length) {
    return null;
  }

  return (
    <div className={"toc"}>
      <h3 className={"secondary-text"}>Table of contents</h3>
      {renderNodes(nodes)}
    </div>
  );
};
