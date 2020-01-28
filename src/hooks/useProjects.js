import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export default () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase.firestore()
        .collection('projects')
        .where('userId', '==', '1a2s3d4f5g')
        .orderBy('projectId')
        .get()
        .then(snapshot => {
           const allProjects = snapshot.docs.map(project=> ({
               ...project.data(),
               docId: project.id
           }));

           if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
               setProjects(allProjects);
           }
        });
    }, [projects]);

    return { projects, setProjects };
};
