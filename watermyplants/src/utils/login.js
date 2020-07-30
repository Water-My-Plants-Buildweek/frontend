import axios from "axios";

export function login(postObj, history) {
  axios
    .post("https://water-my-pants.herokuapp.com/api/auth/login", postObj)
    .then(async (response) => {
      await localStorage.setItem("token", response.data.token);
<<<<<<< HEAD
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("phone", response.data.phone);
      history.push('/plants');
=======
      history.push("/plants");
>>>>>>> e31853db978d9854d8edd34207df18391f428753
    })
    .catch((error) => {
      console.log("Error happend with the post request", error);
    });
}
