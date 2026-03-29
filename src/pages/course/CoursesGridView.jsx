import React from "react";
import { Layout } from "../../layouts/Layout";
import { CoursesAllGrid } from "../../components/courses/CoursesAllGrid";
import { CoursesAllContainer } from "../../components/courses/CoursesAllContainer";

export const CoursesGridView = () => {
  return (
    <Layout
      header={2}
      footer={2}
      bodyClass="td_theme_2"
      breadcrumbTitle={"Our Courses"}
      breadcrumbSubtitle={"Our Courses"}
    >
      <CoursesAllContainer isGrid>
        <CoursesAllGrid />
      </CoursesAllContainer>
    </Layout>
  );
};
