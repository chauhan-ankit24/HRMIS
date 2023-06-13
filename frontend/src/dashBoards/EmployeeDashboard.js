import React from 'react'
import axios from 'axios'
import StateContext from '../StateContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import './Dash1.css'


const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(StateContext);

  const generate = () => {
    axios.post("http://localhost:5000/updateRequest", user)
      .then(res => {
        // alert("request send");
        // navigate("/Dash2");
        // console.log(res.data);
        setUser({
          email: res.data.email,
          passwoed: res.data.passwoed,
          request: res.data.request
        });
      })
  }
  const fillForrm = () => {
    navigate("/SelfAppraisal ");
  }


  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/">Employees</a></li>
          <li><a href="/">Departments</a></li>
          <li><a href="/">Reports</a></li>
          <li><a href="/">Settings</a></li>
        </ul>
      </div>
      <div className="container">
        <div className="card">
          <h2>Welcome, {user.email}</h2>
          <div className="action">
            <button onClick={generate}>{user.request ? <h4>Request already Done</h4> : <h4>No Request given yet</h4>}</button>
            <br />
            <button onClick={fillForrm}>Fill APAR Management form</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
