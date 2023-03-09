import React from 'react';

import Link from 'next/link';

import { PageLinkType } from '../../types/commonTypes';

const PageLink = (props: PageLinkType) => {
  const { text, navigation, className } = props;

  return (
    <Link key={navigation} href={`${navigation}`}>
      <a className={`${className} cursor-pointer`}>{text}</a>
    </Link>
  );
};

export default PageLink;
