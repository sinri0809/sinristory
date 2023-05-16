import React, { useEffect } from 'react';

import MainRouter from 'routes/Router';

import Header from 'components/layout/Header';
import BackgroundSea from 'components/common/BackgroundSea';

import { isPhone } from 'tools/devices';
import { css } from '@emotion/react';
import './styles/index.scss';

function App() {
  useEffect(() => {
    document.body.classList.add('light');
    console.log(`isPhone? ${isPhone}`);
  }, []);

  return (
    <div
      css={css`
        display: block;
      `}
    >
      <Header />
      <MainRouter />
      <BackgroundSea />
    </div>
  );
}

export default App;
