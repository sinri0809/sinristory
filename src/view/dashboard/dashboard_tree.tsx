import React, { useState } from 'react';

import Icon from 'components/icons/Icon';

const DashboardTree = () => {
  const [test, setTest] = useState(false);

  const onClickTest = () => {
    setTest(!test);
  };
  return (
    <>
      <h2 data-depth={0} className="tree-title">
        UX Engineer
      </h2>
      <ul
        role="group"
        data-depth={1}
        id="list-depth-1-uxe"
        className="tree-list"
      >
        <li role="menuitem">
          <button
            aria-owns="list-depth-2-develop"
            aria-expanded={test}
            className="btn btn-toggle-tree"
            onClick={onClickTest}
          >
            <Icon data="icon-tree-index" name="toggle" />
            <span>Develop</span>
          </button>
          <ul
            role="group"
            data-depth={2}
            id="list-depth-2-develop"
            className="tree-list"
          >
            <li>
              <button className="btn">Electronics</button>
            </li>
            <li>
              <button className="btn">DB</button>
            </li>
            <li>
              <button className="btn">React</button>
            </li>
            <li>
              <button className="btn">HTML</button>
            </li>
            <li>
              <button className="btn">CSS</button>
            </li>
            <li>
              <button className="btn">JavaScript</button>
            </li>
            <li>
              <button className="btn">TypeSciprt</button>
            </li>
            <li>
              <button className="btn">React.js</button>
            </li>
            <li>
              <button className="btn">Webpack</button>
            </li>
          </ul>
        </li>

        <li>
          <button className="btn">Design</button>
        </li>
        <li>
          <button className="btn">DesignSystem</button>
        </li>
        <li>
          <button className="btn">HMI</button>
        </li>
        <li>
          <button className="btn">UX Improving</button>
        </li>
      </ul>
    </>
  );
};

export default DashboardTree;
