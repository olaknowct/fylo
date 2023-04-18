import IllustrationIntro from '../../images/illustration-intro.png';

const Hero = () => {
  return (
    <section className='pb-[16.5rem] bg-curvy-dark-mode dark:bg-curvy-light-mode bg-contain bg-no-repeat bg-bottom'>
      <figure className='max-w-[144rem] px-[2rem] mx-auto flex flex-col items-center justify-center text-center font-bold gap-[3.8rem]'>
        <img src={IllustrationIntro} alt='illustration intro' />
        <figcaption className='tracking-[0.01rem] flex flex-col justify-center items-center gap-[3.3rem]'>
          <h1 className='font-sans text-[4rem] max-w-6xl mx-auto '>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className='text-[2rem] font-thin max-w-[60rem] mx-auto'>
            Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.
          </p>
          <button className='bg-accentCyan text-[1.6rem] py-[1.5rem] px-[9.5rem] rounded-full hover:opacity-80 dark:text-white'>
            Get Started
          </button>
        </figcaption>
      </figure>
    </section>
  );
};

export default Hero;
