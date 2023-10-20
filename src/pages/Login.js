import React from "react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <Layout>
        <h1 className="text-center">Login </h1>
    <div className="center-div">
      <form >
        <div className=" mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter your Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
          
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </Layout>   
  );
};

export default Login;
