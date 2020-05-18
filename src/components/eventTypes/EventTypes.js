import React from "react";
import { Card, Container, CardDeck } from "react-bootstrap";
import { StyledButton } from "../../styles";
import PropTypes from "prop-types";
export const EventTypes = ({ onScheduleMeeting, name }) => (
  <div class="p-3 mb-2 bg-info  ">
    <br />
    <StyledButton style={{ float: "right" }} onClick={onScheduleMeeting}>
      + New Event Type
    </StyledButton>
    <Container>
      <p class="text-primary">
        <CardDeck>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Demo Call</Card.Title>
              <Card.Text>30 min</Card.Text>
              <StyledButton variant="primary">
                Edit <br />
                (No implementation)
              </StyledButton>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Techincal Call</Card.Title>
              <Card.Text>60 min</Card.Text>
              <StyledButton variant="primary">
                Edit <br />
                (No implementation)
              </StyledButton>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Account Review </Card.Title>
              <Card.Text>30 min</Card.Text>
              <StyledButton variant="primary">
                Edit <br />
                (No implementation)
              </StyledButton>
            </Card.Body>
          </Card>
        </CardDeck>
      </p>
    </Container>
  </div>
);
EventTypes.propTypes = {
  onScheduleMeeting: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default EventTypes;
