import axios from "axios";

const Axios = axios.create({
  // baseURL: "https://edu-toys-hub-server.vercel.app",
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
