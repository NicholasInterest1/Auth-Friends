import React, { useState } from "react";
import { connect } from "react-redux";
import { postFriend } from "../utils/actions";
import styled from "styled-components";

function AddFriend({ postFriend }) {
  const [addFriendName, setAddFriendName] = useState("");
  const [addFriendAge, setAddFriendAge] = useState("");
  const [addFriendEmail, setAddFriendEmail] = useState("");

  const addFriend = e => {
    e.preventDefault();
    let addFriend = {
      name: addFriendName,
      age: addFriendAge,
      email: addFriendEmail
    };
    postFriend(addFriend);
  };
  return (
    <form onSubmit={addFriend}>
      <TheInput
        type="text"
        name="name"
        value={addFriendName}
        placeholder=" insert name"
        onChange={e => {
          setAddFriendName(e.target.value);
        }}
      />

      <TheInput
        type="text"
        name="age"
        value={addFriendAge}
        placeholder=" insert age"
        onChange={e => {
          setAddFriendAge(e.target.value);
        }}
      />

      <TheInput
        type="email"
        name="email"
        value={addFriendEmail}
        placeholder=" insert email"
        onChange={e => {
          setAddFriendEmail(e.target.value);
        }}
      />
      <TheBtn>Add Friend</TheBtn>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { postFriend }
)(AddFriend);

const TheInput = styled.input`
  border: 2px solid black;
  margin-right: 5px;
  margin-top: 15px;
`;

const TheBtn = styled.button`
  border: 1px solid black;
  margin-left: 15px;
  margin-top: 15px;
  border-radius: 4px;
`;