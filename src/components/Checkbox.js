import React, { useState } from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ id }) => {
    const [checked, setChecked] = useState(false);

    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({ archived: true});
    };

    return (
        <div className="checkbox-holder" data-testid="checkbox-holder"
        onClick={() => archiveTask()}>
            <span className="checkbox" />
        </div>
    );
};

