import React from "react";
import './Footer.css'
const Footer = () => {
    return (
      <div className="footer">
      <div className="footer-container">
        <div className="shipping-info">
          <h3>Shipping Information</h3>
          <p>We ship to the following countries:</p>
          <ul>
            <li>Sweden</li>
            <li>China</li>
            <li>Brazil</li>
            <li>Australia</li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: 9585121002</p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023 Shipping Company. All rights reserved.</p>
      </div>
      </div>
  );
};

export default Footer;
