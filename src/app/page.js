import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            혼밥력
          </h2>
          <p>메인 페이지로 가기</p>
        </a>

        <a
          href="src\pages\main.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            글쓰기
          </h2>
          <p>자신의 혼밥력을 자랑해보자!</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
