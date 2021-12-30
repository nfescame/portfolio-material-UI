import axios from "axios";

const api = axios.create({
  baseURL: "https://express-nodejs-template.herokuapp.com",
});

export default api;
