/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React from 'react';
import MainContainer from './containers/MainContainer';

const App = () => (
  <div id="app">
    <MainContainer />
    <input
      id="location"
      value={3}
      onChange={() => console.log('changed!')}
    />
    {/* doesnt work here either */}
  </div>
);

export default App;
