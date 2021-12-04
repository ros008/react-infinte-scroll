import React from "react";

const TableItem = ({ row }) => {
  return <div>{row.index}</div>;
};

const TableRow = ({ rows }) => {
  return (
    <div>
      {rows.map((row) => (
        <TableItem row={row} />
      ))}
    </div>
  );
};

export default TableRow;
