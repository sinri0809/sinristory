import React, { useEffect } from 'react';

import MainRouter from 'routes/Router';

import Header from 'components/layout/Header';

import './styles/index.scss';

function App() {
  useEffect(() => {
    document.body.classList.add('light');
  }, [])

  return (
    <>
      <Header />
      <MainRouter />
    </>
  );
}

export default App;
