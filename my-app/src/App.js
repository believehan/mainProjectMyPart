import { useState } from "react";
import CommunityPage from "./pages/CommunityPage";
import DietRecordsPage from "./pages/DietRecordsPage";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  const [currentPage, setCurrentPage] = useState("community");

  return (
    <div>
      <GlobalStyles />

      {/* 페이지 변경 버튼 */}
      <button onClick={() => setCurrentPage("community")}>커뮤니티</button>
      <button onClick={() => setCurrentPage("diet")}>다이어트 기록</button>

      {/* 선택된 페이지 표시 */}
      {currentPage === "community" ? <CommunityPage /> : <DietRecordsPage />}
    </div>
  );
};

export default App;
