import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FriendCard from './FriendCard'

import { getFriends } from '../utils/actions'

function FriendList({ getFriends, friends}) {

    useEffect(() => {
        getFriends()
    }, [getFriends])

    return (
        <>
            <h2>List of Friends</h2>
            <div>
                {friends.map((friend) => {
                    return <FriendCard key={friend.id} friend={friend}/>
                })}
            </div>
        </>
    )
} 

const mapStateToProps = state => {
    return {
      friends: state.friends,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {getFriends})(FriendList)