/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description component that renders MarketCreator and Market
 *
 * ************************************
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import FriendCreator from '../components/FriendCreator';
import FriendsDisplay from '../components/FriendsDisplay';
import storeD from '../store';
// import FriendsDisplay from '../components/FriendsDisplay';

// const mapStateToProps = ({ friends }) => ({
//   // newLocation: friends.newLocation,
//   totalFriends: friends.totalFriends,
//   friendList: friends.friendList,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const FriendContainer = () => {
  const newLocation = useSelector(store => store.friends.newLocation);
  const newFriend = useSelector(store => store.friends.newFriend);
  const newMaxDist = useSelector(store => store.friends.newMaxDist);
  const totalFriends = useSelector(store => store.friends.totalFriends);
  const friendList = useSelector(store => store.friends.friendList);


  const dispatch = useDispatch();

  const updateLocation = (location) => {
    console.log('location is', location);
    dispatch(actions.updateLocation(location));
  };
  const updateFriend = (updatedFriend) => dispatch(actions.updateFriend(updatedFriend));
  const updateMax = (newMax) => dispatch(actions.updateMax(newMax));
  const addFriend = (friend) => dispatch(actions.addFriend(friend));
  const syncMarkets = () => dispatch(actions.syncMarkets());
  // const updateLocation = (updatedLocation) => store.dispatch(actions.updateLocation(updatedLocation));
  // const updateFriend = (updatedFriend) => store.dispatch(actions.updateFriend(updatedFriend));
  // const updateMax = (newMax) => store.dispatch(actions.updateMax(friend));
  // const addFriend = (friend) => store.dispatch(actions.addFriend(friend));

  return (
    <div className="innerbox">
      <FriendCreator
        newLocation={newLocation}
        updateLocation={updateLocation}
        newFriend={newFriend}
        updateFriend={updateFriend}
        updateMax={updateMax}
        newMaxDist={newMaxDist}
        addFriend={addFriend}
        syncMarkets={syncMarkets}
        dispatch={dispatch}
      />
      <FriendsDisplay
        totalFriends={totalFriends}
        friendList={friendList}
      />
    </div>
  );
};

export default FriendContainer;
