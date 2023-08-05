import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductLisa = () => {
  const { getCollection2, product} = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    getCollection2(id);
}, [getCollection2, id]);

 
  return (
    <>
      <section className="row">
        <article className="col">
          {product && (
            <div className=" container card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="card-title" style={{ fontFamily: "'Courier New', monospace", textAlign: "center", textShadow: "2px 2px GreenYellow", color: "DarkOrchid", paddingTop: "40px" }}>{product.name}</h1> <br />
                    <h5 className="card-text" style={{fontFamily: "'Courier New', monospace", fontSize: "25px", textAlign: "center", color: "DarkOrchid"}}>" {product.description} "</h5> <br />
                    <h3 className="card-text" style={{fontFamily: "'Courier New', monospace", fontSize: "25px", textAlign: "center", color:"plum"}}>
                      <small className="text-body-secondary">
                      $  {product.price} MXN
                      </small>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </section>
    </>
  );
};

export default ProductLisa;
