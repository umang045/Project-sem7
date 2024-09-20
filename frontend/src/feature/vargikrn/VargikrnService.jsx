import axios from "axios";
import { base_url } from "../../util/base_url";

const addFloors = async (data) => {
  const response = await axios.post(`${base_url}vrgikrn/`, data);
  if (response) return response.data;
};

const addInfo = async (data) => {
  const response = await axios.post(`${base_url}vrgikrn/addinfo`, data);
  if (response) return response.data;
};

const getInfoByVibhag = async () => {
  const response = await axios.get(`${base_url}vrgikrn/`, );
  if (response) return response.data;
};

const vargikrnService = {
  addFloors,
  addInfo,
  getInfoByVibhag
};

export default vargikrnService;
