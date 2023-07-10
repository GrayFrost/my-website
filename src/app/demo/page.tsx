"use client";
import styles from "./page.module.css";

export default function Demo() {
  return (
    <div>
      <div className="flex">
        <div className="bg-white shadow-md rounded text-black w-48 h-48">
          卡片1
        </div>
        <div className="bg-white shadow-md rounded text-black w-48 h-48">
          卡片2
        </div>
        <div className="bg-white shadow-md rounded text-black w-48 h-48">
          卡片3
        </div>
      </div>
    </div>
  );
}
