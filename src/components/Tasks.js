import React, {useState, useEffect} from 'react';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { combinedTasks } from '../constants';
import { getTitle, getCombinedTitle, findTasks } from '../helpers';
import { useSelectedProjectContext, useProjectsContext } from '../context';


export const Tasks = () => {
    const { selectedProject } = useSelectedProjectContext();
    const { projects } = useProjectsContext();
    const { tasks } = useTasks(selectedProject);

    let projectName = '';

    if (findTasks(selectedProject) && selectedProject) {
        projectName = getCombinedTitle(combinedTasks, selectedProject).name;
    }

    if (projects.length > 0 && projects && selectedProject && !findTasks(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;
    }

    useEffect(() => {
        document.title = `${projectName}: Boss`;
    }, []);

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="projectName">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
            <AddTask />
        </div>
    );
};