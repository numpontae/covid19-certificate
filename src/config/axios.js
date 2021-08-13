import axios from "axios";
axios.defaults.baseURL = "http://10.104.10.85:30063";
// axios.defaults.baseURL = "http://192.168.1.104:30020";
axios.defaults.headers.common = {
  "Content-Type": "application/json"
};

export default axios;
