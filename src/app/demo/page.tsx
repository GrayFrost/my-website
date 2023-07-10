import Link from 'next/link';
import styles from "./page.module.css";

export default function Demo() {
  return (
    <div>
      <div className="flex">
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
        <div className="card-test">
          卡片3
        </div>
      </div>
    </div>
  );
}
