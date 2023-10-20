// Task.js
import React from 'react';

const Task = ({ title, status }) => {
  return (
    <div className='task'>
      <h3 className='task-title'>{title}</h3>
      <p className='task-status'>Status: {status}</p>
      <input type="checkbox"></input>
    </div>
  );
};

export default Task;
