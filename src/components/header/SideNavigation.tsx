import React from 'react';

import BurgerMenu from './BurgerMenu';

// TO DO: change to proper type
interface Props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavigation = ({ openMenu, setOpenMenu }: Props) => {
  const showMenu =
    'fixed right-0 top-0 h-screen w-1/2 overflow-y-auto bg-white transition ease-in-out delay-150 rounded-tl-3xl rounded-bl-3xl -mx-1';
  return (
    <nav className="2xl:hidden" onClick={() => setOpenMenu(!openMenu)}>
      {!openMenu ? (
        <BurgerMenu className={`${showMenu} translate-x-full`} />
      ) : (
        <BurgerMenu className={`${showMenu} translate-x-0 `} />
      )}
    </nav>
  );
};

export default SideNavigation;
