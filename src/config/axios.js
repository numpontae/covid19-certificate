import axios from "axios";
axios.defaults.baseURL = "http://10.104.10.85:30063";
// axios.defaults.baseURL = "http://127.0.0.1:30020";
// axios.defaults.baseURL = "https://phr.samitivejhospitals.com:3000";
axios.defaults.headers.common = {
  "Content-Type": "application/json"
};

export default axios;
