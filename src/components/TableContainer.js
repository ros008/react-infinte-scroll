import React from "react";
import TableWrapper from "./TableWrapper";

const TableContainer = () => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <div
        style={{
          height: "10rem",
          background: "green",
        }}
      >
        subheader
      </div>
      <TableWrapper />
    </div>
  );
};

export default TableContainer;
