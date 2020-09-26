import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

api.interceptors.request.use(value => {
  // TODO: set Authentication header

  return value;
});

export { api };
