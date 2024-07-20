import React from 'react';
import Task from './Task';
import type { Task as TaskType } from '../types';

interface TaskListProps {
    tasks: TaskType[];
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void; 
    editTask: (id: number, newText: string) => void; // Add editTask prop
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask, editTask }) => {
    return (
        <div>
            {
                tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                ))
            }
        </div>
    )
};

export default TaskList;