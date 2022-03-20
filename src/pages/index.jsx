import Head from "next/head";
import { useEffect, useCallback, useState } from "react";
import { Footer, Header, Main } from "src/components";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    () => {
      // 関数にすると、呼ばれるタイミングで前回の状態を正しく反映することができる
      if (count < 10) {
        setCount((count) => count + 1);
      }
      // setFoo(foo + 1);
      // setFoo(foo + 1);
      // これは、
      // setFoo(1 + 1);
      // setFoo(1 + 1);
      // と同じだから2プラスされない
    },
    [count] //ここが変化するたびに再生成
  );
  // 空配列だと関数が再生成されないので、関数内の変数がずっと同じ
  // 関数で書くと正しく前回の値が使用される

  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // アンマウント時
      document.body.style.backgroundColor = "";
    };
  }, [count]);

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
