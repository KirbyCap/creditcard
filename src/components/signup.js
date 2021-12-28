import React from 'react'
//import PropTypes from 'prop-types'
import "./signup.css";

class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fName: '',
            mName: '',
            lName: '',
            ssn: '',
            address: '',
            phoneNo: '',
            dobDate: '',
            companyName: '',
            employField: '',
            salary: '',
            employLength: '',
            refName1: '',
            refEmail1: '',
            refPhone1: '',
            refName2: '',
            refEmail2: '',
            refPhone2: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e, Field) {
        this.setState({ [Field]: e.target.value })
        this.Field = e.target.value;
    }
    handleSubmit(e) {
        if (this.state.email === "") {
            alert("Please enter email");
            e.preventDefault();
            return;
        }
        if (this.state.password === "") {
            alert("Please enter password");
            e.preventDefault();
            return;
        }
        if (this.state.fName === "") {
            alert("Please enter first name");
            e.preventDefault();
            return;
        }
        if (this.state.lName === "") {
            alert("Please enter last name");
            e.preventDefault();
            return;
        }
        if (this.state.ssn === "") {
            alert("Please enter social security number");
            e.preventDefault();
            return;
        }
        if (this.state.ssn.length !== 8) {
            alert("Social security number incorrect length");
            e.preventDefault();
            return;
        }
        if (this.state.address === "") {
            alert("Please enter address");
            e.preventDefault();
            return;
        }
        if (this.state.phoneNo === "") {
            alert("Please enter conect number");
            e.preventDefault();
            return;
        }
        if (this.state.dobDate === "") {
            alert("Please enter date of birth");
            e.preventDefault();
            return;
        }
        if (this.state.companyName === "") {
            alert("Please enter company name");
            e.preventDefault();
            return;
        }
        if (this.state.employField === "") {
            alert("Please enter employment field");
            e.preventDefault();
            return;
        }
        if (this.state.salary === "") {
            alert("Please enter salary");
            e.preventDefault();
            return;
        }
        if (this.state.employLength === "") {
            alert("Please enter employment length");
            e.preventDefault();
            return;
        }
        if (this.state.refName1 === "") {
            alert("Please enter first reference name");
            e.preventDefault();
            return;
        }
        if (this.state.refEmail1 === "") {
            alert("Please enter first reference email");
            e.preventDefault();
            return;
        }
        if (this.state.refPhone1 === "") {
            alert("Please enter first reference contact number");
            e.preventDefault();
            return;
        }
        if (this.state.refName2 === "") {
            alert("Please enter second reference name");
            e.preventDefault();
            return;
        }
        if (this.state.refEmail2 === "") {
            alert("Please enter second reference email");
            e.preventDefault();
            return;
        }
        if (this.state.refPhone2 === "") {
            alert("Please enter second reference contact number");
            e.preventDefault();
            return;
        }
        window.location.reload();
    }
    render() {
        return (
            <div>
                <h3>Create account</h3>
                <form >
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label id="labelName">Email address</label>
                        <label id="labelName">Password</label>
                        <br />
                        <input
                            name="email" type="email" className="secondText form-control" placeholder="Enter email"
                            value={this.state.value} onChange={(e) => this.handleChange(e, "email")}
                        />
                        &nbsp;<input
                            name="password" type="password" value={this.state.value} placeholder="Enter password"
                            onChange={(e) => this.handleChange(e, "password")} className="secondText form-control"
                        />
                    </div>
                    <br />
                    <h3>Personal Information</h3>
                    <div className="form-group">
                        <label id="labelName">First name </label>
                        <label id="labelName"> Middle name </label>
                        <label id="labelName"> Last name</label>
                        <br />
                        <input
                            name="fName" type="text" value={this.state.value} placeholder="First name"
                            onChange={(e) => this.handleChange(e, "fName")} className="thirdText form-control"
                        />
                        &nbsp;<input
                            name="mName" type="text" value={this.state.value} placeholder="Middle name"
                            onChange={(e) => this.handleChange(e, "mName")} className="thirdText form-control"
                        />
                        &nbsp;<input
                            name="lName" type="text" value={this.state.value} placeholder="Last name"
                            onChange={(e) => this.handleChange(e, "lName")} className="thirdText form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label id="labelName">Social Security Number</label>
                        <label id="labelName">Address</label>
                        <label id="labelName">Phone number</label>
                        <br />
                        <input
                            name="ssn" type="number" value={this.state.value} placeholder="SSN"
                            onChange={(e) => this.handleChange(e, "ssn")} className="thirdText form-control"
                        />
                        &nbsp;<input
                            name="address" type="text" value={this.state.value} placeholder="Address"
                            onChange={(e) => this.handleChange(e, "address")} className="thirdText form-control"     
                        />
                        &nbsp;<input
                            name="phoneNo" type="tel" pattern="([0-9]{3})-[0-9]{3}-[0-9]{4}"
                            value={this.state.value} onChange={(e) => this.handleChange(e, "phoneNo")}
                            className="thirdText form-control" placeholder="(000)-000-0000"
                        />
                    </div>
                    <div className="form-group" id="dob">
                        <label>Date of Birth</label>
                        &nbsp;<input
                            name="dobDate" value={this.state.value}
                            onChange={(e) => this.handleChange(e, "dobDate")} type="date"
                        />
                    </div>
                    <br />
                    <h3>Employment</h3>
                    <div className="form-group">
                        <label id="labelName">Company Name</label>
                        <label id="labelName">Employment Field</label>
                        <br />
                        <input
                            name="companyName" type="text" value={this.state.value} placeholder="Company name"
                            onChange={(e) => this.handleChange(e, "companyName")}
                            className="secondText form-control"
                        />
                        &nbsp;<input
                            name="employField" type="text" value={this.state.value}
                            onChange={(e) => this.handleChange(e, "employField")} className="secondText form-control"
                            placeholder="Field of employment"
                        />
                    </div>
                    <div className="form-group">
                        <label id="labelName">Salary</label>
                        <label id="labelName">Employment length</label>
                        <br />
                        <input
                            name="salary" type="number" value={this.state.value} placeholder="0.00"
                            onChange={(e) => this.handleChange(e, "salary")} className="secondText form-control"
                        />
                        &nbsp;<input
                            name="employLength" value={this.state.value}
                            onChange={(e) => this.handleChange(e, "employLength")} type="text"
                            className="secondText form-control" placeholder="Employment length"
                        />
                    </div>
                    <br />
                    <h3>References</h3>
                    <div className="form-group">
                        <label id="labelName">Name</label>
                        <label id="labelName">Contect email</label>
                        <label id="labelName">Contact number</label>
                        <br />
                        <input
                            name="refName1" type="text" value={this.state.value} placeholder="Reference Name"
                            onChange={(e) => this.handleChange(e, "refName1")} className="thirdText form-control"
                        />
                        &nbsp;<input
                            name="refEmail1" type="text" value={this.state.value} placeholder="Reference email"
                            onChange={(e) => this.handleChange(e, "refEmail1")} className="thirdText form-control"
                        />
                        &nbsp;<input
                            name="refPhone1" type="tel" pattern="([0-9]{3})-[0-9]{3}-[0-9]{4}"
                            value={this.state.value} onChange={(e) => this.handleChange(e, "refPhone1")}
                            className="thirdTextform-control" placeholder="(000)-000-0000"
                        />
                    </div>
                    <div className="form-group">
                        <label id="labelName">Name</label>
                        <label id="labelName">Contect email</label>
                        <label id="labelName">Contact number</label>
                        <br />
                        <input
                            name="refName2" type="text" value={this.state.value} placeholder="Reference Name"
                            onChange={(e) => this.handleChange(e, "refName2")} className="thirdText form-control"
                        />
                        &nbsp;<input
                            name="refEmail2" type="text" value={this.state.value} placeholder="Reference email"
                            onChange={(e) => this.handleChange(e, "refEmail2")} className="thirdText form-control"
                        />
                        &nbsp;<input
                            name="refPhone2" type="tel" pattern="([0-9]{3})-[0-9]{3}-[0-9]{4}"
                            value={this.state.value} onChange={(e) => this.handleChange(e, "refPhone2")}
                            className="thirdText form-control" placeholder="(000)-000-0000"
                        />
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox" className="custom-control-input" id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Display information for seconady accounts.
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>
                        Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">sign in?</a>
                    </p>
                </form>
            </div>
        );
    }
}


// signup.propTypes = {

// }

export default signup

