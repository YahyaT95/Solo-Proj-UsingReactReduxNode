/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalFriends: 0,
  venue: 'Not Provided',
  friendList: [],
  newLocation: '',
  newFriend: '',
  newMaxDist: '',
  synced: true,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendList: state.friendList.concat({
          name: `${action.payload.friend} friend`,
          location: `${action.payload.location} location`,
          maxDist: `${action.payload.maxDist} dist`,
        }),
        totalFriends: state.totalFriends + 1,
        newLocation: '',
        newFriend: '',
        newMaxDist: '',
        synced: true,
      };

    case types.UPDATE_LOCATION:
      return {
        ...state,
        newLocation: action.payload,
      };

    case types.UPDATE_FRIEND:
      return {
        ...state,
        newFriend: action.payload,
      };
    case types.UPDATE_MAX:
      return {
        ...state,
        newMaxDist: action.payload,
      };

    case types.SYNC_MARKETS:
      return {
        ...state,
        synced: true,
      };

    case types.LOAD_MARKETS:
      return {
        ...state,
        totalFriends: action.payload.length,
        // totalCards: action.payload.reduce((res, m) => res + m.cards, 0),
        friendList: action.payload,
      };

    default:
      return state;
  }
};

export default friendsReducer;
