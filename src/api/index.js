import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

const baseUrl = axios.create({ baseURL: REACT_APP_SERVER_URL });

export const getUser = async (email) => {
  try {
    const { data } = await baseUrl.get(`/users?email=${email}`);
    if (data.length === 0) throw new Error(404);
    return { ...data };
  } catch (error) {
    console.error(error);
  }
};
