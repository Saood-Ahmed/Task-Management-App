import React, { useState } from 'react'

interface AddTaskProps{
    addTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
            setText('');
        };
    };

    return(
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='flex-1 border p-2'
                placeholder='Add a new Task'
            />
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 ml-2 rounded'>
                Add
            </button>
        </form>
    )
};
 
export default AddTask;