import React from "react";
import { Link } from "react-router-dom";
import { links } from "routes/links";

const PageHome = () => {

  return (
    <section className="home">
      <Link to={links.portfolio}>to porfolio</Link>
      {/* <Header /> */}
      {/* <div className="area--top">
          <div className="area--top-left" id="home">
            <PageNav x={0} y={0} />
          </div>
          <div className="area--top-right" id="test1">
            <PageNav x={1} y={0} />
          </div>
        </div>

        <div className="area--down">
          <div className="area--down-left" id="test2">
            <PageNav x={0} y={1} />
          </div>
          <div className="area--down-right" id="test3">
            <PageNav x={1} y={1} />
          </div>
        </div> */}
    </section>
  );
}

export default PageHome;