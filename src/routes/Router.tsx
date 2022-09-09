import { Routes, Route } from "react-router-dom";

import PageHome from "pages/PageHome";

const MainRouter = () => {
  return <>
    <Routes>
      <Route path="/" element={<PageHome />} />
    </Routes>
  </>
};

export default MainRouter;