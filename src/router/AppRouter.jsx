import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PublicNavbar from "../components/PublicNavbar";

import HomePage from "../pages/HomePage";
//import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import CollectionPatakiPage from "../pages/CollectionPatakiPage";
import ProductPataki from "../pages/ProductPatakiPage";
import CollectionLisaPage from "../pages/CollectionLisaPage";
import ProductLisa from "../pages/ProductLisaPage";
import CollectionAngelicaPage from "../pages/CollectionAngelicaPage";
import ProductAngelica from "../pages/ProductAngelicaPage"

import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Footer from "../components/Footer";


const AppRouter = () => {
  const { renewToken, user } = useContext(AuthContext);

  useEffect(() => {
    renewToken();
  }, [renewToken]);

  return (
    <Router>
      <PublicNavbar />
      <div className="container-flex">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/collectionPataki" element={<CollectionPatakiPage />} />
          <Route path="/productPataki/:id" element={<ProductPataki />} />
          <Route path="/collectionLisa" element={<CollectionLisaPage />} />
          <Route path="/productLisa/:id" element={<ProductLisa />} />
          <Route path="/collectionAngelica" element={<CollectionAngelicaPage />} />
          <Route path="/productAngelica/:id" element={<ProductAngelica />} />
          
          
          <Route path="/cart" element={<CartPage />} />

          {user.user_name ? (
            <>
              <Route path="/profile" element={<ProfilePage />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
