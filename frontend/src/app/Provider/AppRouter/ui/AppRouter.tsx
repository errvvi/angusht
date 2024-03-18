import ClubPage from "@/pages/ClubPage/ui/ClubPage";
import HomePage from "@/pages/HomePage/ui/HomePage";
import MediaPage from "@/pages/MediaPage/ui/MediaPage";
import NewsPage from "@/pages/NewsPage/ui/NewsPage";
import SeasonPage from "@/pages/SeasonPage/ui/SeasonPage";
import TeamPage from "@/pages/TeamPage/ui/TeamPage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/club" element={<ClubPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/season" element={<SeasonPage />} />
      <Route path="/team" element={<TeamPage />} />
    </Routes>
  );
};

export default AppRouter;
