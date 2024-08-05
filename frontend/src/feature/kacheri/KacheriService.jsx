import axios from "axios";
import { base_url } from "../../util/base_url";

const getKacheri = async () => {
  const response = await axios.get(`${base_url}kacheri/`);
  if (response) return response.data;
};

const addKacheri = async (data) => {
  const response = await axios.post(`${base_url}kacheri/`, data);
  if (response) return response.data;
};

const kacheriService = {
  getKacheri,
  addKacheri,
};

export default kacheriService;
