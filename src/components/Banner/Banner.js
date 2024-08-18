import React from 'react';

function Banner({ status, children }) {
  let classList = `${status} banner`;

  return <div className={classList}>{children}</div>;
}

export default Banner;
