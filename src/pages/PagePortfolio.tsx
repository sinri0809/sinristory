import React, { useState } from 'react';

import Switch from 'components/portfolio/Switch';
import { Dropdown, DropdownItem } from 'components/portfolio/Dropdown';

const PagePortfolio = () => {
  const [checked, setChecked] = useState(false);

  const exampleList = Array.from([1, 2, 3, 4, 5], (x) => `item${x}`);
  const [dropdown, setDropdown] = useState(0);

  const onChangeSwitch = () => {
    setChecked(!checked);
  };

  const handleDropdownSelect = (index: number) => {
    console.log('clicked');
    setDropdown(index);
  };

  return (
    <main className="portfolio">
      <div className="sort-container">
        <div className="sort-list-wrap">
          <h2>️🏄‍♀️</h2>
          <ul className="sort-list">
            <li className="sort-item">
              <button className="btn btn-sort name-component">Switch</button>
            </li>
            <li className="sort-item">
              <button className="btn btn-sort name-component">Dropdown</button>
            </li>
            <li className="sort-item">
              <button className="btn btn-sort name-component selected">
                selected
              </button>
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
                  <Switch
                    size="large"
                    checked={checked}
                    onChange={onChangeSwitch}
                  />
                  {/* {
                  checked && <div style={{ marginTop: 30}}>checked</div>
                } */}
                </div>
              </div>
            </li>

            <li className="portfolio-item">
              <div className="ui-presenter-wrap">
                <h4 className="ui-title name-component">Dropdown</h4>
                <div className="ui-component">
                  <Dropdown selected={exampleList[dropdown]}>
                    {exampleList.map((index, itemIndex, item) => {
                      return (
                        <React.Fragment key={index}>
                          <DropdownItem
                            value={itemIndex}
                            onClick={() => handleDropdownSelect(itemIndex)}
                          >
                            {item[itemIndex]}
                          </DropdownItem>
                        </React.Fragment>
                      );
                    })}
                  </Dropdown>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PagePortfolio;
