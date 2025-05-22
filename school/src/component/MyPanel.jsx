import { useState } from "react";
import MySlider from "./MySlider";

function MyPanel() {
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);
  return (
    <div
      style={{
        border: "2px solid #444",
        borderRadius: "16px",
        padding: "24px",
        maxWidth: "320px",
        margin: "32px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        textAlign: "center",
        backgroundColor: "#2a2a2a",
        color: "#e0e0e0"
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        R: <MySlider value={r} onChange={setR} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        G: <MySlider value={g} onChange={setG} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        B: <MySlider value={b} onChange={setB} />
      </div>      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: `rgb(${r},${g},${b})`,
          border: "2px solid #555",
          margin: "16px auto",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)"
        }}
      />
      <div style={{ marginTop: "10px", color: "#61dafb", fontWeight: "bold" }}>RGB({r}, {g}, {b})</div>
    </div>
  );
}

export default MyPanel;
