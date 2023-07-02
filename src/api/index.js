import axios from "axios";
const { REACT_APP_SERVER_URL } = prosses.env;

const baseUrl = axios.create({ baseURL: REACT_APP_SERVER_URL });

export const getUser = async (email) => {
  await baseUrl.get(`/users?email=${email}`);
};
