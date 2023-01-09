import React from 'react';

import SocialMedia from '../common/SocialMedia';
import CloseIcon from '../svgs/CloseIcon';

interface Props {
  className: string;
}

const BurgerMenu = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="flex justify-between border-b-[3px] border-dp-grayscale-300 px-8 py-8 h-[88px] md:h-[91px]">
        <h2></h2>
        <CloseIcon
          width={25}
          height={25}
          fill={'black'}
          className="cursor-pointer "
        />
      </div>
      <nav className="flex flex-col space-y-4 border-b-[3px] px-6 pt-6 pb-10">
        <h1 className="font-bold text-dp-headline-6-m">Get in touch</h1>
        <SocialMedia width={25} height={25} className="flex gap-x-5" />
      </nav>
    </div>
  );
};

export default BurgerMenu;
