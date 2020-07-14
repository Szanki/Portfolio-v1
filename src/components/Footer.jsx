import React from "react";
import "../Fontawesome/index";
import { FaRegEnvelope, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <div className="footer">
      <div className="social-icon">
        <FaRegEnvelope />
        <p className="social-icon-content">michal.sulwinski1@gmail.com</p>
      </div>
      <a href="https://github.com/Szanki/" target="_blank" class="social-icon">
        <FaGithub /> <p className="social-icon-content">Gitub</p>
      </a>
    </div>
  );
}
