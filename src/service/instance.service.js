import axios from "axios";

// Your API base URL
const baseURL = "https://api.smartpath.id";
const authToken = localStorage.getItem("token");
console.log(authToken);

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  },
});

export default instance;
