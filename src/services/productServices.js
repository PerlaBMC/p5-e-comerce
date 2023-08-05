import axios from "axios";

const URL_ROOT = `https://p5-backend-e-comerce.onrender.com/api`;
//const URL_ROOT = "http://localhost:4001/api";

const getProductsService = async () => {
  const response = await axios.get(`${URL_ROOT}/productsclass`);
  return response;
};

const getProductService = async (id) => {
  const response = await axios.get(`${URL_ROOT}/productsclass/${id}`);
  return response;
};

const getCollectionsService = async () => {
  const response = await axios.get(`${URL_ROOT}/collections`);
  return response;
}; 

const getCollectionService = async (id) => {
  const response = await axios.get(`${URL_ROOT}/collections/${id}`); 
  return response;
};

const getCollections2Service = async () => {
  const response = await axios.get(`${URL_ROOT}/collections2`);
  return response;
}; 

const getCollection2Service = async (id) => {
  const response = await axios.get(`${URL_ROOT}/collections2/${id}`); 
  return response;
};

const getCollections3Service = async () => {
  const response = await axios.get(`${URL_ROOT}/collections3`);
  return response;
}; 

const getCollection3Service = async (id) => {
  const response = await axios.get(`${URL_ROOT}/collections3/${id}`); 
  return response;
};

export { 
  getProductsService, 
  getProductService, 
  getCollectionsService, 
  getCollectionService,
  getCollections2Service,
  getCollection2Service,
  getCollections3Service,
  getCollection3Service
};
