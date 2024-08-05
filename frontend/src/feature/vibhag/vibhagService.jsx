import axios from "axios";
import { base_url } from "../../util/base_url";

const getAllVibhag = async () => {
  const response = await axios.get(`${base_url}vibhag/`);
  if (response) return response.data;
};

const addVibhag = async (data) => {
  const response = await axios.post(`${base_url}vibhag/addvibhag`,data);
  if (response) return response.data;
};

const vibhagService = {
  addVibhag,
  getAllVibhag,
};

export default vibhagService;
