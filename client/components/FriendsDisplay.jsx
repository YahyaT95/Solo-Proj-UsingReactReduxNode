/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import React from 'react';
import Friend from './Friend';


const friendMaker = (friend, idx) => (
  <Friend
    {...friend}
    key={idx}
    index={idx}
  />
);

const FriendsDisplay = ({ friendList }) => {
  console.log(friendList);
  return (
    <div className="displayBox">
      <h4>Friends</h4>
      <div className="allFriends">
        {friendList.map((friend, idx) => friendMaker(friend, idx))}
      </div>
    </div>
  );
};

export default FriendsDisplay;
