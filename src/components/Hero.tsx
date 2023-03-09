import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <h2 className="text-center">HI, I am Petya Naydenova Ferreira.</h2>
      <div className="relative w-full h-96 lg:h-[500px] mt-5">
        <Image
          src="/images/hero.jpg"
          alt="Petya on a riverbridge in Balkan mountain"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3>LETS PLAY TOGETHER</h3>
    </section>
  );
};

export default Hero;
