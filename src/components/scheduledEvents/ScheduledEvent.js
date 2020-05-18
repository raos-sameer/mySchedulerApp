import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import UpcomingTab from "../scheduledEvents/UpcomingTab";
import PropTypes from "prop-types";
export const ScheduledEvents = ({ upcoming }) => (
  <div>
    <br />

    <Container>
      <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example">
        <Tab eventKey="upcoming" title="Upcoming">
          <UpcomingTab upcoming={upcoming} />
        </Tab>
      </Tabs>
    </Container>
  </div>
);
ScheduledEvents.propTypes = {
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
export default ScheduledEvents;
