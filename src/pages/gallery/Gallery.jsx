import React from "react";
import { Layout } from "../../layouts/Layout";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";

export const Gallery = () => {
  // Placeholder gallery images - replace with actual photos
  const galleryImages = [
    { id: 1, title: "Classroom", category: "Facilities" },
    { id: 2, title: "Students Learning", category: "Activities" },
    { id: 3, title: "Faculty", category: "Team" },
    { id: 4, title: "Lab Session", category: "Activities" },
    { id: 5, title: "Campus", category: "Facilities" },
    { id: 6, title: "Achievement", category: "Events" },
    { id: 7, title: "Study Material", category: "Resources" },
    { id: 8, title: "Guidance Session", category: "Activities" },
    { id: 9, title: "Library", category: "Facilities" },
  ];

  return (
    <Layout header={2} footer={2} bodyClass="td_theme_2">
      <Breadcrumb title="Gallery" />
      
      <section className="td_gray_bg_7">
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="td_section_heading td_style_1 text-center">
            <h2 className="td_section_title td_fs_48 mb-0">
              Trinetra Academy <span className="td_accent_color">Gallery</span>
            </h2>
            <div className="td_section_heading_divider" />
            <p className="td_section_subtitle td_fs_18 mb-0">
              A glimpse into our state-of-the-art facilities and vibrant learning environment
            </p>
          </div>
          <div className="td_height_50 td_height_lg_50" />
          
          <div className="row">
            {galleryImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6 mb-4">
                <div className="td_gallery_item">
                  <div className="td_gallery_img">
                    <div 
                      style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        overflow: "hidden"
                      }}
                    >
                      <div style={{ textAlign: "center", color: "#999" }}>
                        <i className="fa-solid fa-image" style={{ fontSize: "48px", marginBottom: "10px" }}></i>
                        <p style={{ margin: 0, fontSize: "14px" }}>{image.title}</p>
                        <p style={{ margin: 0, fontSize: "12px" }}>{image.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
};
