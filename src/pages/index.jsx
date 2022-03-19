import Head from "next/head";
import Link from "next/link";
import { useCallback } from "react/cjs/react.development";
import { Footer, Header, Main } from "src/components";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert(123);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />

      <Footer />
    </div>
  );
}
