import React from 'react'
import { Row, Col } from 'react-bootstrap'

const MoviesDetail = (props) => {
    return (
      <div className="container Body Movie-Body">
        <Row>
          <Col className="Img-Movie" xxl={5} lg={6} md={12}>
            <img src={props.src} alt="MovieImage"/>
          </Col>
          <Col className="Movie-Detail" xxl={7} lg={6} md={12}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Rating Movie: {props.rating} / 10</p>
            <p>Popularity: {props.popular}</p>
            <p>Release Date: {props.date}</p>
          </Col>
        </Row>
      </div>
    )
  }

export default MoviesDetail;