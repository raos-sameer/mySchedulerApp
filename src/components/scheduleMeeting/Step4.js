import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../../styles";
import { Card, Container } from "react-bootstrap";
export const Step4 = ({ type, date, timeSlot, name, backToHome }) => (
  <div>
    <Container style={{ marginTop: "5%" }}>
      <Card>
        <Card.Header>Schedule Confirmed with {name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{type}</p>
            <footer className="blockquote-footer">
              {timeSlot} {date}
              <br />
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
    <br />
    <br />
    <StyledButton onClick={backToHome}>Back</StyledButton>
  </div>
);
Step4.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timeSlot: PropTypes.string.isRequired,
  backToHome: PropTypes.func.isRequired,
};
export default Step4;
