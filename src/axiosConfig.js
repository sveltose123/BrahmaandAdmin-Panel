import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.7.173.138:9000",
});
// baseURL: "http://65.0.183.149:8000/admin",
export default instance;
