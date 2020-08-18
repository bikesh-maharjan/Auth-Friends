import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import Friends from "./Friends";
import NewForm from "./NewForm";

function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const getData = () => {
    axiosWithAuth()
      .get("/api/friends/")
      .then((res) => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Friends List</h1>
      <NewForm />

      <div>
        {friends.map((friend) => (
          <div key={friend.id}>
            <Friends name={friend.name} age={friend.age} email={friend.email} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsList;
