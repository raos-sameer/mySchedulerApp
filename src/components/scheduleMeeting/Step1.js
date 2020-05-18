import React from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import PropTypes from "prop-types";
import { StyledDiv, StyledButton } from "../../styles";
import { Container, Jumbotron } from "react-bootstrap";

export const Step1 = ({
  onTypeSelectionButtonClick,
  onTimeSelectionButtonClick,
  showStep1,
  showStep2,
  showStep3,
  onDateSelection,
  showTimeSlot,
  type,
  date,
  timeSlot,
  timeLabels,
  name,
  interval,
  handleSubmit,
  backToHome,
}) => (
  <div>
    {showStep1 && (
      <div>
        <Container>
          <StyledDiv>
            <Jumbotron style={{ maxHeight: "200px" }}>
              <Container>
                <h3>
                  {name}
                  <br />
                </h3>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Welcome to myscheduling page. <br />
                    Please follow the instructions to add an event to my
                    calender.
                  </p>
                </blockquote>
              </Container>
            </Jumbotron>
          </StyledDiv>
        </Container>
        <br />
        <Container>
          <StyledDiv>
            <StyledButton
              value={"Demo call"}
              onClick={onTypeSelectionButtonClick.bind(this)}
            >
              Demo call
            </StyledButton>
            <br />
            <StyledButton
              value={"Technical call"}
              onClick={onTypeSelectionButtonClick.bind(this)}
            >
              Technical call
            </StyledButton>
            <br />
            <StyledButton
              value={"Account review"}
              onClick={onTypeSelectionButtonClick.bind(this)}
            >
              Account Review
            </StyledButton>
          </StyledDiv>
        </Container>
      </div>
    )}

    <div>
      {showStep2 && (
        <Step2
          onDateSelection={onDateSelection}
          showTimeSlot={showTimeSlot}
          onTimeSelectionButtonClick={onTimeSelectionButtonClick}
          timeLabels={timeLabels}
          name={name}
          type={type}
          date={date}
          interval={interval}
          backToHome={backToHome}
        ></Step2>
      )}
    </div>

    <div>
      {showStep3 && (
        <Step3
          type={type}
          timeSlot={timeSlot}
          date={date}
          name={name}
          handleSubmit={handleSubmit}
        ></Step3>
      )}
    </div>

    <div>
      {!showStep1 && !showStep2 && !showStep3 && (
        <Step4
          type={type}
          timeSlot={timeSlot}
          date={date}
          name={name}
          backToHome={backToHome}
        ></Step4>
      )}
    </div>
  </div>
);

Step1.propTypes = {
  onTypeSelectionButtonClick: PropTypes.func.isRequired,
  onDateSelection: PropTypes.func.isRequired,
  onTimeSelectionButtonClick: PropTypes.func.isRequired,
  showStep1: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
  showStep3: PropTypes.bool.isRequired,
  showTimeSlot: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timeSlot: PropTypes.string.isRequired,
  interval: PropTypes.string.isRequired,
  timeLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  backToHome: PropTypes.func.isRequired,
};
export default Step1;
