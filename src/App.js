import React, {useEffect} from 'react';
import { Header }  from './components/layout/Header';
import { Content } from './components/layout/Content';
import { Login } from './components/Login';
import { firebase } from './firebase';
import 'firebase/database';
import { ProjectsStore, SelectedProjectStore, InboxStore, useAuthContext } from './context';

const App = () => {
  const { userId, setUserId } = useAuthContext();

  useEffect(() => {
    authListener();
  }, []); 

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.email);
        firebase.firestore().collection('users').doc(user.uid).set({
          userId: user.email
        });
      } else {
        setUserId(null);
      }
    });
  };

  return (
    <SelectedProjectStore>
      <ProjectsStore>
        <InboxStore>
          {userId
            ? (<div className="ui container"><Header /><Content /></div>)
            : (<Login />)
          }
        </InboxStore>
      </ProjectsStore>
    </SelectedProjectStore>
  );
};

export default App;
