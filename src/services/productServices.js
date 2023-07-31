import axios from "axios";

const URL_ROOT = `https://p5-backend-e-comerce.onrender.com/api/productsclass`;
//const URL_ROOT = "http://localhost:4001/api/productsclass";

const getProductsService = async () => {
  const response = await axios.get(`${URL_ROOT}`);
  return response;
};

const getProductService = async (id) => {
  const response = await axios.get(`${URL_ROOT}/${id}`);
  return response;
};

export { getProductsService, getProductService };
