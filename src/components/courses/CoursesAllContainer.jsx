import React from "react";

export const CoursesAllContainer = ({ children, isGrid }) => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="td_height_60 td_height_lg_40" />

        {/* items */}
        {children}

        <div className="td_height_60 td_height_lg_40" />
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
