import React, { useEffect } from "react";
import { useGlobalContext } from "../../StateContext";
import "./Analytics.css";
import axios from "axios";

const Analytics = () => {
  const { curuser, setcuruser, user, setuser } = useGlobalContext();
  console.log(curuser);

  useEffect(() => {
    getCurUser();
    getAllEmp();
  }, []);

  const getAllEmp = async () => {
    try {
      const storedusers = JSON.parse(localStorage.getItem("allusers"));
      if (storedusers) {
        setuser(storedusers);
        console.log(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCurUser = () => {
    try {
      const storedCurUser = JSON.parse(localStorage.getItem("curuser"));
      if (storedCurUser) {
        setcuruser(storedCurUser);
        console.log(curuser);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='AnEmployeeAnalyticsContainer'>
      <caption className="Ancp">EMPLOYEE's PERFORMANCE</caption>
      {curuser && curuser.Role.HR && (
        <div className="AnEAC">
          <table className="AnEAC-table">
            <thead className="Ansticky-header">
              <tr className="AnEAC-tr1">
                <th className="AnEAC-th">Emp ID</th>
                <th className="AnEAC-th">Name</th>
                <th className="AnEAC-th">Self Appraisal</th>
                <th className="AnEAC-th">Achievement Beyond Normal Scope Of Work</th>
                <th className="AnEAC-th">Reporting Officer Score</th>
                <th className="AnEAC-th">Overall Performance</th>
              </tr>
            </thead>
            <tbody>
              {user ? (
                user.map((user, index) => (
                  <tr className="AnEAC-tr" key={index}>
                    <td className="AnEAC-td">{user.empId}</td>
                    <td className="AnEAC-td">{user.userName}</td>
                    <td className="AnEAC-td">
                      {user.quarter[user.quarter.length - 1].scoreOfEvaluation.selfAppraisalScore}
                    </td>
                    <td className="AnEAC-td">
                      {user.quarter[user.quarter.length - 1].scoreOfEvaluation.achievementBeyondScore}
                    </td>
                    <td className="AnEAC-td">
                      {user.quarter[user.quarter.length - 1].scoreOfEvaluation.sc1 +
                        user.quarter[user.quarter.length - 1].scoreOfEvaluation.sc2 +
                        user.quarter[user.quarter.length - 1].scoreOfEvaluation.sc3 +
                        user.quarter[user.quarter.length - 1].scoreOfEvaluation.sc4 +
                        user.quarter[user.quarter.length - 1].scoreOfEvaluation.sc5 +
                        user.quarter[user.quarter.length - 1].scoreOfEvaluation.sc6}
                    </td>
                    <td className="AnEAC-td">
                      {user.quarter[user.quarter.length - 1].scoreOfEvaluation.totalScore < 40
                        ? "Need Improvement"
                        : user.quarter[user.quarter.length - 1].scoreOfEvaluation.totalScore < 60
                          ? "Satisfactory"
                          : user.quarter[user.quarter.length - 1].scoreOfEvaluation.totalScore < 80
                            ? "Good"
                            : "Excellent"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Analytics;