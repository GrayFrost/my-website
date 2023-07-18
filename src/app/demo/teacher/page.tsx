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
      <div>
        {tabs.map((item) => {
          const isActive = tab === item.id;
          return (
            <label
              className={`inline-block w-24 h-8 text-center rounded ${isActive ? 'shadow-md' : ''}`}
              onClick={() => setTab(item.id)}
              key={item.id}
            >
              {item.name}
            </label>
          );
        })}
      </div>
      <article className="mx-auto prose prose-slate lg:prose-xl">
        {/* <h2>科目一</h2>
        <h3>素质教育的内涵</h3>
        <ul>
          <li>提高国民素质为根本宗旨</li>
          <li>面向全体学生的教育</li>
          <li>促进学生全面发展</li>
          <li>促进学生个性发展</li>
          <li>培养创新精神和实践能力</li>
        </ul>
        <h3>新课改下的教学观</h3>
        <ul>
          <li>提倡教学从“以教育者为中心”转向“以学习者为中心”</li>
          <li>提倡教学从“教会学生知识”转向“教会学生学习”</li>
          <li>提倡教学从“重结果轻过程"转向“重结果更重过程"</li>
          <li>提倡教学从”关注学科"到“关注人"</li>
        </ul> */}
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
