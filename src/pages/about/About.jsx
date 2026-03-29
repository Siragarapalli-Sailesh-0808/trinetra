import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutOne } from "../../components/about/AboutOne";
import { CampusOne } from "../../components/campus/CampusOne";

export const About = () => {
  return (
    <Layout 
      header={2} 
      footer={2} 
      bodyClass="td_theme_2"
      breadcrumbTitle={"About Us"} 
      breadcrumbSubtitle={"About Us"}
    >
      {/* about */}
      <AboutOne />

      {/* campus */}
      <CampusOne />
    </Layout>
  );
};
