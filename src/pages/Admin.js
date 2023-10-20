import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
   <Layout>
      <div className='admin-body'>
      <h1>Admin Portal</h1>
      <Link to="/create-user" className='nav-link admin-link'>Create New User</Link>
      <Link to="/assign-task " className='nav-link admin-link'>Assign Task to User</Link>
    </div>
   </Layout>
  )
}

export default Admin
