import React from "react";
import { WithRouter } from "../utils/Navigation";
import { useLocation } from "react-router-dom";

import "../styles/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MoviesDetail from "../components/MoviesDetail";

const Details = () => {
  const location = useLocation();

  return (
    <>
      <div className="Body">
        <Navbar />
        <MoviesDetail
          title={location.state.title}
          src={location.state.src}
          date={location.state.date}
          description={location.state.description}
          rating={location.state.rating}
          popular={location.state.popular}
        />
        <Footer />
      </div>
    </>
  );
};

export default WithRouter(Details);
