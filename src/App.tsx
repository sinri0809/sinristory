import React, { useEffect } from 'react';

import MainRouter from 'routes/Router';

import Header from 'view/header/header';
import BackgroundSea from 'components/common/BackgroundSea';

import { isPhone } from 'tools/devices';

// import { css } from '@emotion/react';
import './styles/index.scss';

function App() {
  useEffect(() => {
    console.log('%cWELCOME SINRI\'S SEA!', 'color: #FF736F; font-weight: bold;',);
    console.log(`%cthis version is ${process.env.REACT_APP_SERVICE_VERSION}`, 'color: #F4F8FF; background: linear-gradient(112.68deg, #FF9929 0%, #FF7270 59.9%, #FF517C 100%);')
    console.log("%csource code is here -> https://github.com/sinri0809/sinristory/issues", 'color: #F4F8FF')

    document.body.classList.add('light');

    // console.debug(`${isPhone ? "mobile" : "desktop"}`);
    if (isPhone) {
      document.body.classList.add('mobile')
    } else {
      document.body.classList.add('desktop')
    }
    // window.scrollTo({
    //   top: 0,
    //   // behavior: 'instant',
    // });
  }, []);

  return (
    <>
      <Header />
      <MainRouter />
      <BackgroundSea />
    </>
  );
}

export default App;
