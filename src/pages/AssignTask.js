import React, { useState } from 'react';
import Layout from '../components/Layout'

const AssignTask = () => {
  const [task, setTask] = useState({
    studentName: '',
    dueDate: '',
    taskDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle task assignment and data submission
    console.log('Task data submitted:', task);
  };
  return (
   <Layout>
     <div>
      <h2>Assign a Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={task.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="taskDescription">Task Description:</label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            value={task.taskDescription}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Assign Task</button>
      </form>
    </div>
   </Layout>
  )
}

export default AssignTask
