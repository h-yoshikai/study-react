import Head from "next/head";
import { useEffect, useCallback, useState } from "react";
import { Footer, Header, Main } from "src/components";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(
    () => {
      // 関数にすると、呼ばれるタイミングで前回の状態を正しく反映することができる
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
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

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    // setText("");
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("same");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]); //テキストが変わった時に関数を再生成しないとtextが空

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
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </div>
  );
}
