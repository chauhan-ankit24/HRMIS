import React, { useEffect, useState } from 'react'
import './APAR_form.css'



function APAR_Form() {
    //creating an object where all the input values will be saved 
    const data = { from: "", upto: "", name: "", emp_id: "", dob: "", designation: "", pay: "", grp: "", entrydate: "", date: "", leave: "", otherleave: "" };
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        console.log("Submitted Successfully")
        console.log(flag);
    }, [flag])

    //this function inserts the values of all the parameters
    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }

    //this function handles the optional and compulsory parameters
    function handleSubmit(e) {
        e.preventDefault();
        //these fields are compulsory fields
        if (!inputData.from || !inputData.upto || !inputData.name || !inputData.emp_id || !inputData.dob || !inputData.designation || !inputData.pay || !inputData.grp || !inputData.entrydate || !inputData.date || !inputData.leave) {
            alert("All fields are mandatory")
        }
        else {
            setFlag(true)
        }
    }
    return (

        <>
            <pre>
                {(flag) ?
                    alert("Submitted dude")
                    // <h2 className='ui-define'>Hello {inputData.name}, You,ve Submitted Successfully</h2>
                    : ""}
            </pre>
            <form className='container' onSubmit={handleSubmit}>
                <div className='header'>
                    <h1>APAR Management Form</h1>
                </div>
                <div className='period'>
                    <div className='title'><h3>Report for the Period :</h3></div>
                    <div className='content'>
                        <div><h4>From</h4><input type='date'
                            name="from" value={inputData.from} onChange={handleData}></input>
                        </div>
                        <div><h4>Upto </h4><input type='date'
                            name="upto" value={inputData.upto} onChange={handleData}></input>

                        </div>
                    </div>
                </div>
                <div className='personal_deatils'>
                    <div>
                        <input type='text' placeholder='Name'
                            name="name" value={inputData.name} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Employee Id'
                            name="emp_id" value={inputData.emp_id} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Date of birth'
                            name="dob" value={inputData.dob} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Designation'
                            name="designation" value={inputData.designation} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Present Pay'
                            name="pay" value={inputData.pay} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Section/Group'
                            name="grp" value={inputData.grp} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Date of entry in C-DAC'
                            name="entrydate" value={inputData.entrydate} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Date of entry to the current designation'
                            name="date" value={inputData.date} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Leave availed'
                            name="leave" value={inputData.leave} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Absence from duty other then leave'
                            name="otherleave" value={inputData.otherleave} onChange={handleData}></input>
                    </div>
                </div>
                <div>
                    <button type='submit'>submit</button>
                </div>
            </form>
        </>
    )
}

export default APAR_Form