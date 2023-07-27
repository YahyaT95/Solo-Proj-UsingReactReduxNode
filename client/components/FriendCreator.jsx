/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React, { getState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
// import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// import {
//   addFriend, updateFriend, updateLocation, updateMax,
// } from '../actions/actions';

const FriendCreator = ({
  newLocation,
  newMaxDist,
  newFriend,
  updateLocation,
  updateFriend,
  updateMax,
  addFriend,
  dispatch,
  // syncMarkets,
}) => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
    dispatch(actions.updateLocation(e.target.value));
    // updateLocation(e.target.value);
  };
  const handleInputChange2 = (e) => {
    console.log(e.target.value);
    updateMax(e.target.value);
  };
  const handleInputChange3 = (e) => {
    console.log(newLocation);
    console.log(e.target.value);
    updateFriend(e.target.value);
  };
  const handleButtonPress = () => {
    console.log();
    addFriend({ newLocation, newFriend, newMaxDist });
  };

  useEffect(() => {
    document.getElementById('friend-location').addEventListener('change', handleInputChange);
  }, []);
  useEffect(() => {
    document.getElementById('max-dist').addEventListener('change', handleInputChange2);
  }, []);
  useEffect(() => {
    document.getElementById('new-friend').addEventListener('change', handleInputChange3);
  }, []);
  useEffect(() => {
    document.getElementById('add-friend-button').addEventListener('submit', handleButtonPress);
  }, []);

  return (
    <div>
      <form>
        <div>
          Location:
          <input
            id="friend-location"
            // value={newLocation}
            // onChange={handleInputChange}
          />
        </div>
        <div>
          Max Distance:
          <input
            id="max-dist"
            // value={newMaxDist}
            // onChange={e => updateMax(e.target.value)}
          />
        </div>
        <div>
          New Friend:
          <input
            id="new-friend"
            // value={newFriend}
            // onChange={e => updateFriend(e.target.value)}
          />
        </div>
        <button id="add-friend-button" className="primary" type="submit">Add Person</button>
      </form>
    </div>
  );
};

export default FriendCreator;
