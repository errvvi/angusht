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
      <Route path="/" element={<ClubPage />} />
      <Route path="/" element={<MediaPage />} />
      <Route path="/" element={<NewsPage />} />
      <Route path="/" element={<SeasonPage />} />
      <Route path="/" element={<TeamPage />} />
    </Routes>
  );
};

export default AppRouter;
