import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { links } from 'routes/links';

import IconButton from 'components/ui/IconButton';

/**
 * TODO: refactor: 형태가 Dropdown과 비슷함
 */

interface LinkButtonProps {
  name: keyof typeof links;
  disabled?: boolean;
  onClick?: () => void;
};

const LinkButton = ({ name, disabled, onClick }: LinkButtonProps ) => {
  return <Link className='btn' to={links[name]} onClick={onClick} aria-disabled={disabled}>
    {name}
  </Link>
}

const HeaderDrawer = () => {
  // const refDrawer = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const onCloseDrawer = () => {
    setExpanded(false)
  };

  const onToggleDrawer = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    onCloseDrawer();
  }, [location.pathname])

  return (
    <div
      // ref={refDrawer}
      className="header-drawer"
      aria-expanded={expanded}
    >
      <IconButton data='icon-drawer' name='페이지' className='btn-drawer-trigger' onClick={onToggleDrawer} />
      <div className="drawer-container">
        <div className="drawer-wrap">
          <nav className="nav-pages">
            <h3 className="font-bold">Pages</h3>
            <ul className="pages-list">
              <li><LinkButton name="home" /></li>
              <li><LinkButton name="profile" /></li>
              <li><LinkButton name="portfolio" /></li>
              <li><LinkButton name="gallery" disabled /></li>
            </ul>
          </nav>
          <button className='btn btn-language'>en/ko</button>
          <nav className="nav-more">
            <a href={links.github} rel='noreferrer' onClick={onCloseDrawer} target="_blank" className="btn">github</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderDrawer;
