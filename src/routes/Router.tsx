import { Routes, Route } from "react-router-dom";

import PageHome from "pages/PageHome";
import PageSea from "pages/PageSea";

const MainRouter = () => {
  return <>
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/sea" element={<PageSea />} />
    </Routes>
  </>
};

export default MainRouter;