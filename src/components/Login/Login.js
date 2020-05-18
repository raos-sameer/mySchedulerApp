import React from "react";
import { Container, Jumbotron, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { StyledDiv } from "../../styles";
export const Login = ({
  handleSubmit,
  name,
  handleInputChange,
  state,
  listOfValidEmailIds,
  validEmails,
}) => (
  <StyledDiv>
    <Jumbotron>
      <Container>
        <h1>
          Welcome <br />
          My Scheduling page
        </h1>
      </Container>
    </Jumbotron>
    <Container>
      <Container>
        <h2>
          <Badge variant="light">Login Page</Badge>
        </h2>{" "}
        <br />
      </Container>
    </Container>
    <Container>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <div className="input-group">
          <label htmlFor="email">E-mail Address</label> &nbsp;
          <input
            type="email"
            name="email"
            id="email"
            value={state.values.email}
            onChange={handleInputChange}
            title="Email"
            required
          />
        </div>{" "}
        <br />
        <div className="input-group">
          <label htmlFor="password">Password</label> &nbsp;
          <input
            type="password"
            name="password"
            id="password"
            value={state.values.password}
            onChange={handleInputChange}
            title="password"
            required
          />
        </div>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </Container>
    <br />
    <br />
    <div>
      {" "}
      <b>
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>{" "}
        are the list of valid Email Ids:: <br />
        Password validation not required
      </b>
    </div>
  </StyledDiv>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  listOfValidEmailIds: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.shape().isRequired,
  validEmails: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Login;
