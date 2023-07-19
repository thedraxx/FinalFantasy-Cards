import axios from "axios";

const finalFantasyAPI = axios.create({
    baseURL: "https://www.moogleapi.com",
});

export default finalFantasyAPI;