import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="nav-body">
      <div className="left-side">
        <h1>Srinivasa Restaurant</h1>
      </div>
      <div className="right-side">
        <button onClick={() => navigate("/")} className="button-1">
          Home
        </button>
      </div>
    </div>
  );
}

export default Navbar;
