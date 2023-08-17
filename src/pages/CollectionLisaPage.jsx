//Colección individual Lisa S

import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

const CollectionLisaPage = () => {
    const { getCollections2, products, addCollection2 } = useContext(ProductContext);

    const handleAddProduct = (id) => {
        addCollection2(id);
    };
  
    useEffect(() => {
      getCollections2();
    }, [getCollections2]);
  
    return (
      
      <>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{height:"400px"}}
                />
                <div className="card-body">
                  <h4 className="card-title" style={{ fontFamily: "'Courier New', monospace", textAlign: "center", }}>{product.name}</h4>
                  <p className="card-text" style={{color: "DarkOrchid",textShadow: "2px 2px GreenYellow", fontFamily: "'Courier New', monospace", fontSize: "25px", textAlign: "center"}}>$ {product.price} MXN</p>
  
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-lg"
                      onClick={() => handleAddProduct(product.id)}
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16" >
                      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                      </svg>
                    </button>
                    <Link
                      to={`/productLisa/${product.id}`}
                      className="btn btn-lg"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-postcard-heart" viewBox="0 0 16 16">
                    <path d="M8 4.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622ZM2.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"/>
                    <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z"/>
                    </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

export default CollectionLisaPage