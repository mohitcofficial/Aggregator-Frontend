import axios from "axios";
import { USER_URLs } from "./http.services";

export default {
  sendMail: async function (body) {
    const { data } = await axios.post(USER_URLs.sendMail, body);
    return data;
  },
};
