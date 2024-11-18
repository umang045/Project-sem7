import axios from "axios";
import { base_url } from "../../util/base_url";

//add floors
const addFloors = async (data) => {
  const response = await axios.post(`${base_url}vrgikrn/`, data);
  if (response) return response.data;
};

//add information in floors
const addInfo = async (data) => {
  const response = await axios.post(`${base_url}vrgikrn/addinfo`, data);
  if (response) return response.data;
};

//get all information
const getInfoByVibhag = async () => {
  const response = await axios.get(`${base_url}vrgikrn/`);
  if (response) return response.data;
};

//get floors
const getFloors = async (id) => {
  // console.log(id);
  const response = await axios.get(`${base_url}vrgikrn/floors/${id}`);
  // console.log(response.data);
  if (response) return response.data;
};

//del floors
const delFloorsInfo = async (data) => {
  // console.log(data);
  const response = await axios.post(`${base_url}vrgikrn/delfloorinfo/`, data);
  console.log(response.data);
  if (response) return response.data;
};

const getVargi = async (data) => {
  // console.log(data);
  const response = await axios.get(`${base_url}vrgikrn/getdata/${data}`);
  // console.log(response.data);
  if (response) return response.data;
};



const vargikrnService = {
  addFloors,
  addInfo,
  getInfoByVibhag,
  getFloors,
  delFloorsInfo,
  getVargi
};

export default vargikrnService;
