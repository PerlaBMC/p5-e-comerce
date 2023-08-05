import { useReducer, useCallback } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import {
  getProductsService,
  getProductService,
  getCollectionsService,
  getCollectionService,
  getCollections2Service,
  getCollection2Service, 
  getCollections3Service,
  getCollection3Service, 
} from "../services/productServices";

const initialState = {
  products: [],
  product: {},
  cart: [],
};


const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const getProducts = useCallback(async () => {
    const response = await getProductsService();

    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: response.data.data,
    });
  }, []);


  const getProduct = useCallback(async (id) => {
    const response = await getProductService(id);

    dispatch({
      type: "OBTENER_PRODUCTO",
      payload: response.data.data,
    });
  }, []);


  const addProduct = async (id) => {

    try {
      const response = await getProductService(id);

      dispatch({
        type: "AGREGAR_PRODUCTO",
        payload: response.data.data,
      });

      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      //console.log(error)
      Swal.fire({
        icon: "error",
        title: "Error en la peticion",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

//-------------------------------------------------------------------  
  const getCollections = useCallback(async(id) => {
    const response = await getCollectionsService(id);

    dispatch ({
      type: "OBTENER_PRODUCTOS",
      payload: response.data.data,
    }); 
  }, []);

  
  const getCollection = useCallback (async(id) => {
   const response = await getCollectionService(id);

    dispatch ({
      type: "OBTENER_PRODUCTO",
      payload: response.data.data,
    });
  }, []);
  
 
  const addCollection = async (id) => {
    try {
      const response = await getCollectionService(id);

      dispatch({
        type: "AGREGAR_PRODUCTO",
        payload: response.data.data,
      });
      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      //console.log(error)
      Swal.fire({
        icon: "error",
        title: "Error en la peticion",
        showConfirmButton: false,
        timer: 2000,
      });    
    }
  }

//-------------------------------------------------------------------
  const getCollections2 = useCallback(async(id) => {
    const response = await getCollections2Service(id);

    dispatch ({
      type: "OBTENER_PRODUCTOS",
      payload: response.data.data,
    }); 
  }, []);

  const getCollection2 = useCallback (async(id) => {
    const response = await getCollection2Service(id);

    dispatch ({
      type: "OBTENER_PRODUCTO",
      payload: response.data.data,
    });
  }, []);
  
  const addCollection2 = async (id) => {
    try {
      const response = await getCollection2Service(id);

      dispatch({
        type: "AGREGAR_PRODUCTO",
        payload: response.data.data,
      });
      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      //console.log(error)
      Swal.fire({
        icon: "error",
        title: "Error en la peticion",
        showConfirmButton: false,
        timer: 2000,
      });    
    }
  }

//-------------------------------------------------------------------
  const getCollections3 = useCallback(async(id) => {
    const response = await getCollections3Service(id);

    dispatch ({
      type: "OBTENER_PRODUCTOS",
      payload: response.data.data,
    }); 
  }, []);

  const getCollection3 = useCallback (async(id) => {
    const response = await getCollection3Service(id);

    dispatch ({
      type: "OBTENER_PRODUCTO",
      payload: response.data.data,
    });
  }, []);
  
  const addCollection3 = async (id) => {
    try {
      const response = await getCollection3Service(id);

      dispatch({
        type: "AGREGAR_PRODUCTO",
        payload: response.data.data,
      });
      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      //console.log(error)
      Swal.fire({
        icon: "error",
        title: "Error en la peticion",
        showConfirmButton: false,
        timer: 2000,
      });    
    }
  }


//-------------------------------------------------------------------

  const deleteCartProduct = (id) => {
    try {
      dispatch({
        type: "ELIMINAR_PRODUCTO",
        payload: id,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar el producto del carrito",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const vaciarCarrito = () => {
    dispatch({
      type: "VACIAR_CARRITO",
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        product: globalState.product,
        getProducts,
        getProduct,
        addProduct,
        getCollections,
        getCollection,
        addCollection,
        getCollections2,
        getCollection2,
        addCollection2,
        getCollections3,
        getCollection3,
        addCollection3,
        cart: globalState.cart,
        deleteCartProduct,
        vaciarCarrito,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductState.propTypes = {
  children: PropTypes.node,
};

export default ProductState;
