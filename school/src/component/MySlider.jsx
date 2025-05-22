import { useState } from "react";
import "./MySlider.css";

function MySlider({ value, onChange }) {
  // 如果有 value 和 onChange，則為受控元件，否則為自管狀態
  const [internalValue, setInternalValue] = useState(128);
  const isControlled = value !== undefined && onChange !== undefined;
  const displayValue = isControlled ? value : internalValue;

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    if (isControlled) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <>
      <input
        type="range"
        min="0"
        max="255"
        value={displayValue}
        onChange={handleChange}
      />
      <span>{displayValue}</span>
    </>
  );
}

export default MySlider;
