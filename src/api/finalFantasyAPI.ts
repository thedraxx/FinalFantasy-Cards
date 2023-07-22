import axios from "axios";

const finalFantasyAPI = axios.create({
    baseURL: "https://www.moogleapi.com/api/v1",
});

export default finalFantasyAPI;