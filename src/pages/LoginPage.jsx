import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const initForm = {
  user_name: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);

  const { user, iniciarSesion } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await iniciarSesion(form);

    setForm(initForm);
  };

  return (
    <>
    <div style={{backgroundImage: "linear-gradient(to right, WhiteSmoke , WhiteSmoke, Thistle)"}}>

      <h1 style={{  
       color: "white", 
       textAlign: "center",
       textShadow: "2px 2px 5px  purple",
       paddingTop: "15px",
       fontFamily: "Georgia",
       paddingBottom: "20px"
       }}>Ingresa a tu perfil</h1>

      <main className="container" > 
        <article className="col">
          <form onSubmit={handleSubmit} >
            <div className="mb-3">
              <label htmlFor="inputUserName" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUserName"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn" style={{backgroundColor: "plum", color: "white"}}>
              Iniciar sesion
            </button>
          </form>
        </article>
        </main>
    
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690942147/9_brx1g2.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690942146/7_kc3hui.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690942147/8_uofu8o.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    </>
  );
};

export default LoginPage;
