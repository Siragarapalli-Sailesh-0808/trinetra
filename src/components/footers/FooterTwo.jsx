import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/img/logio/Logo.png";

export const FooterTwo = () => {
  return (
    <footer className="td_footer td_style_1 td_color_1">
      <div className="container">
        <div className="td_footer_row">
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <div className="td_footer_text_widget td_fs_18">
                <img src={footerLogo} alt="Logo" />
                <p>
                  Trinetra Academy is dedicated to delivering high-quality education 
                  for competitive exams like NEET, JEE, and EAMCET with experienced 
                  faculty and personal attention.
                </p>
              </div>
              <ul className="td_footer_address_widget td_medium td_mp_0">
                <li>
                  <i className="fa-solid fa-phone-volume"></i>
                  <a href="tel:9848137364">9848137364</a> / <a href="tel:6306466692">6306466692</a>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+918833500136">+91 8833500136</a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>J.N. Road, <br />
                  Opposite Reliance Digital, <br />
                  Rajahmundry – 533103
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Navigate
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Our Courses
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/courses">Intermediate Coaching</Link>
                </li>
                <li>
                  <Link to="/courses">9th & 10th Class</Link>
                </li>
                <li>
                  <Link to="/courses">NEET & JEE Long-Term</Link>
                </li>
                <li>
                  <Link to="/courses">IIT Foundation</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Get In Touch
              </h2>
              <div className="td_newsletter td_style_1">
                <p className="td_mb_20 td_opacity_7">
                  Contact us for admissions and course details. Limited seats available!
                </p>
                <Link 
                  to="/contact"
                  className="td_btn td_style_1 td_radius_30 td_medium"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Contact Us</span>
                  </span>
                </Link>
              </div>
              <div className="td_footer_social_btns td_fs_20">
                <a href="#" className="td_center">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="td_center">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="td_center">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_footer_bottom td_fs_18">
        <div className="container">
          <div className="td_footer_bottom_in">
            <p className="td_copyright mb-0">
              Copyright © Trinetra Academy | All Rights Reserved
            </p>
            <ul className="td_footer_widget_menu">
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
