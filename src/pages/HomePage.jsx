import { NavLink } from "react-router-dom";

const HomePage = () => {
  const bodyStyle = {
    backgroundImage: "linear-gradient(to right, WhiteSmoke , WhiteSmoke, Thistle)"
    }
    
    const carruselStyle = {
        width: 600,
        height: 550,
     }
    
    
     const presentName = {
    color: "DarkOrchid",
    textAlign: "center",
    fontSyle: "monospace",
    letterSpacing: "5px",
    textShadow: "2px 2px GreenYellow",
    paddingTop: "80px",
    }
    
     const cardsStyle = {
     
      paddingBottom: "50px"
    }
    
    
    const buttonStyle3 = {
      height: 35,
      width: 300,
      backgroundColor: "#D8BFD8",
      cursor: "pointer",
      borderRadius: "9px",
      borderStyle: "none",
      color: "Indigo"
    }
    

  return (
  <>
  <div  style={bodyStyle}>
  <div className="container text-center">
  <div className="row">
  <div style={carruselStyle} > 
  <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689210807/2_mmfgsc.png" className="d-block w-100" alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689210740/1_u9wkny.png" className="d-block w-100" alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689210821/3_euszns.png" className="d-block w-100" alt="..." />
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

<div className='col'>
  <h1 class="font-effect-neon" style={presentName}>UNOUNOSHIRTS x LY DIEGO</h1>  <br /> 
  <p style={{textAlign: "center", fontSize: 23, fontFamily: "'Courier New', monospace"}}>
  Todas las piezas son pintadas a mano, bajo pedido, esto 
  garantiza que el producto que adquieres será pintado exclusivamente para ti. 
  El trabajo es realizado con pinturas textiles y acrílicas hechas en México. <br /><br />
  Tus prendas pueden lavarse en máquina, plancharse y seguirán luciendo fantásticas.</p>
</div>
</div>
</div>

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690943401/nuevo_tama%C3%B1o_gxyoon.png" class="d-block w-100"   alt="street fashion"/>
    </div>
</div>
</div>
<br />

<div style={cardsStyle}>
<div className="container text-center">
  <div className="row">
    <div className="col-md"> 
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690950438/Dise%C3%B1o_sin_t%C3%ADtulo_2_nbqwgw.png" className="rounded float-start" alt="Helga Patiki" width={350} />
    <button style={buttonStyle3}>
    <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
               aria-current="page"
                to="/collectionPataki"
              >
               Hey Patakii!
              </NavLink>
    </button>
    </div>
    <div className="col-md">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690949665/16_nuf7lo.png" className="rounded mx-auto d-block" alt="Lisa" width={350}/>
    <button style={buttonStyle3}>
    <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
               aria-current="page"
                to="/collectionLisa"
              >
               Lisa Simpson
              </NavLink>
    </button>
    </div>
    <div className="col-md">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690949668/19_utnxmj.png"  alt="Aneglica" width={350} />
    <button style={buttonStyle3}>
    <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
               aria-current="page"
                to="/collectionAngelica"
              >
               Angelica Pickles
              </NavLink>
    </button>
    </div>
  </div>
</div>
</div>   
</div>
   


 






</>
  );
};

export default HomePage;
