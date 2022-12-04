import React from 'react';

import MainRouter from 'routes/Router';
import Sea from 'components/Sea';

import 'style/index.scss';

function App() {
  return (
    <div className="App">
      <MainRouter />
      <Sea />
    </div>
  );
}

export default App;
