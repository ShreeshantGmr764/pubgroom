import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import About from "./pages/About";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ContactComponent from "./components/ContactComponent";
import Privacy from "./pages/Privacy";
import BackButtonHandler from "./components/BackButtonHandler";
import Blogs from "./pages/Blogs";
import BlogsDetail from "./pages/BlogsDetail";

const App = () => {
  return (
    <>
      <BackButtonHandler /> {/* ✅ Handles back/esc behavior */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactUs" element={<ContactComponent />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogsDetail />} /> {/* ✅ Dynamic Route */}
      </Routes>
    </>
  );
};

export default App;
