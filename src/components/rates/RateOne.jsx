import React from "react";

import rateIcon1 from "../../assets/img/home_2/cs_rate_feature_icon_1.svg";
import rateIcon2 from "../../assets/img/home_2/cs_rate_feature_icon_2.svg";
import rateIcon3 from "../../assets/img/home_2/cs_rate_feature_icon_3.svg";
import rateIcon4 from "../../assets/img/home_2/cs_rate_feature_icon_4.svg";

export const RateOne = () => {
  return (
    <section
      className="td_accent_bg td_rate_section wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      <div className="td_rate_heading td_fs_20 td_semibold td_white_color">
        Trusted by Students & Parents
      </div>

      <div className="td_rate_feature_list_wrap" style={{ overflowY: "auto" }}>
        <div className="td_moving_box_wrap">
          <div className="td_moving_box_in">
            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon1} alt="Students Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      500+ Students Enrolled
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Growing community of successful students
                    </p>
                  </div>
                </li>

                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon2} alt="Expert Faculty Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Expert Faculty Team
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      ISRO Scientists & IIT Graduates
                    </p>
                  </div>
                </li>

                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon3} alt="Success Rate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      95% Success Rate
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Proven track record of results
                    </p>
                  </div>
                </li>

                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon4} alt="Experience Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      15+ Years Experience
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Excellence in entrance exam coaching
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon1} alt="Students Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      500+ Students Enrolled
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Growing community of successful students
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon2} alt="Expert Faculty Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Expert Faculty Team
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      ISRO Scientists & IIT Graduates
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon3} alt="Success Rate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      95% Success Rate
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Proven track record of results
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon4} alt="Experience Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      15+ Years Experience
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Excellence in entrance exam coaching
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
