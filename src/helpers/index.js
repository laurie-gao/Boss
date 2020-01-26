import { combinedTasks } from '../constants';

export const combinedTasks = selectedProject => {
    combinedTasks.find(task => task.key === selectedProject);
};