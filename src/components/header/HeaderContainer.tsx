import React, { useState } from 'react';

import PageLink from '../common/PageLink';
import SocialMedia from '../common/SocialMedia';
import BurgerIcon from '../svgs/BurgerIcon';
import SideNavigation from './SideNavigation';

const HeaderContainer = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full bg-slate-900">
      <header className="px-8 py-4 lg:px-24 2xl:px-32 3xl:w-9/12 3xl:m-auto max-w-screen-3xl">
        <div className="flex text-white justify-between items-center text-dp-bodytext-l-m w-full">
          <PageLink navigation={'/'} text={'Petya Ferreira'} />
          <PageLink
            navigation={'mailto:petianaidenova@gmail.com'}
            text={'Get in touch'}
            className="hidden lg:flex"
          />
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer lg:hidden"
          >
            <BurgerIcon width={25} height={17} fill={'white'} />
          </button>
          <SocialMedia
            width={25}
            height={25}
            fill={'white'}
            className="hidden lg:flex gap-x-4"
          />
        </div>
        <SideNavigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
    </div>
  );
};

export default HeaderContainer;
