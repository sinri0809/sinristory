import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import IconButton from 'components/icons/IconButton';
import Switch from 'components/ui/Switch';
import Tooltip, { TooltipDefault } from 'components/ui/Tooltip';

import { LinkButton, LinkButtonHref } from 'view/header/header_nav_button';

// TODO: refactor: 형태가 Dropdown과 비슷함
const HeaderDrawer = () => {
  const refDrawer = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [language, setLaguage] = useState(false);
  const location = useLocation();

  const onCloseDrawer = () => {
    setExpanded(false)
  };

  const onToggleDrawer = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    onCloseDrawer();
  }, [location.pathname]);
  
  useEffect(() =>{
    document.addEventListener('click', (event) => {
      if (!refDrawer.current?.contains(event.target as Node)) {
        onCloseDrawer();
      }
    });

    return () => {
      document.removeEventListener('click', ()=>{});
    }
  },[])

  return (
    <div
      ref={refDrawer}
      className="header-drawer"
      aria-expanded={expanded}
    >
      <IconButton toggle={expanded} data='icon-drawer' name='페이지' className='btn-drawer-trigger' onClick={onToggleDrawer} />
      <div className="drawer-container">
        <div className="drawer-wrap">
          <nav className="nav-pages">
            <h3 className="font-bold">Pages</h3>
            <ul className="pages-list">
              <li><LinkButton name="home" /></li>
              <li><LinkButton name="profile" /></li>
              <li><LinkButton name="portfolio" /></li>
              <li>
                <Tooltip index={0}>
                  <TooltipDefault index={0} tooltipMessage='temporarly page'>
                    <LinkButton name="gallery" />
                  </TooltipDefault>
                </Tooltip>
              </li>
            </ul>
          </nav>
          <div className='nav-control'>
            <span className='font-bold'>{language ? "en": "ko"}</span>
            <Tooltip index={0}>
              <TooltipDefault index={0} tooltipMessage='disabled'>
                <Switch disabled size='small' checked={language} onChange={()=>{}} />
              </TooltipDefault>
            </Tooltip>
          </div>
          <nav className="nav-more">
            <LinkButtonHref name='github' onClick={onCloseDrawer} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderDrawer;
