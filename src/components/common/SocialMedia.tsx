import React from 'react';

import { IconType } from '../../types/commonTypes';
import GithubIcon from '../svgs/GithubIcon';
import LinkedinIcon from '../svgs/LinkedinIcon';
import YoutubeIcon from '../svgs/YoutubeIcon';

const SocialMedia = (props: IconType) => {
  const { width, height, fill, className } = props;

  return (
    <section className={`${className}`}>
      <a
        href="https://www.linkedin.com/in/petyaferreira/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon width={width} height={height} fill={fill} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCt1QTbHaFvCWsAsR34jLzrQ"
        target="_blank"
        rel="noreferrer"
      >
        <YoutubeIcon width={width} height={height} fill={fill} />
      </a>
      <a
        href="https://github.com/PetyaFerreiraDeveloper"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon width={width} height={height} fill={fill} />
      </a>
    </section>
  );
};

export default SocialMedia;
