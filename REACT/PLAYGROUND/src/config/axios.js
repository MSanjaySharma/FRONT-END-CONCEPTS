import Axios from "axios";

//DUMMY JSON DATA API
const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default axios;
