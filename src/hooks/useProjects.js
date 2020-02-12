import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { useAuthContext } from '../context';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const { userId } = useAuthContext();
  
    useEffect(() => {
      console.log(userId);
      firebase
        .firestore()
        .collection('projects')
        .where('userId', '==', userId)
        .orderBy('projectId')
        .get()
        .then(snapshot => {
          const allProjects = snapshot.docs.map(project => ({
            ...project.data(),
            docId: project.id,
          }));
  
          if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
            setProjects(allProjects);
          }
        });
    }, [projects, userId]);
  
    return { projects, setProjects };
  };
