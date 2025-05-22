function Home() {
  return (
    <>
      <div>
        <h2>首頁</h2>
        <p>這是網站的首頁</p>
      </div>
      <div>
        <iframe
          src="https://webap.stust.edu.tw/courinfo/CourseInfo.aspx?year=113&amp;semes=2&amp;subcode=G0D16S01"
          height="790"
          width="100%"
        ></iframe>
        <iframe
          src="https://webap.stust.edu.tw/courinfo/CourseInfo.aspx?year=113&amp;semes=2&amp;subcode=G0D16J01"
          height="790"
          width="100%"
        ></iframe>
      </div>
    </>
  );
}

export default Home;
