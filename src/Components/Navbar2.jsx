import React from "react";
import logo from "../assets/rajdharma.jpg";
import image from "../assets/surya.jpg";
import "../Components/Navbar2.css";

function Navbar2() {
  return (
    <div className="navbar">

      {/* Left - Logo */}
      <div className="logo">
        <img src={logo} alt="rajdharma" />
        <h2>Rajdharma</h2>
      </div>

      {/* Center - Menu */}
      <ul className="ulist">
        <li>Home</li>
        <li>Product</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>

      {/* Right - Icons */}
      <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>

      <div className="icon">
        <i className="fa-regular fa-message"></i>
        <i className="fa-regular fa-bell"></i>
        <img id="imgg" src={image} alt="surya" />
      </div>

    </div>
  )
}

export default Navbar2
