import React from "react";
import { Link } from "react-router-dom";
import { CategoryOneItem } from "./CategoryOneItem";

import categoryIcon1 from "../../assets/img/home_2/category_icon_1.svg";
import categoryIcon2 from "../../assets/img/home_2/category_icon_2.svg";
import categoryIcon3 from "../../assets/img/home_2/category_icon_3.svg";
import categoryIcon4 from "../../assets/img/home_2/category_icon_4.svg";

const categoryData = [
  {
    delay: 0.25,
    src: categoryIcon1,
    title: "MPC + AI",
    courses: 2,
  },
  {
    delay: 0.3,
    src: categoryIcon2,
    title: "MPC + IIT",
    courses: 2,
  },
  {
    delay: 0.35,
    src: categoryIcon3,
    title: "MPC + EAMCET",
    courses: 1,
  },
  {
    delay: 0.4,
    src: categoryIcon4,
    title: "Foundation Classes",
    courses: 2,
  },
];

export const CategoryOne = () => {
  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
              <i></i>
              Browse Categories
              <i></i>
            </p>
            <h2 className="td_section_title td_fs_48 mb-0">
              Explore Our Programs
            </h2>
          </div>
          <div className="td_section_heading_right">
            <p className="td_section_subtitle td_fs_18 td_mb_16 td_heading_color td_opacity_9">
              Choose from our specialized coaching programs designed for NEET, JEE, and Intermediate students with expert faculty and proven results.
            </p>
            <Link
              to="/courses"
              className="td_btn td_style_2 td_heading_color td_medium td_mb_10"
            >
              See all Courses
              <i>
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
                  ></path>
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
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
                  ></path>
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </i>
            </Link>
          </div>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        {/* category cards */}
        <div className="row td_gap_y_24">
          {categoryData.map((category, index) => (
            <CategoryOneItem
              key={index}
              delay={category.delay}
              src={category.src}
              title={category.title}
              courses={category.courses}
            />
          ))}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
