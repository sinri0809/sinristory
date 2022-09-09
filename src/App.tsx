import React from 'react';
import Header from 'components/layout/Header';
import MainRouter from 'routes/Router';
import 'style/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
