import axios from "axios";
import { BASE_PATH } from "./api";

const mainApi = ({ url, method }) => {
  return axios({ url, method });
};

export const getStructure = () => {
  return mainApi({ url: `${BASE_PATH}/` });
};
