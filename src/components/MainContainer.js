import React from "react";
import Content from "./Content";
import Header from "./Header";
import Lnb from "./Lnb";

const MainContainer = () => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div
        style={{
          height: "calc(100% - 5rem)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Lnb />
        <Content />
      </div>
    </div>
  );
};

export default MainContainer;
