import React from "react";
import { Routes, Route } from "react-router-dom";
import { BASE_URL } from "./constants";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  console.log(BASE_URL);
  return (
    <div className="wrapper-content">
      <Header />
      {BASE_URL}
      <Routes>
        <Route path="/post/:slug" element={<PostDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<HomePage />} />
      </Routes>
      <div className="spacing"></div>
      <Footer />
    </div>
  );
};

export default App;
