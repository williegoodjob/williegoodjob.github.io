// MyDisplay 顯示元件，負責顯示運算式與計算結果
function MyDisplay({ expression, result }) {
  return (
    <div className="my-calculator-display">
      {/* 顯示運算式 */}
      <div className="expression">{expression || 0}</div>
      {/* 顯示結果 */}
      <div className="result">{result !== "" ? result : ""}</div>
    </div>
  );
}

export default MyDisplay;
