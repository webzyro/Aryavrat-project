import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
