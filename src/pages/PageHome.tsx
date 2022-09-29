import React from "react";

// import Header from "components/layout/Header";
import PageNav from "components/common/PageNav";

const PageHome = () => {

  const onScrollHome = (e: React.UIEvent) => {
  }

  return (
    <div 
      className="home__wrapper"
      onScroll={(e) => onScrollHome(e)}
    >
      <section className="home">
        {/* <Header /> */}
        <div className="area--top">
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
        </div>
      </section>
    </div>
  );
}

export default PageHome;