import React from "react";
import { Link } from "react-router-dom";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
import { HeaderSearch } from "./HeaderSearch";

import callIcon from "../../assets/img/icons/call.svg";
import envelopeIcon from "../../assets/img/icons/envlop.svg";
import loveIcon from "../../assets/img/icons/love.svg";
import cartIcon from "../../assets/img/icons/cart.svg";
import logoV2 from "../../assets/img/logio/Logo.png";

export const HeaderTwo = () => {
  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
      <div className="td_top_header td_heading_bg td_white_color">
        <div className="container">
          <div className="td_top_header_in">
            <div className="td_top_header_left">
              <ul className="td_header_contact_list td_mp_0 td_normal">
                <li>
                  <img src={callIcon} alt="" />
                  <span>
                    Call: <a href="tel:9848137364">9848137364</a> / <a href="tel:6306466692">6306466692</a>
                  </span>
                </li>
                <li>
                  <img src={callIcon} alt="" />
                  <span>
                    Phone: <a href="tel:+918833500136">+91 8833500136</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="td_top_header_right">
              <div className="td_hero_icon_btns position-relative">
                {/* Removed search, wishlist, and cart for coaching institute */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_main_header">
        <div className="container">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link to="/" className="td_site_branding">
                <img src={logoV2} alt="Logo" />
              </Link>
            </div>
            <div className="td_main_header_center">
              <nav className="td_nav">
                <div className="td_nav_list_wrap">
                  <div className="td_nav_list_wrap_in">
                    <ul className="td_nav_list">
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
              </nav>
            </div>
            <div className="td_main_header_right">
              <div className="td_header_btns">
                <Link
                  to="/contact"
                  className="td_btn td_style_1 td_radius_30 td_medium td_with_shadow"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Enroll Now</span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
