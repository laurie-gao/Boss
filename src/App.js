import React from 'react';
import { Header }  from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsStore, SelectedProjectStore, InboxStore } from './context';

const App = () => {
  return (
    <SelectedProjectStore>
      <ProjectsStore>
        <InboxStore>
            <div className="ui container">
                <Header />
                <Content />
            </div>
        </InboxStore>
      </ProjectsStore>
    </SelectedProjectStore>
  );
};

export default App;
