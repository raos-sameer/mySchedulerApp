import React from "react";
import { Tabs, Tab, Container, Jumbotron } from "react-bootstrap";
import PropTypes from "prop-types";
import ScheduledEvent from "../scheduledEvents/ScheduledEvent";
import EventTypes from "../eventTypes/EventTypes";
import { StyledDiv } from "../../styles";
export const HomePage = ({ onScheduleMeeting, upcoming, name }) => (
  <StyledDiv>
    <Jumbotron>
      <Container>
        <h1>
          Welcome {name} <br />
          My Scheduling page
        </h1>
      </Container>
    </Jumbotron>
    <Container>
      <Tabs defaultActiveKey="eventTypes" id="uncontrolled-tab-example">
        <Tab eventKey="eventTypes" title="Event Types">
          <EventTypes name={name} onScheduleMeeting={onScheduleMeeting} />
        </Tab>
        <Tab eventKey="scheduleEvent" title="Scheduled Events">
          <ScheduledEvent upcoming={upcoming} />
        </Tab>
      </Tabs>
    </Container>
  </StyledDiv>
);

HomePage.propTypes = {
  onScheduleMeeting: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  upcoming: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      meeting: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};
export default HomePage;
