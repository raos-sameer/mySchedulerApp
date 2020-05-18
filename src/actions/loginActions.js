export const login = (name) => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json();
    let emailList = [];
    let nameList = [];
    result.forEach(function (obj) {
      emailList.push(obj.email);
      nameList.push(obj.name);
    });
    const index = emailList.indexOf(name);
    const loggedInName = index > -1 ? nameList[index] : "";
    if (loggedInName !== "") {
      dispatch({ type: "LOGGED_IN_USER", payload: loggedInName });
      dispatch({ type: "LOGIN_API_LOADED", payload: true });
    }
  };
};
