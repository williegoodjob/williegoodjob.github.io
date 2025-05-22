// MyKeypad 按鈕區元件，排列所有數字、運算子、控制鍵
import MyButton from "./MyButton";

// 按鈕排列設定
const btns = [
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
  ["C", "←"]
];

function MyKeypad({ onButtonClick }) {
  return (
    <div className="my-calculator-keypad">
      {/* 依照 btns 陣列動態產生每一列按鈕 */}
      {btns.map((row, i) => (
        <div key={i} className="my-calculator-keypad-row">
          {row.map((val) => (
            // 每個按鈕都呼叫 MyButton
            <MyButton key={val} value={val} onClick={onButtonClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MyKeypad;
