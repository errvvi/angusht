import ClubPage from "@/pages/ClubPage/ui/ClubPage";
import { DetailArticlePage } from "@/pages/DetailArticlePage/ui/DetailArticlePage";
import HomePage from "@/pages/HomePage/ui/HomePage/HomePage";
import { MatchTimetable } from "@/pages/SeasonPage/ui/MatchTimetable/MatchTimetable";
import MediaPage from "@/pages/MediaPage/ui/MediaPage";
import NewsPage from "@/pages/NewsPage/ui/NewsPage";
import SeasonPage from "@/pages/SeasonPage/ui/SeasonPage";
import TeamPage from "@/pages/TeamPage/ui/TeamPage";

import { ArticleCard } from "@/widgets";

import { Route, Routes } from "react-router-dom";
import { Table } from "@/widgets/Table/ui/Table";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/club" element={<ClubPage />} />
      {/* <Route path="/media" element={<MediaPage />} /> */}
      <Route path="/news" element={<NewsPage />} />
      <Route path="/article/:id" element={<DetailArticlePage />} />
      <Route path="/season" element={<SeasonPage />}>
        <Route index element={<ArticleCard />} /> // таблица
        <Route path="matchtimetable" element={<MatchTimetable />} />
      </Route>
      <Route path="/team" element={<TeamPage />}>
        <Route path="Rukovodstvo" element={<TeamPage />} />
        <Route path="CoachingStaff" element={<TeamPage />} />
        <Route path="Footballers" element={<TeamPage />} />
        =======
        <Route index element={<Table />} /> // таблица
        <Route path="matchtimetable" element={<MatchTimetable />} /> //
        расписание матчей
      </Route>
    </Routes>
  );
};

export default AppRouter;
