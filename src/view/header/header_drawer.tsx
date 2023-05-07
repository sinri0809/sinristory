import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { links } from "routes/links";

import Icon from "components/icons/Icon";

/**
 * TODO: refactor: 형태가 Dropdown과 비슷함
 */

const HeaderDrawer = () => {
  const refDrawer = useRef<HTMLDivElement>(null);

  const closeDrawer = (event: any) => {

  };

  const toggleDrawer = () => {
    refDrawer.current?.toggleAttribute('aria-expanded');
  }

  useEffect(() => {
    refDrawer.current?.toggleAttribute('aria-expanded', false)
  }, [])

  return <div
    ref={refDrawer}
    className="drawer"
    onBlur={closeDrawer}
  >
    <button
      className="btn btn-drawer-trigger"
      onClick={toggleDrawer}
    >
      <Icon data='icon-drawer' />
    </button>
    <div className="drawer-container">
      <div className="drawer-wrap">
        <nav className='nav-pages'>
          <h3 className='font-bold'>Pages</h3>
          <ul className="pages-list">
            <li><Link className="btn" to={links.home}>home</Link></li>
            <li><Link className="btn" to={links.profile}>profile</Link></li>
            <li><Link className="btn" to={links.portfolio}>portfolio</Link></li>
            <li><Link className="btn" aria-disabled to={links.gallery}>gallery</Link></li>
          </ul>
        </nav>
        <button className='btn btn-language'>en/ko</button>
        <div className="more-links-wrap">
          <details>
            <summary>
              <span>more</span>
              <Icon data='icon-arrow-down' />
            </summary>
            <ul className="more-links-list">
              <li><a href="#0" target="_blank" className="btn">velog</a></li>
              <li><a href="#0" target="_blank" className="btn">github</a></li>
              <li><a href="#0" target="_blank" className="btn">notion</a></li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
}

export default HeaderDrawer;