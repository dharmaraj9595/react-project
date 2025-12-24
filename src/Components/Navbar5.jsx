import React from "react";
import logo from "../assets/rajdharma.jpg";
import image from "../assets/surya.jpg";
import "../Components/Navbar5.css";

function Navbar5() {
  return (
    <div className="navbar">

      {/* Left - Logo */}
      <div className="logo">
        <img src={logo} alt="rajdharma" />
        <h2>Rajdharma</h2>
      </div>

      {/* Menu */}
      <ul className="ulist">
        <li>Home</li>
        <li>Product</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>

      <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>


      {/* Search */}
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" />
      </div>

      {/* Profile */}
      <div className="profile">
        <img src={image} alt="surya" />
        <p>DHARMARAJ T</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>

    </div>
  )
}

export default Navbar5
