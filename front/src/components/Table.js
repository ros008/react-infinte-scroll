import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <div
      style={{
        padding: "1rem",
        height: "35rem",
        border: "1px solid red",
      }}
    >
      <TableRow rows={data} />
    </div>
  );
};

export default Table;
