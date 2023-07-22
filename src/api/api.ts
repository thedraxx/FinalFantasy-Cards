import axios from "axios";

export const handleClientAPI = axios.create({
  baseURL: "/api",
});

export default handleClientAPI;
