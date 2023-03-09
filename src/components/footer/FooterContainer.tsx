import React from 'react';

import SocialMedia from '../common/SocialMedia';

const FooterContainer = () => {
  return (
    <div className="w-full bg-slate-900 bottom-0 min-h-[50px]">
      <footer className="flex flex-col bg-slate-900 gap-y-4 text-white py-4 px-8 lg:px-20 xl:px-28 3xl:w-9/12 3xl:m-auto max-w-screen-3xl">
        <SocialMedia
          width={25}
          height={25}
          fill={'white'}
          className="flex justify-center gap-x-10"
        />
        <p className="self-center">&copy; Copyright Petya Ferreira 2022</p>
      </footer>
    </div>
  );
};

export default FooterContainer;
