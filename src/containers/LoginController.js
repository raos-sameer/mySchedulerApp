import React from "react";
import Login from "../components/Login/Login";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/loginActions";
export class LoginController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: "",
      },
    };
  }
  submitForm = (e) => {
    e.preventDefault();
    const { login } = this.props;
    login(this.state.values.email);
  };
  handleInputChange = (e) => {
    this.setState(
      {
        values: { ...this.state.values, [e.target.name]: e.target.value },
      },
      () => {}
    );
  };
  render() {
    const { name, isApiLoaded } = this.props;
    if (isApiLoaded && name) {
      this.props.history.push("/home");
    }
    return (
      <Login
        name={name}
        state={this.state}
        handleSubmit={this.submitForm}
        handleInputChange={this.handleInputChange}
      ></Login>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.loggedInUser,
    isApiLoaded: state.isLogin_api_loaded,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (name) => {
      dispatch(login(name));
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginController)
);
