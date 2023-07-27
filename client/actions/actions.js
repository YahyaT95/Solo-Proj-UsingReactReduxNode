/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import axios from 'axios';
import * as types from '../constants/actionTypes';

export const updateLocation = data => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});
export const updateFriend = data => ({
  type: types.UPDATE_FRIEND,
  payload: data,
});
export const updateMax = data => ({
  type: types.UPDATE_MAX,
  payload: data,
});

// };
export const addFriend = data => ({
  type: types.ADD_FRIEND,
  payload: data,
});
  // } else {
  //   // Handle error...
  //   return console.log('error at addFriend function');
  // }

export const syncMarkets = () => (dispatch, getState) => {
  axios.put('/markets', getState().friend.friendList)
    .then(({ status }) => {
      if (status === 200) dispatch({ type: types.SYNC_MARKETS });
    })
    .catch(console.error);
};

export const loadMarkets = () => (dispatch) => {
  axios.get('/markets')
    .then(({ data }) => {
      dispatch({
        type: types.LOAD_MARKETS,
        payload: data,
      });
    })
    .catch(console.error);
};
