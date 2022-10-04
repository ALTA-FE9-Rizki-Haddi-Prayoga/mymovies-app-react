import React from "react";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import CardMovies from "../components/CardMovies";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <header className="Header-Movies container">
          <h2>NOW SHOWING MOVIES</h2>
        </header>
        <div className="container">
          <CardMovies/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
