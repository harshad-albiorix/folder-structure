import axios from "axios";
import { BASE_PATH } from "./api";

const mainApi = ({ url, method, data }) => {
  return axios({ url, method, data });
};

export const createOnRoot = ({ data }) => {
  return mainApi({ url: `${BASE_PATH}/initialize-root`, method: "post", data });
};

export const createStep = ({ data }) => {
  return mainApi({ url: `${BASE_PATH}/`, method: "post", data });
};

export const deleteStep = ({ id }) => {
  return mainApi({ url: `${BASE_PATH}/${id}`, method: "delete" });
};
