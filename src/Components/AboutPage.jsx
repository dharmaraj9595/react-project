import React from "react";
import "../Components/";

function About() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">SoftBenTech</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <button className="btn">Get Started</button>
        </ul>
      </nav>

      {/* About Us Section */}
      <section className="about">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            We are a multi-award-winning digital consulting and engineering firm
            that provides end-to-end software solutions to enterprises.
          </p>
          <button className="btn">Contact</button>
        </div>

        <div className="about-img">
          <img src="/images/about.png" alt="about" />
        </div>
      </section>

      {/* Who Are We */}
      <section className="who">
        <div className="who-img">
          <img src="/images/who.png" alt="who we are" />
        </div>

        <div className="who-text">
          <h2>Who Are We?</h2>
          <p>
            We are highly passionate about Web and Mobile application
            Development Services.
          </p>
          <ul>
            <li>✔ App & Web Development</li>
            <li>✔ Digital Marketing</li>
            <li>✔ E-Commerce Solutions</li>
            <li>✔ Cloud Development</li>
          </ul>
        </div>
      </section>

      {/* Brand Development */}
      <section className="brand">
        <h2>How We Aid in Brand Development</h2>
        <p>
          Softbentech has impressive features to build your website creatively
          and fast.
        </p>
      </section>
    </>
  );
}

export default About;
