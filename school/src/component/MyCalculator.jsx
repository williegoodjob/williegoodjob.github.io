// MyCalculator 主元件，負責運算邏輯與畫面整合
import React from "react";
import MyDisplay from "./MyDisplay";
import MyKeypad from "./MyKeypad";
import MyErrorMessage from "./MyErrorMessage";
import "./MyCalculator.css";

function MyCalculator() {
  // 運算式狀態
  const [expression, setExpression] = React.useState("");
  // 計算結果狀態
  const [result, setResult] = React.useState("");
  // 錯誤訊息狀態
  const [error, setError] = React.useState("");

  // 處理按鈕點擊事件
  const handleButtonClick = (value) => {
    setError(""); // 清除錯誤訊息
    if (value === "C") {
      // 清除所有輸入
      setExpression("");
      setResult("");
    } else if (value === "←") {
      // 刪除最後一個字元
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        // 將運算子轉換為 JS 可用的符號
        const safeExp = expression.replace(/×/g, '*').replace(/÷/g, '/');
        // eslint-disable-next-line no-eval
        const evalResult = eval(safeExp); // 計算結果
        if (!isFinite(evalResult)) throw new Error("無效運算");
        setResult(evalResult); // 顯示結果
      } catch {
        setError("運算式錯誤或除以零"); // 顯示錯誤
        setResult("");
      }
    } else {
      // 一般按鈕（數字、運算子、小數點）
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="my-calculator-container">
      {/* 顯示運算式與結果 */}
      <MyDisplay expression={expression} result={result} />
      {/* 按鈕區 */}
      <MyKeypad onButtonClick={handleButtonClick} />
      {/* 錯誤訊息 */}
      <MyErrorMessage error={error} />
    </div>
  );
}

export default MyCalculator;
