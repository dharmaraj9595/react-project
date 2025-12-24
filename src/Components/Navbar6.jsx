import React from "react";
import logo from "../assets/rajdharma.jpg";
import image from "../assets/surya.jpg";
import "../Components/Navbar6.css";

function Navbar6() {
  return (
    <div className="navbar">

      {/* Left - Logo */}
      <div className="logo">
        <img src={logo} alt="rajdharma" />
        <h2>Rajdharma</h2>
      </div>

<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>

      {/* Search */}
      <div className="search1">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" />
      </div>

      {/* Right - Icons */}
      <div className="icon">
        <i className="fa-regular fa-message"></i>
        <i className="fa-regular fa-bell"></i>
        <img id="imgg" src={image} alt="surya" />
      </div>

    </div>
  )
}

export default Navbar6
