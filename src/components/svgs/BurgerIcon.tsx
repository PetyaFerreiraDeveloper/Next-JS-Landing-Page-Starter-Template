import React from 'react';

import { IconType } from '../../types/commonTypes';

const BurgerIcon = (props: IconType) => {
  const { width, height, fill } = props;
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 17"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M0 0h24.48v2H0zM0 7.47h24.48v2H0zM0 14.54h24.48v2H0z" />
    </svg>
  );
};

export default BurgerIcon;
