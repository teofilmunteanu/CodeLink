import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(prosp) {
  return (
    <span className="center">
      <Link className="btn btn-primary" role="button"  to="/join">Join</Link>
      <Link role="button" className="btn btn-secondary" to="/create">Create</Link>
    </span>
  );
}

export default Home