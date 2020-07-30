import axios from "axios";

export function login(postObj, history) {
  axios
    .post("https://water-my-pants.herokuapp.com/api/auth/login", postObj)
    .then(async (response) => {
      await localStorage.setItem("token", response.data.token);
      history.push("/plants");
    })
    .catch((error) => {
      console.log("Error happend with the post request", error);
    });
}
