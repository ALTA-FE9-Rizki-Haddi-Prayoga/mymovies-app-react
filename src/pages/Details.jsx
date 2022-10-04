import React from "react";
import "../styles/style.css";
import { Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Poster from "../assets/poster-onepiece.png"

const Details = () => {
  return (
    <>
      <div>
        <Navbar />
        <header className="Header-Movies container">
          <h2>DETAILS MOVIES</h2>
        </header>
        <div className="container Body Movie-Body">
          <Row>
            <Col className="Img-Movie" xxl={5} lg={6} md={12}>
              <img src={Poster} alt="MovieImage" />
            </Col>
            <Col className="Movie-Detail" xxl={7} lg={6} md={12}>
              <h2>One Piece: RED</h2>
              <p>Untuk pertama kalinya, Uta - penyanyi paling dicintai akan mengungkapkan dirinya kepada dunia di konser langsungnya.</p>
              <p>Rating Movie: 7.5 / 10</p>
              <p>Popularity: 12.953 billion yen or US$94.04 million</p>
              <p>Release Date: 21 September 2022</p>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Details;
