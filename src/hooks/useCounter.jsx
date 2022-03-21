import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
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

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
