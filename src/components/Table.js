import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
const Table = () => {
  const [reviewData, setReviewData] = useState([]);

  const [text, setText] = useState("");
  const nameRef = useRef();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
    nameRef.current.focus();
  };

  const fetchData = async (currentPostId) => {
    try {
      const res = await axios(`https://jsonplaceholder.typicode.com/comments`);
      const data = await res.data;
      setReviewData([...reviewData, ...data]);
    } catch (e) {
      alert(e);
    }
  };
  const getRow = (offset, limit) => {};

  useEffect(() => {
    fetchData(1);
  }, []);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);

  const nextId = useRef(4);
  const usernameRef = useRef("");
  const emailRef = useRef("");

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: usernameRef.current.value,
      email: emailRef.current.value,
    };

    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  console.log("Render");

  return (
    <>
      <div>
        <input name="username" placeholder="계정명" ref={usernameRef} />
        <input name="email" placeholder="이메일" ref={emailRef} />
        <button onClick={onCreate}>등록</button>
      </div>
      <UserList users={users} />
      {/* <InputSample /> */}
    </>
  );
  //   return (
  //     <div
  //       style={{
  //         marginTop: "2rem",
  //         padding: "1rem",
  //         height: "35rem",
  //         border: "1px solid red",
  //       }}
  //     >
  //       <input name="name" onChange={onChange} value={text} ref={nameRef} />
  //       <button onClick={onReset}>초기화</button>
  //       <div>
  //         <b>내용: </b>
  //         {text}
  //       </div>
  //     </div>
  //   );
};

export default Table;
