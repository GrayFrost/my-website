import Link from 'next/link';
import styles from "./page.module.css";

export default function Demo() {
  return (
    <div>
      <div className="flex justify-around">
        <Link href="/demo/hello">
          <div className="card-test">
            卡片1
          </div>
        </Link>
        <Link href="/demo/world">
          <div className="card-test">
            卡片2
          </div>
        </Link>
        <Link href="/demo/teacher">
          <div className="card-test">
            卡片3
          </div>
        </Link>
      </div>
    </div>
  );
}
