// Student.js
import React, { useState, useEffect } from 'react';
import TaskList from './Tasklist';
import Layout from '../components/Layout';
const Student = () => {
  const [studentName, setStudentName] = useState('Arman'); // Replace with actual student data
  const [studentemail,setStudentEmail]=useState("arman20225@gmail.com")
  const [tasks, setTasks] = useState([]);

  // Fetch student-specific task data from an API or database
  useEffect(() => {
    // Replace this with actual API request
    const studentTasks = [
      { id: 1, title: 'Task 1', status: 'pending' },
      { id: 2, title: 'Task 2', status: 'done' },
      { id: 3, title: 'Task 3', status: 'pending' },
    ];
    setTasks(studentTasks);
  }, []);

  return (
    <Layout>
    <div className='portal'>
      <h1 className='portal-heading'>Student Dashboard</h1>
      <h2 >Student Name: {studentName}</h2>
      <h4 >Student Email: {studentemail}</h4>
      <TaskList tasks={tasks} />
    </div>
    </Layout>
  );
};

export default Student;
