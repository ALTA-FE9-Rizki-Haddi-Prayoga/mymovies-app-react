import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Favorite from "../pages/Favorite";
import NotFound from "../pages/NotFound";
import { FavoriteProvider } from "../utils/FavoriteContext";

const Index = () => {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  );
};

export default Index;
