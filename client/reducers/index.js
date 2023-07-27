/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import friendsReducer from './friendReducer';

export default combineReducers({
  friends: friendsReducer,
});
