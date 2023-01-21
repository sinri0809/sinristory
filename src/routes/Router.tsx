import { Routes, Route, Navigate } from "react-router-dom";

import PageHome from "pages/PageHome";
import PagePortfolio from "pages/PagePortfolio";
import PageProfile from "pages/PageProfile";
import PageGallery from "pages/PageGallery";

import { links } from "./links";

const MainRouter = () => {
  return <>
    <Routes>
      <Route path="*" element={<Navigate replace to={links.home} />} />
      
      <Route path={links.home} element={<PageHome />} />
      <Route path={links.profile} element={<PageProfile />} />
      <Route path={links.portfolio} element={<PagePortfolio />}>
        <Route path="portfolio_detail" element={<div>포트폴리오 상세페이지</div>} />
      </Route>
      <Route path={links.gallery} element={<PageGallery />} />
    </Routes>
  </>
};

export default MainRouter;