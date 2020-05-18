import React from "react";
import { Step1 } from "../components/scheduleMeeting/Step1";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../actions/scheduleMeetAction";
import moment from "moment-timezone";
const axios = require("axios");

export class ScheduleMeetingController extends React.Component {
  static defaultProps = {
    timeLabels: [],
  };
  backToHome = () => {
    this.props.history.push("/home");
  };
  handleSubmit = () => {
    const { setShowStep4 } = this.props;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setShowStep4();
  };
  onTypeSelectionButtonClick = (button) => {
    const { showCalenderStep, setType } = this.props;
    showCalenderStep();
    setType(button.target.value);
  };
  onTimeSelectionButtonClick = (button) => {
    let selectedTime = button.target.value;
    const { timeLabels, setSelectedTimeSlot, setShowStep3 } = this.props;
    const nextTimeIndex = timeLabels.indexOf(selectedTime) + 1;
    selectedTime = selectedTime.concat(" - ").concat(timeLabels[nextTimeIndex]);
    setSelectedTimeSlot(selectedTime);
    setShowStep3(true);
  };
  onDateSelection = (date) => {
    const { setShowTimeSlots, setDate } = this.props;
    setDate(moment(date).format("ll"));
    setShowTimeSlots(true);
    this.getTimeSlots();
  };
  getTimeSlots = () => {
    const {
      timeLabels,
      allInfo: { type },
    } = this.props;
    const interval = type === "Technical call" ? 60 : 30;
    const periodsInADay = moment.duration(1, "day").as("m");
    const startTimeMoment = moment("00:00", "hh:mm");
    for (let i = 0; i < periodsInADay; i += interval) {
      startTimeMoment.add(i === 0 ? 0 : interval, "m");
      timeLabels.push(startTimeMoment.format("hh:mm A"));
    }
  };
  render() {
    const {
      showStep1,
      showStep2,
      showStep3,
      showTimeSlot,
      timeLabels,
      name,
      allInfo: { type, date, timeSlot },
    } = this.props;
    const interval = (type === "Technical call" ? "60" : "30").concat(" min");
    return (
      <div>
        <Step1
          onTypeSelectionButtonClick={this.onTypeSelectionButtonClick}
          onDateSelection={this.onDateSelection}
          onTimeSelectionButtonClick={this.onTimeSelectionButtonClick}
          showTimeSlot={showTimeSlot}
          showStep1={showStep1}
          showStep2={showStep2}
          showStep3={showStep3}
          type={type}
          timeSlot={timeSlot}
          date={date}
          name={name}
          interval={interval}
          timeLabels={timeLabels}
          handleSubmit={this.handleSubmit}
          backToHome={this.backToHome}
        ></Step1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showStep1: state.showStep1,
    showStep2: state.showStep2,
    showStep3: state.showStep3,
    showTimeSlot: state.showTimeSlot,
    allInfo: state.allInfo,
    name: state.loggedInUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showCalenderStep: (name) => {
      dispatch(action("GOTO_STEP_2", name));
    },
    setShowTimeSlots: (showTimeSlot) => {
      dispatch(action("SHOW_TIME_SLOTS", showTimeSlot));
    },
    setType: (type) => {
      dispatch(action("SET_TYPE", type));
    },
    setDate: (date) => {
      dispatch(action("SET_DATE", date));
    },
    setSelectedTimeSlot: (selectedTime) => {
      dispatch(action("SET_SELECTED_TIME", selectedTime));
    },
    setShowStep3: () => {
      dispatch(action("GOTO_STEP_3", ""));
    },
    setShowStep4: () => {
      dispatch(action("GOTO_STEP_4", ""));
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleMeetingController)
);
