import React, { useState } from 'react'
import "./SelfAppraisal_form.css"


const SelfAppraisalForm = () => {
    const [userregistration, setuserregistration] = useState({
        username: "",
        EmployeeID: "",
        SelfAppraisalPeriod: "",
        EmailID: "",
        CurrentResponsiblities: "",
        JobAsssigned: "",
        SpecificAchievementByTheEmployee: "",
        SingnatureOfEmployee: "",
        Date: ""

    });
    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setuserregistration({ ...userregistration, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userregistration, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
    }
    return (
        <>
            <form className='container' action="" onSubmit={handleSubmit}>
                {/* <form className='container' onSubmit={handleSubmit}> */}
                <div className='header'>
                    <h1>Self Appraisal Form</h1>               </div>
                <div>
                    <label htmlFor="username"></label>
                    <input type="text" placeholder='Name Of Employee' autoComplete="off"
                        value={userregistration.username}
                        onChange={handleInput}
                        name="username" id="username" />

                </div>
                <div>
                    <label htmlFor="EmployeeID"></label>
                    <input type="text" placeholder='Employee ID' autoComplete="off"
                        value={userregistration.EmployeeID}
                        onChange={handleInput}

                        name="EmployeeID" id="EmployeeID" />
                </div>
                <div>
                    <label htmlFor="Position"></label>
                    <input type="text" placeholder='Position' autoComplete="off"
                        value={userregistration.position}
                        onChange={handleInput}
                        name="Position" id="Position" />
                </div>
                <div>
                    <label htmlFor="SelfAppraisalPeriod"></label>
                    <input type="text" placeholder='Self Appraisal Period' autoComplete="off"
                        value={userregistration.SelfAppraisalPeriod}
                        onChange={handleInput}
                        name="SelfAppraisalPeriod" id="SelfAppraisalPeriod" />
                </div>
                <div>
                    <label htmlFor="EmailID"></label>
                    <input type="text" placeholder='Email ID' autoComplete="off"
                        value={userregistration.EmailID}
                        onChange={handleInput}
                        name="EmailID" id="EmailID" />
                </div>
                <div>
                    <label htmlFor="CurrentResponsiblities"></label>
                    <input type="text" placeholder='Current Responsiblities' autoComplete="off"
                        value={userregistration.CurrentResponsiblities}
                        onChange={handleInput}
                        name="CurrentResponsiblities" id="CurrentResponsiblities" />
                </div>
                <div className='box'>
                    <div>
                        <label htmlFor="JobAsssigned"></label>
                        <input type="text" placeholder='Job Asssigned' autoComplete="off"
                            value={userregistration.JobAsssigned}
                            onChange={handleInput}
                            name="JobAsssigned" id="JobAsssigned" />
                    </div>
                    <div>
                        <label htmlFor="SpecificAchievementByTheEmployee"></label>
                        <input type="text" placeholder='Specific  Achievement  By  The Employee ' autoComplete="off"
                            value={userregistration.SpecificAchievementByTheEmployee}
                            onChange={handleInput}
                            name="SpecificAchievementByTheEmployee" id="SpecificAchievementByTheEmployee" />
                    </div>
                </div>
                <div className='box2'>
                    <div>

                        <label htmlFor="SingnatureOfEmployee"></label>
                        <input type="text" placeholder='Singnature Of  Employee' autoComplete="off"
                            value={userregistration.SingnatureOfEmployee}
                            onChange={handleInput}
                            name="SingnatureOfEmployee" id="SingnatureOfEmployee" />
                    </div>
                    <div>
                        <label htmlFor="Date"></label>
                        <input type="date" placeholder='Date' autoComplete="off"
                            value={userregistration.Date}
                            onChange={handleInput}
                            name="Date" id="Date" />
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SelfAppraisalForm