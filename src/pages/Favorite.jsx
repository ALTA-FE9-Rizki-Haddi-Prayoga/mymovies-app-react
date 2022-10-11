import React, { Fragment, useContext } from "react";
import { WithRouter } from "../utils/Navigation";
import FavoriteContext from "../utils/FavoriteContext";

import "../styles/style.css";
import Navbar from "../components/Navbar";
import CardMovies from "../components/CardMovies";
import Footer from "../components/Footer";

const Favorite = () => {
  const { favMovies } = useContext(FavoriteContext);

  return (
    <>
      <div>
        <Navbar />
        <header className="Header-Movies container">
          <h2>YOUR FAVORITE MOVIES</h2>
        </header>
        <div
          className="container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {favMovies.map((item) => (
            <div key={item.id}>
              <CardMovies
                src={`https://image.tmdb.org/t/p/original` + item.item.poster_path}
                title={item.item.original_title}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WithRouter(Favorite);
