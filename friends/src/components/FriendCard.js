import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteFriend, updateFriend } from "../utils/actions";
import styled from "styled-components";

function FriendCard({ friend, deleteFriend, updateFriend }) {
  const [updatedFriendName, setupdatedFriendName] = useState("");
  const [updatedFriendAge, setupdatedFriendAge] = useState("");
  const [updatedFriendEmail, setupdatedFriendEmail] = useState("");

  const handleUpdateFriend = e => {
    e.preventDefault();
    let updatedFriend = {
      name: updatedFriendName,
      age: updatedFriendAge,
      email: updatedFriendEmail
    };
    updateFriend(updatedFriend.id);
  };

  const handleDeleteFriend = e => {
    e.preventDefault();
    deleteFriend(friend.id);
  };

  return (
    <Div>
      <TheH3>Name: {friend.name}</TheH3>
      <TheP>Age: {friend.age}</TheP>
      <TheP>Email: {friend.email}</TheP>
      <Btn onClick={handleUpdateFriend}>Update Friend</Btn>
      <Btn onClick={handleDeleteFriend}>Delete Friend</Btn>
    </Div>
  );
}

export default connect(
  null,
  { deleteFriend, updateFriend }
)(FriendCard);

const TheH3 = styled.h3`
  color: white;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
`;

const TheP = styled.p`
  color: white;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 5px;
  height: 30px;
  align-items: center;
`;
