let allInformation = {
  type: "",
  date: "",
  timeSlot: "11.30am - 12.00pm",
};
const meetingSchedule = {
  isLogin_api_loaded: false,
  loggedInUser: "",
  showTimeSlot: false,
  showStep1: true,
  showStep2: false,
  showStep3: false,
  allInfo: allInformation,
};

const reducer = (state = meetingSchedule, action) => {
  if (action.type === "LOGGED_IN_USER") {
    return {
      ...state,
      loggedInUser: action.payload,
    };
  }
  if (action.type === "LOGIN_API_LOADED") {
    return {
      ...state,
      isLogin_api_loaded: action.payload,
    };
  }
  if (action.type === "GOTO_STEP_2") {
    state.allInfo.type = action.payload;
    return {
      ...state,
      showStep1: false,
      showStep2: true,
    };
  }
  if (action.type === "SET_DATE") {
    state.allInfo.date = action.payload;
    return {
      ...state,
    };
  }
  if (action.type === "SET_TYPE") {
    state.allInfo.type = action.payload;
    return {
      ...state,
    };
  }
  if (action.type === "SET_SELECTED_TIME") {
    state.allInfo.timeSlot = action.payload;
    return {
      ...state,
    };
  }
  if (action.type === "SHOW_TIME_SLOTS") {
    return {
      ...state,
      showTimeSlot: true,
    };
  }
  if (action.type === "GOTO_STEP_3") {
    return {
      ...state,
      showStep1: false,
      showStep2: false,
      showStep3: true,
    };
  }
  if (action.type === "GOTO_STEP_4") {
    return {
      ...state,
      showStep1: false,
      showStep2: false,
      showStep3: false,
    };
  }
  return state;
};
export default reducer;
