import React from "react";
import { WithRouter } from "../utils/Navigation";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="text-center">
        <h2 className="Head-404">404 - Looks like you’re lost.</h2>
        <p className="Text-404">
          Maybe this page used to exist or you just spelled something wrong.{" "}
          <br />
          Chances are you Spelled something wrong, so you can double check the
          URL?
        </p>
        <Link to={"/"}>
          <button className="Btn-404">RETURN TO HOME</button>
        </Link>
      </div>
    </>
  );
};

export default WithRouter(NotFound);
