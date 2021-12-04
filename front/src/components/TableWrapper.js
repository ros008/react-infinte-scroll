import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
import TableHeader from "./TableHeader";

const TableWrapper = () => {
  const [userList, setUserList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [order, setOrder] = useState("");
  const [hasMore, setHasMore] = useState(false);

  const onClick = (e) => {
    console.log(userList);
  };

  const fetchData = async () => {
    try {
      const res = await axios(
        `http://localhost:3050/fetch-paginated-data?offset=${offset}&limit=100`
      );
      const { count, list } = res.data;
      setUserList((prevState) => [...prevState, ...list]);
      setOffset(offset + list.length);
      if (count > offset + 100) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <button onClick={onClick}>데이터 확인</button>
      <TableHeader order={order} />
      <Table
        data={userList}
        setUserList={setUserList}
        fetchData={fetchData}
        hasMore={hasMore}
      />
    </div>
  );
};

export default TableWrapper;
