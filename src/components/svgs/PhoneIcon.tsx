import React from 'react';

import { IconType } from '../../types/commonTypes';

const PhoneIcon = (props: IconType) => {
  const { width, height, fill } = props;
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M15.17 20.08a5.19 5.19 0 0 1-2.8-.82A41.58 41.58 0 0 1 1.18 8.11a5.18 5.18 0 0 1 .71-6.5L2.5 1a2.23 2.23 0 0 1 3.06 0l2.7 2.7a2.13 2.13 0 0 1 .63 1.52 2.17 2.17 0 0 1-.62 1.52.8.8 0 0 0-.2.29.88.88 0 0 0-.07.3 1 1 0 0 0 .07.33.83.83 0 0 0 .19.27l4.25 4.26a.92.92 0 0 0 1.23 0 2.23 2.23 0 0 1 3 0l2.7 2.68a2.19 2.19 0 0 1 0 3.06l-.65.63a5.09 5.09 0 0 1-3.1 1.5 5.44 5.44 0 0 1-.52.02Zm-2.09-1.91a3.88 3.88 0 0 0 4.85-.54l.64-.63a.86.86 0 0 0 .24-.6.9.9 0 0 0-.25-.62l-2.7-2.67a.88.88 0 0 0-1.21 0 2.23 2.23 0 0 1-3.05 0L7.34 8.85a2.06 2.06 0 0 1-.47-.69 2.2 2.2 0 0 1-.17-.83 2.12 2.12 0 0 1 .17-.83 2 2 0 0 1 .48-.71.86.86 0 0 0 .24-.6.88.88 0 0 0-.25-.61L4.65 1.9a.92.92 0 0 0-1.23 0l-.61.63a3.85 3.85 0 0 0-.54 4.86 40.17 40.17 0 0 0 10.81 10.78Z" />
    </svg>
  );
};

export default PhoneIcon;
