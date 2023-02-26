import React, { useEffect } from 'react';

import MainRouter from 'routes/Router';

import Header from 'components/layout/Header';
import BackgroundSea from 'components/common/BackgroundSea';

import { isPhone } from 'tools/devices';

import './styles/index.scss';

function App() {
  useEffect(() => {
    document.body.classList.add('light');
    console.log(`isPhone? ${isPhone}`)
  }, [])

  return (
    <>
      <Header />
      <MainRouter />
      <BackgroundSea />
    </>
  );
}

export default App;
