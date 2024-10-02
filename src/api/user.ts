import axios, { AxiosError } from "axios";

import { ErrorResponse } from "../types/ErrorResponse";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const USER_API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchUsers = async () => {
  try {
    const { data } = await USER_API.get("/users");
    return data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response && axiosError.response.data) {
      const errorMessage = axiosError.response.data.error;
      throw new Error(errorMessage);
    } else {
      throw new Error(axiosError.message);
    }
  }
};

export { fetchUsers };
