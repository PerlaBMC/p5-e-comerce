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
import CollectionPage from "../pages/CollectionPage";
import Collection2Page from "../pages/Collection2Page";

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
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/collection2" element={<Collection2Page />} />
          <Route path="/products/:id" element={<ProductPage />} />
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
