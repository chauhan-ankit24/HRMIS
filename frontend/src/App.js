import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StateContext from './StateContext';

import HrDashboard from './dashBoards/HrDashboard.js';
import EmployeeDashboard from './dashBoards/EmployeeDashboard.js';
import RepOfficerDashboard from './dashBoards/ReportingOfficer.js'

import LoginPage from './loginPage/Login.js';

import APARForm from './form/APAR/APAR_form.js'
import SelfAppraisalForm from './form/SelfAppraisal/SelfAppraisal_form.js'
import {Evaluation_form} from './form/Evaluation/Evaluation_form.jsx'

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",

    request: false,
    filledByHr: false,
    filledByEmployee: false,

    username: "",
    EmployeeID: "",
    SelfAppraisalPeriod_from: "",
    SelfAppraisalPeriod_to: "",
    ProjectName: "",
    CurrentResponsiblities: "",
    JobAsssigned: "",
    SpecificAchievementByTheEmployee: "",
    SingnatureOfEmployee: "",
    Date: "",

    entrydate: "",
    dob: "",
    designation: "",
    pay: "",
    grp: "",
    leave: "",
    otherleave: "",
    Aparfrom: "",
    Aparupto: "",
    Apardate: "",

  })
  const [empReq, setEmpReq] = useState([]);
  const [requserId, setReqUserId] = useState();

  return (
    <div className="App">
      <StateContext.Provider value={{ user, setUser, empReq, setEmpReq, requserId, setReqUserId }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/Login" />} />
            <Route path="/Login" element={<LoginPage />} />

            <Route path="/HrDashboard" element={<HrDashboard />} />
            <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
            <Route path="/RepOfficerDashboard" element={<RepOfficerDashboard />} />

            <Route path="/APAR" element={<APARForm />} />
            <Route path="/SelfAppraisal" element={<SelfAppraisalForm />} />
            <Route path="/Evaluation_form" element={<Evaluation_form />} />

          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
