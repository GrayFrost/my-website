import styles from './page.module.css';

export default function About() {
  return (
    <div>
      关于我
      <p>一个前端工程师</p>
      <p>技能</p>
      <p>联系方式</p>
      <p>一些小图标</p>
      <p>打赏</p>
      <div className={styles.wrapper}>
        <div className={styles['typing-demo']}>
          这是关于我的简介，我是一个前端开发工程师。测试动画效果
        </div>
      </div>
    </div>
  )
}