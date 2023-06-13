import React, { useContext, useState, useEffect } from 'react'
import './Dash1.css'
import { useNavigate } from 'react-router-dom'
import StateContext from '../StateContext';
import axios from 'axios';

const HrDashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(StateContext);
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getRequests")
      .then(({ data }) => {
        console.log('data ---> ', data);
        setShow(data);
      })
  }, [])
  const fillForrm = () => {
    navigate("/APAR ");
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
          <p>You have 50 employees in your company.</p>
          <div className="action">
            <button>View Employees</button>
            <a href="/">Manage Departments</a>
          </div>
        </div>
        <div className="card">
          <h2>Recent Requests</h2>

          {show.map((employee) =>
            <>
              <p>Request from : {employee.email}</p>
              <button onClick={fillForrm}>Fill apprasel form</button>
              <br />
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default HrDashboard
