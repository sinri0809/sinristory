import React, { useEffect } from 'react';

import MainRouter from 'routes/Router';

import Header from 'view/header/header';
import BackgroundSea from 'components/common/BackgroundSea';

import { isPhone } from 'tools/devices';
// import { css } from '@emotion/react';
import './styles/index.scss';

function App() {
  useEffect(() => {
    document.body.classList.add('light');
    console.debug(`${isPhone ? "mobile" : "desktop"}`);
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
