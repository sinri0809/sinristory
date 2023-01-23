import React, { useEffect } from 'react';

import MainRouter from 'routes/Router';

import Header from 'components/layout/Header';
import BackgroundSea from 'components/common/BackgroundSea';

import './styles/index.scss';

function App() {
  useEffect(() => {
    document.body.classList.add('light');
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
