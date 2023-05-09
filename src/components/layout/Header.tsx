import React, { useRef } from 'react';

import Icon from 'components/icons/Icon';
import HeaderDrawer from 'view/header/header_drawer';

const Header = () => {
  const refButtonSwitchTheme = useRef<HTMLButtonElement>(null);

  const onClickButtonSwitchTheme = () => {
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-title">
          <h1 className="title">hello sinri!</h1>
        </div>
        <div className="header-theme">
          <button
            ref={refButtonSwitchTheme}
            className="btn btn-switch-theme"
            onClick={onClickButtonSwitchTheme}
          >
            <Icon data="icon-theme" />
          </button>
        </div>
        <div className="header-drawer">
          <HeaderDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
