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
    <TheForm onSubmit={addFriend}>
      <input
        type="text"
        name="name"
        value={addFriendName}
        placeholder="insert name"
        onChange={e => {
          setAddFriendName(e.target.value);
        }}
      />

      <input
        type="text"
        name="age"
        value={addFriendAge}
        placeholder="insert age"
        onChange={e => {
          setAddFriendAge(e.target.value);
        }}
      />

      <input
        type="email"
        name="email"
        value={addFriendEmail}
        placeholder="insert email"
        onChange={e => {
          setAddFriendEmail(e.target.value);
        }}
      />
      <button>Add Friend</button>
    </TheForm>
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

const TheForm = styled.form`
    background-color: black;
    color: white;
`;