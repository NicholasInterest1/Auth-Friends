import React, { useEffect } from "react";
import { connect } from "react-redux";
import FriendCard from "./FriendCard";

import { getFriends } from "../utils/actions";

import styled from "styled-components";

function FriendList({ getFriends, friends }) {
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  return (
    <>
      <AnotherH2>List of Friends</AnotherH2>
      <TheDiv>
        {friends.map(friend => {
          return <FriendCard key={friend.id} friend={friend} />;
        })}
      </TheDiv>
    </>
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
  { getFriends }
)(FriendList);

const TheDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background-color: #002244;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
`;

const AnotherH2 = styled.h2`
  color: black;
`;