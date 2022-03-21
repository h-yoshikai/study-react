import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // アンマウント時
      document.body.style.backgroundColor = "";
    };
  }, []);
};
