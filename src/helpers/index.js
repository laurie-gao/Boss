import { combinedTasks } from '../constants';

export const findTasks = selectedProject => {
    combinedTasks.find(task => task.key === selectedProject);
};