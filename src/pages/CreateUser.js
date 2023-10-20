import Layout from '../components/Layout'
import React, { useState } from 'react';

const CreateUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        branch: '',
        department: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., make an API request to create a user
        console.log('User data submitted:', user);
      };
  return (
   <Layout>
        <div>
      <h2 className='text-center'>Create a New User</h2>
      <form className="create-user-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={user.branch}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={user.department}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
   </Layout>
  )
}

export default CreateUser
