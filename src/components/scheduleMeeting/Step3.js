import React from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";
export const Step3 = ({ type, date, timeSlot, name, handleSubmit }) => (
  <div>
    <Container style={{ marginTop: "5%" }}>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{type}</p>
            <footer className="blockquote-footer">
              {date}
              <br /> <cite title="Source Title">{timeSlot}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
    <br />
    <br />
    <Container>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <div className="input-group">
          <label htmlFor="firstName">First Name</label> &nbsp;
          <input
            type="firstName"
            name="firstName"
            id="firstName"
            title="FirstName"
            required
          />
        </div>{" "}
        <br />
        <div className="input-group">
          <label htmlFor="lastName">Last Name</label> &nbsp;
          <input
            type="lastName"
            name="lastName"
            id="lastName"
            title="LastName"
            required
          />
        </div>{" "}
        <br />
        <div className="input-group">
          <label htmlFor="email">E-mail Address</label> &nbsp;
          <input type="email" name="email" id="email" title="Email" required />
        </div>{" "}
        <br />
        <br />
        <button type="submit">Schedule Meeting</button>
      </form>
    </Container>
  </div>
);

Step3.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeSlot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default Step3;
