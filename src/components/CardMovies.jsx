import React from "react";
import "../styles/style.css";
import Poster from "../assets/poster-onepiece.png"
import { Card, CardGroup, Row, Col } from "react-bootstrap";

const CardMovies = () => {
  return (
    <>
      <CardGroup className="Card-Movies">
        <Row className="Card-List">
          <Col className="List-Movies">
            <Card className="Card-Body">
              <Card.Img src={Poster} />
              <Card.Body className="TitleMovies">
                <Card.Link>
                  <h3 style={{color: "white"}}>One Piece: RED</h3>
                </Card.Link>
                <button
                  className="Btn-Favorite"
                  variant="primary"
                >
                  ADD TO FAVORITE
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </>
  );
};

export default CardMovies;
