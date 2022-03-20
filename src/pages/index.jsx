import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer, Header, Main } from "src/components";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    // 関数にすると、呼ばれるタイミングで前回の状態を正しく反映することができる
    setCount((count) => count + 1);
    // setFoo(foo + 1);
    // setFoo(foo + 1);
    // これは、
    // setFoo(1 + 1);
    // setFoo(1 + 1);
    // と同じだから2プラスされない
  };

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
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
