import React from 'react';
import { Header }  from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsStore, SelectedProjectStore } from './context';


const App = () => {
  return (
    <SelectedProjectStore>
      <ProjectsStore>
        <div className="ui container">
            <Header />
            <Content />
        </div>
      </ProjectsStore>
    </SelectedProjectStore>
  );
};

export default App;
