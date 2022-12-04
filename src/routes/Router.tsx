import { Routes, Route } from "react-router-dom";

import PageHome from "pages/PageHome";
import PagePortfolio from "pages/PagePorfolio";

import { links } from "./links";

const MainRouter = () => {
  return <>
    <Routes>
      <Route path={links.home} element={<PageHome />} />
      <Route path={links.portfolio} element={<PagePortfolio />} />
      {/* <Route path={links.profile} element={<PageSea />} />
      <Route path={links.gallery} element={<PageSea />} /> */}
    </Routes>
  </>
};

export default MainRouter;