import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Student from "./pages/Student";
import Admin from "./pages/Admin";
import CreateUser from"./pages/CreateUser";
import AssignTask from "./pages/AssignTask"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/student-portal" element={<Student></Student>}></Route>
        <Route path="/admin-portal" element={<Admin></Admin>}></Route>
        <Route path="/create-user" element={<CreateUser></CreateUser>} />
        <Route path="/assign-task" element={<AssignTask></AssignTask>} />
      </Routes>
    </>
  );
}

export default App;
