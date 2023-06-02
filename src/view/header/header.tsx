import React, { useRef } from 'react';

import IconButton from 'components/ui/IconButton';

import { LinkButton } from 'view/header/header_nav_button';
import HeaderDrawer from 'view/header/header_drawer';

const Header = () => {
  const refButtonSwitchTheme = useRef<HTMLButtonElement>(null);

  // TODO: switch -> classList.toggle()
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
          <h1 className="title"><LinkButton name='home' title='hello sinri' /></h1>
        </div>
        <div className="header-theme">
          <IconButton 
            data='icon-theme'
            name='테마 전환 버튼'
            ref={refButtonSwitchTheme}
            className='btn-switch-theme'
            onClick={onClickButtonSwitchTheme}
          />
        </div>
        <HeaderDrawer />
      </div>
    </header>
  );
};

export default Header;
