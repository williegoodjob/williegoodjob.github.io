// MyButton 按鈕元件，根據 value 判斷按鈕類型與配色
function MyButton({ value, onClick }) {
  // 判斷是否為運算子（+、-、×、÷、=、C、←）
  const isOperator = ["+", "-", "×", "÷", "=", "C", "←"].includes(value);
  // 判斷是否為控制鍵（C、←、=）
  const isControl = ["C", "←", "="].includes(value);
  // 決定 className
  let btnClass = "my-calculator-btn number";
  if (isOperator && !isControl) {
    btnClass = "my-calculator-btn operator";
  } else if (isControl) {
    btnClass = "my-calculator-btn control";
  }
  return (
    <button
      className={btnClass}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

export default MyButton;
