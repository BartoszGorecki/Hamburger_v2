import axios from "axios";

const axiosFirebase = axios.create({
  baseURL: "https://project-hamburger-v2.firebaseio.com/",
  headers: { "Access-Control-Allow-Origin": "*" }
});

export default axiosFirebase;
