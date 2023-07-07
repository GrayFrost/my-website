'use client';
import styles from './page.module.css';

export default function Demo() {
  return (
    <div className={styles.demoWrapper}>
      <div className={styles.cardList}>
        <div className={styles.card}>卡片1</div>
        <div className={styles.card}>卡片2</div>
        <div className={styles.card}>卡片3</div>
      </div>
    </div>
  )
}