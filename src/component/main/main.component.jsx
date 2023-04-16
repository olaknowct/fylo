import { ReactComponent as CurvyDark } from '../../images/bg-curvy-dark-mode.svg';
import { ReactComponent as AccessAnywhere } from '../../images/icon-access-anywhere.svg';
import { ReactComponent as Security } from '../../images/icon-security.svg';
import IllustrationIntro from '../../images/illustration-intro.png';

const Main = () => {
  return (
    <main className='max-w-[144rem] mx-auto'>
      <section className='pb-[16.5rem] '>
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
      <section className='bg-darkBlue1 '>
        <div className='max-w-[100rem] mx-auto justify-center grid grid-cols-2'>
          <figure className='relative z-10 flex flex-col '>
            <div className='flex items-center justify-center h-[9rem]'>
              <AccessAnywhere className='' />
            </div>
            <figcaption>
              <h4>Access your file from anywhere</h4>
              <p>
                The ability to use a smartphone, tablet, or computer to access your account means
                your files follow you everywhere.
              </p>
            </figcaption>
          </figure>
          <figure className='relative z-10 flex flex-col '>
            <div className='flex items-center justify-center h-[9rem]'>
              <Security className='' />
            </div>
            <figcaption>
              <h4>Access your file from anywhere</h4>
              <p>
                The ability to use a smartphone, tablet, or computer to access your account means
                your files follow you everywhere.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Main;
