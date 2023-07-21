"use client";

import { useState } from "react";
import Graph from "./graph";
import ComprehensiveMd from "./comprehensive.mdx";
import EducationMd from "./education.mdx";

export default function Teacher() {
  const [tab, setTab] = useState(1);
  const [tabs] = useState([
    {
      id: 1,
      name: "综合素质",
    },
    {
      id: 2,
      name: "教育",
    },
  ]);
  return (
    <div>
      <h2>转行教师之路</h2>
      <ul>
        <li>2023-06-30 普通话等级考试</li>
        <li>2023-07-07 高中信息技术教师资格证考试报名</li>
      </ul>
      {tabs.map((item) => {
        const isActive = tab === item.id;
        return (
          <label
            className={`inline-block w-24 h-8 text-center rounded ${
              isActive ? "shadow-md" : ""
            }`}
            onClick={() => setTab(item.id)}
            key={item.id}
          >
            {item.name}
          </label>
        );
      })}
      <article className="mx-auto prose prose-slate lg:prose-xl">
        {tab === 1 && <ComprehensiveMd />}
        {tab === 2 && <EducationMd />}
      </article>
      <section>
        <h2>知识图谱</h2>
        <Graph />
      </section>
    </div>
  );
}
