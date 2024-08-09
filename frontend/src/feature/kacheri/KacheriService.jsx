import axios from "axios";
import { base_url } from "../../util/base_url";

const getKacheri = async () => {
  const response = await axios.get(`${base_url}kacheri/`);
  if (response) return response.data;
};

const addKacheri = async (data) => {
  console.log(data);

  const response = await axios.post(`${base_url}kacheri/`, data);
  if (response) return response.data;
};

const delKacheri = async (id) => {
  const response = await axios.delete(`${base_url}kacheri/${id}`);
  if (response) return response.data;
};

const updateKacheri = async (data) => {
  console.log(data.values);
  const response = await axios.put(
    `${base_url}kacheri/${data?.id}`,
    data?.values
  );
  if (response) return response.data;
};

const getOneKacheri = async (id) => {
  const response = await axios.get(`${base_url}kacheri/${id}`);
  if (response) return response.data;
};

const kacheriService = {
  getKacheri,
  addKacheri,
  delKacheri,
  updateKacheri,
  getOneKacheri,
};

export default kacheriService;
