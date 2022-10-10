import React from 'react'
import { WithRouter } from "../utils/Navigation";

const NotFound = () => {
  return (
    <div className="text-white text-center mt-4">404 Pages NotFound</div>
  )
}

export default WithRouter(NotFound);