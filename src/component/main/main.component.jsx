import { ReactComponent as CurvyDark } from '../../images/bg-curvy-dark-mode.svg';
import IllustrationIntro from '../../images/illustration-intro.png';

const Main = () => {
  return (
    <main className='max-w-[144rem] mx-auto'>
      <section className='pb-[16.5rem]'>
        <figure className='relative z-0 flex flex-col items-center justify-center text-center font-bold gap-[3.8rem]'>
          <img src={IllustrationIntro} alt='illustration intro' />
          <figcaption className='tracking-[0.01rem] flex flex-col justify-center items-center gap-[3.3rem]'>
            <h1 className='font-sans text-[4rem] max-w-6xl mx-auto '>
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className='text-[2rem] font-thin max-w-[60rem] mx-auto'>
              Fylo stores all your most important files in one secure location. Access them wherever
              you need, share and collaborate with friends family, and co-workers.
            </p>
            <button className='bg-accentBlue text-[1.6rem] py-[1.5rem] px-[9.5rem] rounded-full'>
              Get Started
            </button>
          </figcaption>
          <CurvyDark className='absolute -z-10 bottom-[-19rem]' />
        </figure>
      </section>
    </main>
  );
};

export default Main;
