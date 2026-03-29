import React from "react";
import { Link } from "react-router-dom";

import user from "../../assets/img/icons/user_3.svg";
import book from "../../assets/img/icons/book.svg";
import courseThumb1 from "../../assets/img/home_1/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_1/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_1/course_thumb_3.jpg";

const coursesList = [
  {
    id: 1,
    label: "Popular",
    image: courseThumb1,
    seats: 30,
    timing: "7:00 PM - 9:00 PM",
    category: "Intermediate",
    title: "Intermediate Coaching (MPC/BiPC)",
    description:
      "Comprehensive coaching for Intermediate students in MPC and BiPC streams with focus on board exams and entrance preparation.",
    subjects: "Physics, Chemistry, Mathematics/Biology",
    rating: 4.8,
    totalRatings: 45,
  },
  {
    id: 2,
    label: "",
    image: courseThumb2,
    seats: 25,
    timing: "6:30 PM - 8:30 PM",
    category: "Foundation",
    title: "9th & 10th Class Evening Tuition",
    description:
      "Strong foundation building for 9th and 10th class students with emphasis on concept clarity and exam preparation.",
    subjects: "All Subjects - Math, Science, English, Social",
    rating: 4.7,
    totalRatings: 38,
  },
  {
    id: 3,
    label: "Best Results",
    image: courseThumb3,
    seats: 40,
    timing: "9:30 AM - 5:30 PM",
    category: "Long-Term",
    title: "NEET Long-Term Coaching",
    description:
      "Intensive full-day coaching program for NEET aspirants with experienced medical faculty and comprehensive study material.",
    subjects: "Physics, Chemistry, Botany, Zoology",
    rating: 4.9,
    totalRatings: 52,
  },
  {
    id: 4,
    label: "Top Ranks",
    image: courseThumb1,
    seats: 35,
    timing: "9:30 AM - 5:30 PM",
    category: "Long-Term",
    title: "JEE Main Long-Term Coaching",
    description:
      "Complete JEE Main preparation with ISRO scientists and IIT graduates. Focus on conceptual understanding and problem-solving.",
    subjects: "Physics, Chemistry, Mathematics",
    rating: 4.9,
    totalRatings: 48,
  },
  {
    id: 5,
    label: "Foundation",
    image: courseThumb2,
    seats: 20,
    timing: "6:30 PM - 8:30 PM",
    category: "Foundation",
    title: "IIT Foundation Classes",
    description:
      "Early preparation for IIT-JEE for students in 8th, 9th, and 10th classes. Build strong fundamentals for future success.",
    subjects: "Mathematics, Physics, Chemistry",
    rating: 4.6,
    totalRatings: 32,
  },
];

export const CoursesAllGrid = () => {
  return (
    <div className="row td_gap_y_30 td_row_gap_30">
      {coursesList.map((course) => (
        <div key={course.id} className="col-lg-4 col-md-6">
          <div className="td_card td_style_3 d-block td_radius_10">
            {course.label && (
              <span className="td_card_label td_accent_bg td_white_color">
                {course.label}
              </span>
            )}
            <div className="td_card_thumb">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="td_card_info td_white_bg">
              <div className="td_card_info_in">
                <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
                  <li>
                    <img src={user} alt="" />
                    <span className="td_opacity_7">{course.seats} Seats</span>
                  </li>
                  <li>
                    <img src={book} alt="" />
                    <span className="td_opacity_7">
                      {course.timing}
                    </span>
                  </li>
                </ul>
                <div className="td_card_category td_fs_14 td_bold td_heading_color td_mb_14">
                  <span>{course.category}</span>
                </div>
                <h2 className="td_card_title td_fs_24 td_mb_16">
                  {course.title}
                </h2>
                <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_10">
                  {course.description}
                </p>
                <p className="td_card_subtitle td_heading_color td_medium td_mb_20">
                  <strong>Subjects:</strong> {course.subjects}
                </p>
                <div className="td_card_review">
                  <div className="td_rating" data-rating={course.rating}>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <div className="td_rating_percentage">
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                    </div>
                  </div>
                  <span className="td_heading_color td_opacity_5 td_medium">
                    ({course.rating}/{course.totalRatings} Ratings)
                  </span>
                </div>
                <div className="td_card_btn">
                  <Link
                    to="/contact"
                    className="td_btn td_style_1 td_radius_10 td_medium"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Enroll Now</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
