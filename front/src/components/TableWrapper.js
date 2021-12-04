import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
import TableHeader from "./TableHeader";

const TableWrapper = () => {
  const [userList, setUserList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [order, setOrder] = useState("");

  const onClick = (e) => {
    console.log(userList);
  };

  const fetchData = async (offset) => {
    try {
      const res = await axios(
        `http://localhost:3050/fetch-paginated-data?offset=${offset}&limit=100`
      );
      const data = res.data.list;
      setUserList((prevState) => [...prevState, ...data]);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  return (
    <div>
      <button onClick={onClick}>데이터 확인</button>
      <TableHeader order={order} />
      <Table data={userList} />
    </div>
  );
};

export default TableWrapper;
