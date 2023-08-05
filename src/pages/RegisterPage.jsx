import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const initForm = {
  user_name: "",
  password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);

  const { user, registrarUsuario } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await registrarUsuario(form);

    setForm(initForm);

  };

  return (
    <>
      <header className="row col">
        <h1 style={{  
       color: "MediumAquaMarine", 
       textAlign: "center",
       textShadow: "2px 2px 5px  LightGreen",
       paddingTop: "15px",
       fontFamily: "Georgia"
       }}>¡¡ Crea tu cuenta !!</h1>
      </header>
      <main className="row">
        <article className="col">
          <form onSubmit={handleSubmit} className="container" style={{}}>
            <div className="mb-3 ">
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
            <button type="submit" className="btn" style={{backgroundColor: "MediumAquaMarine", color: "white"}}>
              Crear cuenta
            </button>
          </form>
        </article>
      </main>
      <div id="carouselExample" class="carousel slide">
       <div class="carousel-inner">
         <div class="carousel-item active">
         <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1690943401/nuevo_tama%C3%B1o_gxyoon.png" class="d-block w-100"   alt="street fashion"/>
        </div>
      </div>
     </div>


    </>
  );
};

export default RegisterPage;
