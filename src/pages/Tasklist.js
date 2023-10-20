// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div className='tasklist-body'>
      <h4 className='tasklist-heading'> Your Tasks Are:</h4>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} status={task.status} />
      ))}
    </div>
  );
};

export default TaskList;
