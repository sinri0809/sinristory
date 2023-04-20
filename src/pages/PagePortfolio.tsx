import React, {useState} from "react";

import Box from "components/layout/Box";

import Switch from "components/portfolio/Switch";

const PagePortfolio = () => {
  const [checked, setChecked] = useState(false);
  
  const onChangeSwitch = () => {
    setChecked(!checked);
  };

  return <main className="portfolio">
    <div className="sort-container">
      <div className="sort-list-wrap">
        <h2>️🏄‍♀️</h2>
        <ul className="sort-list">
          <li className="sort-item">
            <button className="btn btn-sort name-component">Switch</button>
          </li>
          <li className="sort-item">
            <button className="btn btn-sort name-component selected">Progress</button>
          </li>
        </ul>
      </div>
    </div>

    <div className="portfolio-container">
      <div className="portfolio-wrap">
        <ul className="portfolio-list">
          <li className="portfolio-item">
            <div className="ui-presenter-wrap">
              <h4 className="ui-title name-component">Switch</h4>
              <div className="ui-component">
                <Switch size="large" checked={checked} onChange={onChangeSwitch} />
                <br />
                {/* {
                  checked && <div style={{ marginTop: 30}}>checked</div>
                } */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </main>
}

export default PagePortfolio;