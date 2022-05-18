import React from 'react';

import Link from 'next/link';

import { PageLinkType } from '../../types/commonTypes';

const PageLink = (props: PageLinkType) => {
  const { page, navigation, className } = props;

  return (
    <Link key={navigation} href={`${navigation}`}>
      <a className={className}>{page}</a>
    </Link>
  );
};

export default PageLink;
