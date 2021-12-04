import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import { FixedSizeList } from "react-window";
import { debounce, throttle } from "lodash";

const Table = ({ data, setUserList, fetchData, hasMore }) => {
  const scrollRef = useRef(null);

  const handleScroll = throttle(() => {
    const container = scrollRef.current;
    const { scrollTop, clientHeight, scrollHeight } = container;
    console.log(
      scrollTop,
      clientHeight,
      scrollHeight * 0.9,
      scrollTop + clientHeight > scrollHeight * 0.9
    );
    if (scrollTop + clientHeight > scrollHeight * 0.9 && hasMore) {
      fetchData();
    }
  }, 300);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const memberRef = scrollRef.current;
    if (memberRef) memberRef.addEventListener("scroll", handleScroll);
    return () => {
      if (memberRef) memberRef.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={{
        padding: "1rem",
        height: "35rem",
        border: "1px solid red",
      }}
    >
      <FixedSizeList
        height={570}
        itemCount={data.length}
        itemSize={20}
        width="100%"
        outerRef={scrollRef}
      >
        {({ index, style }) => (
          <TableRow
            key={data[index].index}
            memberInfo={data[index]}
            style={style}
          />
        )}
      </FixedSizeList>
    </div>
  );
};

export default Table;
