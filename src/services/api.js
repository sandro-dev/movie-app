import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "725c7effd215b604ded37bf3eea4b78b"
  }
});

export default api;
