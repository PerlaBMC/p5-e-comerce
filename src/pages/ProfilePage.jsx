import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div style={{backgroundImage: "linear-gradient(to right, WhiteSmoke , WhiteSmoke, Thistle)"}}>
    <h1 style={{  
        color: "DarkOrchid",
        textAlign: "center",
        fontSyle: "monospace",
        letterSpacing: "5px",
        textShadow: "2px 2px GreenYellow",
        paddingTop: "30px",
       }} >"Bienvenid@ a tu perfil" </h1> 
      <main className="row">
        <article className="col">
          <h2  style={{  
       color: "DarkOrchid", 
       textAlign: "center",
       textShadow: "2px 2px 5px  pink",
       paddingTop: "25px",
       fontFamily: "Georgia",
       paddingBottom: "20px"
       }} >{user.user_name}</h2>
       <button style={{height: 35,
      width: 300,
      backgroundColor: "#D8BFD8",
      cursor: "pointer",
      borderRadius: "9px",
      borderStyle: "none",
      marginLeft: "600px",
      }}>
        <a href= "/products" style={{color: "Indigo"}}>
        Conoce lo nuevo de la galería
        </a>
       </button>
        </article>
        <div className= "row" style={{display: "flex", marginLeft: "150px"}}>
          <div className="col" style={{width: "360px", paddingTop: "20px", margin: "50px", textAlign: "center", backgroundColor: "rgba(208, 184, 202, 0.6)", borderRadius: "30px", fontSize: "20px"}}>
          <p>Este es tu espacio recuerda que todos nuestros productos se realizan con pinturas textiles. Tus prendas pueden lavarse en máquina sin miedo a que pierda color.
          Las playeras blancas son 100% algodón peinado, lo que las hace más suaves y holgadas. Llevan un par de centímetros extra ya que tienden a encoger en la primer lavada.
          Las playeras de color son 100% algodón, no encogen.
          Las sudaderas son 50% algodón/50% felpa.
          Todo es HECHO EN MÉXICO.</p>
          </div>
          <div className="col">
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690949668/11_wk6sie.png" alt="helga" style={{height: "350px"}} />
        </div>
      </div>
      </main>
  
      </div>
    </>
  );
};

export default ProfilePage;
