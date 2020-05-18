import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
export const UpcomingTab = ({ upcoming }) => (
  <div>
    <br />
    {upcoming.map((eachDay) => (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colspan="2">{eachDay.date}</th>
          </tr>
        </thead>
        <tbody>
          {eachDay.meeting.map((timings) => (
            <tr>
              <td>{timings.time}</td>
              <td>
                {timings.name} <br />
                {timings.type}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ))}
  </div>
);

UpcomingTab.propTypes = {
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
export default UpcomingTab;
