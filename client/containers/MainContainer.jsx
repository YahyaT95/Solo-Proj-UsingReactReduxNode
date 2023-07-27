/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay';
import FriendContainer from './FriendContainer';
// import * as actions from '../actions/actions';
// import Map from '../components/Map';

const MainContainer = () => {
  const totalFriends = useSelector(store => store.friends.totalFriends);
  const venue = useSelector(store => store.friends.venue);
  // yahya...it looks like your input onChange in FriendCreator.jsx is not firing for whatever reason :( -chris
  // yeah so if we did in here it would fire?
  // try testing it out! it's weird that even a simple console.log onChange is not firing correctly in the first place :\ everything looks correct..
  // i know im sorry  i feel like its something with the set up thats not making it interactive. i will try in this file then may just overhaul it
  // thanks so much for all your help!
  // of course, we're still trying to debug you can try for a bit and we'll be hands off so we don't keep messing you up
  // all good you guys can only help me at this point your never messing me up lol but will do!
  return (
    <div className="container">
      <div className="outerBox">
        <h1 id="header"> Let's Make it Happen</h1>
        <TotalsDisplay totalFriends={totalFriends} venue={venue} />
        <FriendContainer />
        {/* <input
          id="friend-location"
          value={3}
          onChange={() => console.log('changed!')}
        /> */}
        {/* not working here either */}
        {/* <Map /> */}
      </div>
    </div>
  );
};

export default MainContainer;
