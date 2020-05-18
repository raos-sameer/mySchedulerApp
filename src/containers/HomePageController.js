import React from "react";
import { HomePage } from "../components/homePage/HomePage";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
export class HomePageController extends React.Component {
  state = {
    upcoming: [],
  };
  onScheduleMeeting = () => {
    this.props.history.push("/schedule");
  };
  async componentDidMount() {
    // const data = await fetch('http://www.mocky.io/v2/5ec0c3222f000054004c8672');
    // const result = await data.json();
    this.setState({
      ...this.state,
      upcoming: [
        {
          date: "23 Apr 2021",
          meeting: [
            {
              time: "9:45am - 10:45am",
              type: "Demo call",
              name: "Rupert Grint",
            },
            {
              time: "12:45pm - 1:45am",
              type: "Technical call",
              name: "Arjun Singh",
            },
            {
              time: "3:45 - 4:45am",
              type: "Account Review",
              name: "Ajay Singh",
            },
          ],
        },
        {
          date: "24 Apr 2021",
          meeting: [
            {
              time: "9:45am - 10:45am",
              type: "Demo call",
              name: "Rupert Grint",
            },
            {
              time: "12:45pm - 1:45am",
              type: "Technical call",
              name: "Arjun Singh",
            },
            {
              time: "3:45 - 4:45am",
              type: "Account Review",
              name: "Ajay Singh",
            },
          ],
        },
      ],
    });
  }
  render() {
    const { name } = this.props;
    return (
      <HomePage
        upcoming={this.state.upcoming}
        name={name}
        onScheduleMeeting={this.onScheduleMeeting}
      ></HomePage>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.loggedInUser,
  };
};
export default withRouter(connect(mapStateToProps)(HomePageController));
