import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

const TaskForm = ({ user }) => {

    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(text);
        if(!text) return;
        
        Meteor.call('tasks.insert', text);
        setText("");
    }

    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Type to add new task' 
            value = {text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;