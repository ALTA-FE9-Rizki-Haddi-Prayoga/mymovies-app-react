import React from "react";
import "../styles/style.css";
import { Card, CardGroup, Row, Col } from "react-bootstrap";

const CardMovies = (props) => {
  return (
    <>
      <CardGroup className="Card-Movies">
        <Row className="Card-List">
          <Col className="List-Movies">
            <Card className="Card-Body">
              <Card.Img src={props.src} onClick={props.onClick} />
              <Card.Body className="TitleMovies">
                <Card.Link onClick={props.onClick}>
                  <h3 style={{ color: "white" }}>{props.title}</h3>
                </Card.Link>
                <button onClick={props.onClickFavorite} className="Btn-Favorite" variant="primary">
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
