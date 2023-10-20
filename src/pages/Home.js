import React from "react";
import Layout from "../components/Layout";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
        <h2 className="heading">Welcome to Student Management Portal</h2>
      <div className="main-home-body">
      
        <div className="home-body">
          <img src="https://img.freepik.com/free-vector/student-graduation-cap-using-computgit remote add origin https://github.com/MohdMusaiyab/student-management-portal.giter-desk_1262-21421.jpg"></img>
          <NavLink to="/login" className="nav-link login">
            Login as Student
          </NavLink>
          <NavLink to="/login" className="nav-link login">
            Login as Admin
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
