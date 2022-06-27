import { useState } from "react";

import logo from "../logo.svg";
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { links, social } from "../data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-img"></img>
          <button className="nav-button">
            <FaBars size={42} />
          </button>
        </div>
        <div className="links-container">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((s) => {
            const { id, url, icon } = s;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
