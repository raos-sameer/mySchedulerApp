import React from "react";
import Calendar from "react-calendar";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledButton } from "../../styles";
import { Card, Container, CardDeck, Row, Col } from "react-bootstrap";
import moment from "moment-timezone";
const StyledStep2Button = styled(StyledButton)`
  margin: 0px 35px 0px 0px;
`;
export const Step2 = ({
  onDateSelection,
  onTimeSelectionButtonClick,
  showTimeSlot,
  timeLabels,
  name,
  type,
  date,
  interval,
  backToHome,
}) => (
  <div>
    <Container style={{ marginTop: "5%" }}>
      <CardDeck>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              {name}
              <br />
              <br />
              {type}
            </Card.Title>
            <Card.Text>{interval}</Card.Text>
            <StyledButton variant="primary" onClick={backToHome}>
              Back To Home
            </StyledButton>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Calendar
              onChange={onDateSelection}
              value={new Date()}
              minDate={moment().toDate()}
            />
          </Card.Body>
        </Card>
        {showTimeSlot && (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <div>
                <Container>
                  <Row>
                    <Col>{date}</Col>
                  </Row>
                </Container>
                <br />
                {timeLabels.map((slotTime) => (
                  <p>
                    <StyledStep2Button
                      value={slotTime}
                      onClick={onTimeSelectionButtonClick.bind(this)}
                    >
                      {slotTime}
                    </StyledStep2Button>
                  </p>
                ))}
              </div>
            </Card.Body>
          </Card>
        )}
      </CardDeck>
    </Container>
  </div>
);

Step2.propTypes = {
  onDateSelection: PropTypes.func.isRequired,
  backToHome: PropTypes.func.isRequired,
  onTimeSelectionButtonClick: PropTypes.func.isRequired,
  showTimeSlot: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  interval: PropTypes.string.isRequired,
  timeLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Step2;
