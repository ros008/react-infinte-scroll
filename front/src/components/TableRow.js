import React from "react";

const TableItem = ({ row }) => {
  return <div>{row.index}</div>;
};

const TableRow = ({ memberInfo, style }) => {
  return <div style={style}>{memberInfo.name}</div>;
};

export default TableRow;
