import React, { useState, useEffect } from "react";
import { WithRouter } from "../utils/Navigation";
import { useNavigate } from "react-router-dom";

import "../styles/style.css";
import Navbar from "../components/Navbar";
import CardMovies from "../components/CardMovies";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=id-US`
      )
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  const detailPage = (item) => {
    navigate("/details", {
      state: {
        title: item.title,
        date: item.release_date,
        src: `https://image.tmdb.org/t/p/original` + item.poster_path,
        description: item.overview,
        rating: item.vote_average,
        popular: item.popularity,
      },
    });
  };

  return (
    <>
      <div>
        <Navbar />
        <header className="Header-Movies container">
          <h2>NOW SHOWING MOVIES</h2>
        </header>
        <div
          className="container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {movie.map((data, id) => {
            return (
              <div key={id}>
                <CardMovies
                  src={`https://image.tmdb.org/t/p/original` + data.poster_path}
                  title={data.original_title}
                  date={data.release_date}
                  description={data.overview}
                  rating={data.vote_average}
                  popular={data.popularity}
                  onClick={() => detailPage(data)}
                />
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WithRouter(Home);
