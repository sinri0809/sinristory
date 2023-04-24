import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import { links } from "routes/links";

import Icon from 'components/icons/Icon';

const Header = () => {
  const refButtonSwitchTheme = useRef<HTMLButtonElement>(null);

  const onClickButtonSwitchTheme = () => {
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } else if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  };

  const onClickButtonDrawer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasAttribute("focus")) {
      event.currentTarget.toggleAttribute("focus")
    } else if (!event.currentTarget.hasAttribute("focus")) {
      event.currentTarget.toggleAttribute("focus")
    }
  }

  useEffect(()=> {
    // document.addEventListener('click', (event: React.MouseEvent<HTMLButtonElement>) => {
    //   event.currentTarget.contains
    // })

    return () => {
      // document.removeEventListener('click')
    }
  })

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-title">
          <h1 className="title">hello sinri!</h1>
        </div>
        <div className="header-theme">
          <button
            ref={refButtonSwitchTheme}
            className='btn btn-switch-theme'
            onClick={onClickButtonSwitchTheme}
          >
            <Icon data='icon-theme' />
          </button>
        </div>
        <div className="header-drawer">
          <button 
            className="btn btn-drawer-trigger"
            onClick={onClickButtonDrawer}
          ><Icon data='icon-drawer' /></button>
          <div className="drawer-container">
            <div className="drawer-wrap">
              <nav className='nav-pages'>
                <h3 className='font-bold'>Pages</h3>
                <ul className="pages-list">
                  <li><Link to={links.home}>home</Link></li>
                  <li><Link to={links.profile}>profile</Link></li>
                  <li><Link to={links.portfolio}>portfolio</Link></li>
                  <li><Link to={links.gallery}>gallery</Link></li>
                </ul>
              </nav>
              <button className='btn btn-language'>en/ko</button>
              <div className="more-links-container">
                <button className="btn btn-more-list">
                  <h3>more</h3>
                  <Icon data='icon-arrow-down' />
                </button>
                <ul className="more-links-lists">
                  <li>velog</li>
                  <li>github</li>
                  <li>notion</li>
                  <li>codepen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;