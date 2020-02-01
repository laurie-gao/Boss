import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { combinedTasks } from '../constants';
import { getTitle, getCombinedTitle, findTasks, getDayOfWeek } from '../helpers';
import { useSelectedProjectContext, useProjectsContext } from '../context';


export const Tasks = () => {
    const { selectedProject } = useSelectedProjectContext();
    const { projects } = useProjectsContext();
    const { tasks } = useTasks(selectedProject);

    let projectName = '';
    const today = moment().weekday();

    if (findTasks(selectedProject) && selectedProject) {
        projectName = getCombinedTitle(combinedTasks, selectedProject).name;
    }

    if (projects.length > 0 && projects && selectedProject && !findTasks(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;
    }

    useEffect(() => {
        document.title = `${projectName}: Boss`;
    }, [projectName]);

    const printList = (dayOfWeek) => {
        return (
            <>
                <h4 className="tasks__date">{dayOfWeek === today? 'Today' : getDayOfWeek(dayOfWeek).name}</h4>
                <ul className="tasks__list">
                    {tasks.filter(
                        task => moment(moment(task.date, "DD/MM/YYYY").format('YYYY-MM-DD')).day() === dayOfWeek
                    )
                    .map(task => (
                        <li key={`${task.id}`}>
                            <Checkbox id={task.id} />
                            <span>{task.task}</span>
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="projectName">{projectName}</h2>

            {projectName === 'Next 7 Days' && (
                <>
                    <div>{printList(today)}</div>
                    <div>{printList((today+1)%7)}</div>
                    <div>{printList((today+2)%7)}</div>
                    <div>{printList((today+3)%7)}</div>
                    <div>{printList((today+4)%7)}</div>
                    <div>{printList((today+5)%7)}</div>
                    <div>{printList((today+6)%7)}</div>
                </>
            )}

            {projectName !== 'Next 7 Days' && (
                <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
            )}
            <AddTask />
        </div>
    );
};