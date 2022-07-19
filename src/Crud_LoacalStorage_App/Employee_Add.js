import React from 'react'

export default function addEmployee() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let employeeList = [];
        let data = new FormData(e.target);        
        let fname = data.get('firstName');
        let lname = data.get('lastName');
        let dob = data.get('dob');
        let deg = data.get('degignation');
        let exp = data.get('experience');
        // let profpic = data.get('profilePhoto');
        employeeList = [fname, lname, dob, deg, exp];
        employeeList = [...employeeList, employeeList];
        localStorage.setItem("list", JSON.stringify(employeeList));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">Fast Name</label>
                <input type="text" className="form-control" name="firstName" id='firstName' placeholder="Fast Name" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" name="lastName" placeholder="Last Name" />
            </div>
            <div className="form-group">
                <label htmlFor="dob">DOB</label>
                <input type="date" className="form-control" name="dob" placeholder="DOB" />
            </div>
            <div className="form-group">
                <label htmlFor="degignation">Designation</label>
                <input type="text" className="form-control" name="degignation" placeholder="Designation" />
            </div>
            <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <input type="text" className="form-control" name="experience" placeholder="Experience" />
            </div>
            <div className="form-group">
                <label htmlFor="profilePhoto">Profile Photo</label>
                <input type="file" className="form-control" name="profilePhoto" placeholder="Profile Photo" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}
