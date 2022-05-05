import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="wrapper-content">
      <Header />
      <HomePage />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
};

export default App;
