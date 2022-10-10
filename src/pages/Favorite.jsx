import React from "react";
import { WithRouter } from "../utils/Navigation";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import CardMovies from "../components/CardMovies";
import Footer from "../components/Footer";

const Favorite = () => {
  return (
    <>
      <div>
        <Navbar />
        <header className="Header-Movies container">
          <h2>YOUR FAVORITE MOVIES</h2>
        </header>
        <div className="container">
          <CardMovies/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default WithRouter(Favorite);
