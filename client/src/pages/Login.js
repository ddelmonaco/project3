import React, { Component } from "react";
class Login extends Component {
  // Setting the initial values of this.state.username and this.state.password
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      submitting: false
      
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { email, password } = this.state;
    if (onSubmit) {
      this.setState({ submitting: true });
      onSubmit(email, password);
    }
  };
  handleChange = key => e => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { email, password, submitting } = this.state;
    return (
      <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={this.handleSubmit}
        >
          <input
            style={{ marginBottom: 24 }}
            // variant={"outlined"}
            required
            type={"email"}
            label={"Email"}
            value={email}
            onChange={this.handleChange("email")}
          />
          <input
            style={{ marginBottom: 24 }}
            // variant={"outlined"}
            required
            type={"password"}
            label={"Password"}
            value={password}
            onChange={this.handleChange("password")}
          />
          <button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            {submitting ? (
              "submitting"
            ) : (
              "Submit"
            )}
          </button>
        </form>
    );
  }
}
export default Login;