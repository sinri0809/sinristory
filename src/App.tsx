import React, { useEffect } from 'react';

import MainRouter from 'routes/Router';

import Header from 'components/layout/Header';
import Test from 'components/common/Test';

import './styles/index.scss';

function App() {
  useEffect(() => {
    document.body.classList.add('light');
  }, [])

  return (
    <>
      <Header />
      <MainRouter />
      <Test />
    </>
  );
}

export default App;
