import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { Footer, Header, Main } from "src/components";
import styles from "src/styles/Home.module.css";

export default function Home() {
  // const handleClick = useCallback((e) => {
  //   e.preventDefault();
  //   alert(123);
  // }, []);
  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // アンマウント時
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {/* <button href="/about" onClick={handleClick}>
        ボタン
      </button> */}
      <Main page="index" />

      <Footer />
    </div>
  );
}
