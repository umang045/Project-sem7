import axios from "axios";
import { base_url } from "../../util/base_url";

const getAllVibhag = async () => {
  const response = await axios.get(`${base_url}vibhag/`);
  if (response) return response.data;
};

const addVibhag = async (data) => {
  // console.log(data); 
  const response = await axios.post(`${base_url}vibhag/addvibhag`,data);
  if (response) return response.data;
};

const delVibhag = async (id) => {
  console.log(id); 
  const response = await axios.delete(`${base_url}vibhag/${id}`);
  if (response) return response.data;
};

const vibhagService = {
  addVibhag,
  getAllVibhag,
  delVibhag
};

export default vibhagService;
