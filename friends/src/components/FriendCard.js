import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteFriend, updateFriend } from '../utils/actions'

function FriendCard({ friend, deleteFriend, updateFriend }) {
    const [updatedFriendName, setupdatedFriendName] = useState('')
    const [updatedFriendAge, setupdatedFriendAge] = useState('')
    const [updatedFriendEmail, setupdatedFriendEmail] = useState('')

    const handleUpdateFriend = (e) => {
        e.preventDefault()
        let updatedFriend = {
            name: updatedFriendName,
            age: updatedFriendAge,
            email: updatedFriendEmail
        }
        updateFriend(updatedFriend)
    }

    const handleDeleteFriend = (e) => {
        e.preventDefault()
        deleteFriend(friend.id)
    }

    return (
        <div>
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={handleUpdateFriend}>Update Friend</button>
            <button onClick={handleDeleteFriend}>Delete Friend</button>
        </div>
    )
} 

export default connect(null, {deleteFriend, updateFriend})(FriendCard)
