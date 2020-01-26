import React from 'react';
import { Header }  from './components/layout/Header';
import { Content } from './components/layout/Content';

const App = () => {
  return (
      <div className="ui container">
          <Header />
          <Content />
      </div>
  );
};

export default App;
