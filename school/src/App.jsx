import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 固定頂部導航菜單 */}
      <nav className="top-navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={reactLogo} alt="React logo" className="nav-logo-img" />
            <span>JavaScript程式設計</span>
          </div>
          
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">首頁</Link></li>
            <li><Link to="/waterpuzzle" className="nav-link">水管拼圖</Link></li>
            <li><Link to="/about" className="nav-link">關於</Link></li>
          </ul>
        </div>
      </nav>
      
      {/* 內容區域，增加頂部間距避免被導航欄覆蓋 */}
      <div className="content-container">
        <Outlet />
      </div>
      
    </>
  )
}

export default App
