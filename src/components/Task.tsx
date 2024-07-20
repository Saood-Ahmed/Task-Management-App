import React, { useState } from 'react';
import { Task as TaskType } from '../types/index';

interface TaskProps {
    task: TaskType;
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, newText: string) => void; // Add editTask prop
}

const Task: React.FC<TaskProps> = ({ task, toggleComplete, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);
    
    const handleSave = () => {
        editTask(task.id, newText);
        setIsEditing(false);
    }

    return (
        <div className='flex justify-between items-center p-2 border-b border-gray-200'>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="flex-1 border p-2"
                />
            ) : (
                <div
                    className={`flex-1 ${task.completed ? 'line-through' : ''}`}
                    onClick={() => toggleComplete(task.id)}
                >
                    {task.text}
                </div>
            )}
            <button
                className='bg-red-500 text-white px-2 py-1 rounded'
                onClick={() => deleteTask(task.id)}
            >
                Delete
            </button>
            {isEditing ? (
        <button
          className="bg-green-500 text-white px-2 py-1 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      ) : (
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      )}
        </div>
    )
}

export default Task;