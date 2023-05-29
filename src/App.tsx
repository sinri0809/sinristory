import React, { useEffect } from 'react';

import MainRouter from 'routes/Router';

import Header from 'components/layout/Header';
import BackgroundSea from 'components/common/BackgroundSea';

import { isPhone } from 'tools/devices';
// import { css } from '@emotion/react';
import './styles/index.scss';

function App() {
  useEffect(() => {
    document.body.classList.add('light');
    console.debug(`${isPhone ? "mobile" : "pc"}`);
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
