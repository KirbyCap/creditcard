import React from "react";
import "./login.css";

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
      return;
    }
    if (this.state.password === "") {
      alert("Please enter password");
      return;
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              name="email" type="email" className="textbox form-control" placeholder="Enter email"
              value={this.state.value} onChange={(e) => this.handleChange(e, "email")}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password" type="password" className="textbox form-control" placeholder="Enter password"
              value={this.state.value} onChange={(e) => this.handleChange(e, "password")}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default login;
