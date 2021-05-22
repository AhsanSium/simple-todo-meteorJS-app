import React from 'react';

const Task = ({ task, onCheckboxClick, onDeleteClick }) => {

    console.log(task);

    return (
            <>
                {
                    task.map(singleTask => <li>
                        <input type="checkbox"
                        checked={!!singleTask.isChecked}
                        onClick={() => onCheckboxClick(singleTask)}
                        readOnly
                        />
                        <span> {singleTask.text} </span>
                        <button onClick={() => onDeleteClick(singleTask)}> &times; </button>
                        </li>)
                }
            </>
    );
};

export default Task;