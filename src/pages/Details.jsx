import React, {useContext} from "react";
import { WithRouter } from "../utils/Navigation";
import { useLocation } from "react-router-dom";
import FavoriteContext from "../utils/FavoriteContext";

import "../styles/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MoviesDetail from "../components/MoviesDetail";

const Details = () => {
  const location = useLocation();
  const { addToFavorites } = useContext(FavoriteContext);

  return (
    <>
      <div className="Body">
        <Navbar />
        <div className="mt-5">
          <MoviesDetail
            title={location.state.title}
            src={location.state.src}
            onClickFavorite={() => addToFavorites()}
            date={location.state.date}
            description={location.state.description}
            rating={location.state.rating}
            popular={location.state.popular}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WithRouter(Details);
