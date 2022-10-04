import React from 'react'
import "../styles/style.css";
import { Row } from "react-bootstrap";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="Footer-Movies container-fluid">
    <Row>
      <hr className="container-fluid text-white pb-3"/>
      <div className="FooterLogo">
        <img src={Logo} alt="Logo" />
        <p className="pt-2">
          Best App For Movie Lovers In <br />
          Indonesia! Movie Entertainment <br />
          Platform From Cinema To Online <br />
          Movie Streaming Selections.
        </p>
      </div>
    </Row>
  </div>
  )
}

export default Footer