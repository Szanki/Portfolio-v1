import React from "react";
import Logo from "../media/images/logo.png";

export function Landingpage() {
  return (
    <div className="landing-page ">
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo-container-img" />
          <span className="logo-container-text">Michał Sulwiński</span>
        </div>
      </nav>
      <div className="hero-wrapper">
        <h2 className="hero-wrapper-header">Hello !</h2>
        <p className="hero-wrapper-text">
          My name is Michał Sulwiński
          <br />
          I'm Front-end enthusiast from Poland
        </p>
      </div>
    </div>
  );
}
