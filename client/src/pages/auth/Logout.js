import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <h1>Are you sure you want to Logout?</h1>
      <button type="submit" className="btn mb-3 auth-btn" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
