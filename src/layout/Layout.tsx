import React from 'react';

import Footer from '../components/footer/FooterContainer';
import HeaderContainer from '../components/header/HeaderContainer';

type LayoutProps = {
  children: React.ReactNode;
  className: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={className}>
      <HeaderContainer />
      <main className="grow px-8 lg:px-24 2xl:px-32 3xl:w-9/12 3xl:m-auto max-w-screen-3xl">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
