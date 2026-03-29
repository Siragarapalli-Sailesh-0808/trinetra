import React from "react";
import { Layout } from "../../layouts/Layout";

import contactImg from "../../assets/img/others/contact_img.jpg";

export const Contact = () => {
  return (
    <Layout 
      header={2} 
      footer={2} 
      bodyClass="td_theme_2"
      breadcrumbTitle={"Contact"} 
      breadcrumbSubtitle={"Contact"}
    >
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1">
              <div className="row align-items-center td_gap_y_40">
                <div className="col-lg-7">
                  <img src={contactImg} alt="Contact" className="w-100" />
                </div>
                <div className="col-xl-4 offset-xl-1 col-lg-5">
                  <div className="td_contact_info">
                    <div className="td_section_heading td_style_2 td_mb_20">
                      <h2 className="td_contact_info_title td_fs_36 mb-0">
                        Get In Touch With Us
                      </h2>
                    </div>
                    <div className="td_mb_40">
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        Trinetra Academy
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        J.N. Road, Opposite Reliance Digital,<br />
                        Rajahmundry – 533103
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:9848137364">9848137364</a> / <a href="tel:6306466692">6306466692</a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="tel:+918833500136">+91 8833500136</a>
                      </p>
                    </div>
                    <div>
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        Office Hours
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="td_height_120 td_height_lg_80" />

        <div className="td_map">
          <iframe
            id="map"
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2849!2d81.7880!3d17.0005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAwJzAxLjgiTiA4McKwNDcnMTYuOCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
            allowFullScreen
          />
        </div>
      </section>
    </Layout>
  );
};
