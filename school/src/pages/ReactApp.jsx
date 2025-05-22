import React from "react";
import MySlider from "../component/MySlider";
import MyPanel from "../component/MyPanel";
import MyCalculator from "../component/MyCalculator";
import "./ReactApp.css";

function ReactApp() {
  return (
    <div className="react-app-container">
      <h1 className="page-title">React 應用展示</h1>
      
      <section className="app-section">
        <h2>色彩滑塊控制</h2>
        <div className="sliders-container">
          <p>R: <MySlider /></p>
          <p>G: <MySlider /></p>
          <p>B: <MySlider /></p>
        </div>
      </section>
      
      <section className="app-section">
        <h2>RGB色彩面板</h2>
        <MyPanel />
      </section>
      
      <section className="app-section">
        <h2>計算機</h2>
        <MyCalculator />
      </section>
    </div>
  );
}

export default ReactApp;
