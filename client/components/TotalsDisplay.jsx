/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';
import LabeledText from './LabeledText';

const TotalsDisplay = ({
  totalFriends,
  venue,
  // syncMarkets,
  // synced,
}) => (
  <div className="innerbox" id="totals">
    <div>
      <LabeledText label="Total Friends Going" text={totalFriends} />
      <LabeledText label="Venue" text={venue} />
    </div>

  </div>
);
export default TotalsDisplay;
