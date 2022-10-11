import React, { Fragment, useState, useEffect, useContext } from "react";
import { WithRouter } from "../utils/Navigation";
import { useNavigate } from "react-router-dom";

import "../styles/style.css";
import Navbar from "../components/Navbar";
import CardMovies from "../components/CardMovies";
import Footer from "../components/Footer";
import axios from "axios";
import { Button } from "react-bootstrap";
import FavoriteContext from "../utils/FavoriteContext";

const Home = () => {
  const navigate = useNavigate();
  const { addToFavorites } = useContext(FavoriteContext);
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  const getMovie = async (page) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=id-US&page=${page}`
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
  }, [page]);

  const detailPage = (item) => {
    navigate(`/details`, {
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

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
    getMovie(page)
  };

  const nextPage = () => {
    setPage(page + 1);
    getMovie(page);
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
                  onClickFavorite={() => addToFavorites(data)}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-end">
          <Button style={{backgroundColor: '#556fe5', border: 'none'}} onClick={(value) => previousPage(value)}>Previous Page</Button>
          <Button style={{backgroundColor: '#556fe5', border: 'none'}} className="mx-5" onClick={(value) => nextPage(value)}>Next Page</Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WithRouter(Home);
