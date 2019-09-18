import React from 'react';

import AddNewFriend from './AddNewFriend';
import EditFriend from './EditFriend';
import FriendsList from './FriendsList';

export default function FriendsPage() {
  return (
    <div>
      <AddNewFriend />
      <EditFriend />
      <FriendsList />
    </div>
  );
}