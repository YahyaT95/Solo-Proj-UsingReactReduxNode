/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';
import LabeledText from './LabeledText';

const Friend = ({
  name,
  location,
  maxDist,
  // percentage,
  // addCard,
  // deleteCard,
}) => (
  <div className="friendBox">
    <LabeledText label="Friend ID" text={name} />
    <LabeledText label="Location" text={location} />
    <LabeledText label="Max Distance" text={maxDist} />
    {/* <LabeledText label="% of total" text={percentage} /> */}
    {/* <div className="flex">
      <button className='addCard' onClick={addCard}>+</button>
      <button className='deleteCard' onClick={deleteCard}>-</button>
    </div> */}
  </div>
);

export default Friend;
