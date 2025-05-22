import { useState } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState("design"); // 'design' 或 'practice'

  return (
    <>
      {" "}
      <div className="page-title home-title">
        <h2 className="home-heading">JavaScript程式設計 & 實習</h2>
        <p className="course-description">
          南臺科大資訊工程系 113 學年度第二學期課程資訊
        </p>
      </div>
      {/* 標籤切換界面 */}
      <div className="tab-container">
        <div
          className={`tab ${activeTab === "design" ? "active" : ""}`}
          onClick={() => setActiveTab("design")}
        >
          <i className="tab-icon">📝</i> JavaScript程式設計
        </div>
        <div
          className={`tab ${activeTab === "practice" ? "active" : ""}`}
          onClick={() => setActiveTab("practice")}
        >
          <i className="tab-icon">💻</i> JavaScript程式設計實習
        </div>
      </div>
      {/* iframe 內容區域 */}
      <div className="course-iframes">
        {activeTab === "design" ? (
          <div className="iframe-container">
            <iframe
              src="https://webap.stust.edu.tw/courinfo/CourseInfo.aspx?year=113&amp;semes=2&amp;subcode=G0D16S01"
              height="800"
              width="100%"
              title="JavaScript程式設計課程資訊"
            ></iframe>
          </div>
        ) : (
          <div className="iframe-container">
            <iframe
              src="https://webap.stust.edu.tw/courinfo/CourseInfo.aspx?year=113&amp;semes=2&amp;subcode=G0D16J01"
              height="800"
              width="100%"
              title="JavaScript程式設計實習課程資訊"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
