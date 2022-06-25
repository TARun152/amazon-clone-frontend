import React from "react";
import playStore from "../images/playstore.png";
import appStore from "../images/appstore.png";
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Amazon</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Tarun</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <p>Instagram</p>
        <p>Youtube</p>
        <p>Facebook</p>
      </div>
    </footer>
  );
};

export default Footer;