import axios from "axios";

export const fetch = () => {
  return axios
    .get("http://localhost:5000/api/colors")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};