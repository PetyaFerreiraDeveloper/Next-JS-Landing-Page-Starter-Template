import React from 'react';

// import Image from 'next/image';

import Hero from '../components/Hero';
import { Meta } from '../layout/Meta';

const Index = () => {
  return (
    <div className="h-screen">
      <Meta
        title="PetyaFerreira"
        description="Hello from me - Petya Ferreira. This is my portfolio. Enjoy the read"
      />
      <Hero />
      {/* <section className="flex flex-col justify-center items-center h-full bg-red-500">
        <h1 className="">My portfolio</h1>
        <div className="w-full">
          <Image
            src="/images/pic.jpg"
            width="75px"
            height="100px"
            className="width-full"
          />
        </div>
      </section> */}
    </div>
  );
};

export default Index;
