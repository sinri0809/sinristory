import React, { useRef } from 'react';
import { Link } from "react-router-dom";

import { links } from "routes/links";

const Header = () => {
  const refDrawer = useRef<HTMLDivElement>(null);

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-title">
          <h1 className="title">hello sinri!</h1>
        </div>
        <div className="header-theme">
          <button>day/night</button>
        </div>

        <div className="header-drawer">
          <button 
            className="btn drawer-trigger"
            onClick={() => {
              refDrawer.current?.style.display === 'none'
              ? refDrawer.current.style.setProperty("display", 'block')
              : refDrawer.current?.style.setProperty("display", 'none')
            }}
          >drawer box icon</button>

          <div 
            ref={refDrawer}
            className="drawer-container" 
          >
            <div className="drawer-wrap">
              <nav>
                <Link to={links.home}>home</Link>
                <Link to={links.profile}>profile</Link>
                <Link to={links.portfolio}>portfolio</Link>
                <Link to={links.gallery}>gallery</Link>
              </nav>

              <button>en/ko</button>

              <ul className="links">
                <li>velog</li>
                <li>github</li>
                <li>notion</li>
                <li>codepen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;