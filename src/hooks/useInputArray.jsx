import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
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

  return { text, array, handleChange, handleAdd };
};
