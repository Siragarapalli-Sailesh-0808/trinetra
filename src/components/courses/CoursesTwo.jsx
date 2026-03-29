import React from "react";
import { useTabs } from "../../lib/hooks/useTabs";
import { CoursesTwoItem } from "./CoursesTwoItem";

import courseThumb1 from "../../assets/img/home_3/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_3/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_3/course_thumb_3.jpg";
import courseThumb4 from "../../assets/img/home_3/course_thumb_4.jpg";
import courseThumb5 from "../../assets/img/home_3/course_thumb_5.jpg";
import courseThumb6 from "../../assets/img/home_3/course_thumb_6.jpg";

export const CoursesTwo = () => {
  useTabs();

  return (
    <section className="td_gray_bg_4">
      <div className="td_height_112 td_height_lg_75" />

      <div className="container">
        <div className="td_tabs td_style_1">
          <div
            className="td_section_heading td_style_1 td_type_2 td_with_tab_menu wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading_left">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                <i></i>
                Our Programs
                <i></i>
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
                Choose Your Perfect <br />
                Coaching Program
              </h2>
            </div>

            <div className="td_section_heading_right">
              <ul className="td_tab_links td_style_2 td_mp_0 td_medium td_fs_20 td_heading_color">
                <li className="active">
                  <a href="#td_tab_1">All Courses</a>
                </li>
                <li>
                  <a href="#td_tab_2">Intermediate</a>
                </li>
                <li>
                  <a href="#td_tab_3">Foundation</a>
                </li>
                <li>
                  <a href="#td_tab_4">Long-Term</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_height_50 td_height_lg_50" />

          <div className="td_tab_body">
            {/* All Courses */}
            <div className="td_tab active" id="td_tab_1">
              <div className="row td_gap_y_30 td_row_gap_30">
                {allCourses.map((course, index) => (
                  <div
                    key={index}
                    className="col-xl-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={course.delay}
                  >
                    <CoursesTwoItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* Intermediate */}
            <div className="td_tab" id="td_tab_2">
              <div className="row td_gap_y_30 td_row_gap_30">
                {intermediateCourses.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesTwoItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* Foundation */}
            <div className="td_tab" id="td_tab_3">
              <div className="row td_gap_y_30 td_row_gap_30">
                {foundationCourses.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesTwoItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* Long-Term */}
            <div className="td_tab" id="td_tab_4">
              <div className="row td_gap_y_30 td_row_gap_30">
                {longTermCourses.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesTwoItem {...course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

const allCourses = [
  {
    src: courseThumb1,
    tag: "Popular",
    seats: 30,
    semesters: "Evening",
    title: "Intermediate Coaching (MPC/BiPC)",
    totalRatings: 45,
    author: "Expert Faculty",
    price: "Contact",
    delay: "0.3s",
  },
  {
    src: courseThumb2,
    seats: 25,
    semesters: "Evening",
    title: "9th & 10th Class Coaching",
    totalRatings: 38,
    author: "Experienced Teachers",
    price: "Contact",
    delay: "0.35s",
  },
  {
    src: courseThumb3,
    tag: "Best Results",
    seats: 40,
    semesters: "Full Day",
    title: "NEET & JEE Main Long-Term",
    totalRatings: 52,
    author: "ISRO Scientists",
    price: "Contact",
    delay: "0.3s",
  },
];

const intermediateCourses = [
  {
    src: courseThumb1,
    tag: "Popular",
    seats: 30,
    semesters: "7-9 PM",
    title: "Intermediate Coaching (MPC/BiPC)",
    totalRatings: 45,
    author: "Expert Faculty",
    price: "Contact",
    delay: "0.3s",
  },
];

const foundationCourses = [
  {
    src: courseThumb2,
    seats: 25,
    semesters: "6:30-8:30 PM",
    title: "9th & 10th Class Evening Tuition",
    totalRatings: 38,
    author: "Experienced Teachers",
    price: "Contact",
    delay: "0.3s",
  },
  {
    src: courseThumb4,
    tag: "Foundation",
    seats: 20,
    semesters: "6:30-8:30 PM",
    title: "IIT Foundation Classes",
    totalRatings: 32,
    author: "IIT Graduates",
    price: "Contact",
    delay: "0.35s",
  },
];

const longTermCourses = [
  {
    src: courseThumb3,
    tag: "Best Results",
    seats: 40,
    semesters: "9:30 AM-5:30 PM",
    title: "NEET Long-Term Coaching",
    totalRatings: 52,
    author: "Medical Experts",
    price: "Contact",
    delay: "0.3s",
  },
  {
    src: courseThumb5,
    tag: "Top Ranks",
    seats: 35,
    semesters: "9:30 AM-5:30 PM",
    title: "JEE Main Long-Term Coaching",
    totalRatings: 48,
    author: "ISRO Scientists",
    price: "Contact",
    delay: "0.35s",
  },
];
