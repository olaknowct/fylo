import { useContext } from 'react';
import { ReactComponent as AccessAnywhere } from '../../images/icon-access-anywhere.svg';
import { ReactComponent as AnyFile } from '../../images/icon-any-file.svg';
import { ReactComponent as Colab } from '../../images/icon-collaboration.svg';
import { ReactComponent as Security } from '../../images/icon-security.svg';
import IllustrationIntro from '../../images/illustration-intro.png';
import { FeatureContext } from '../../context/feature.context';

const Main = () => {
  const { features } = useContext(FeatureContext);

  const Icons = {
    AccessAnywhere,
    AnyFile,
    Colab,
    Security,
  };

  const Icon = ({ type }) => {
    const Component = type;
    return <Component />;
  };

  return (
    <main className=''>
      <section className='pb-[16.5rem] bg-curvy-dark-mode bg-contain bg-no-repeat bg-bottom'>
        <figure className='max-w-[144rem] mx-auto flex flex-col items-center justify-center text-center font-bold gap-[3.8rem]'>
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
        </figure>
      </section>
      <section className='bg-darkBlue1'>
        <div className='max-w-[100rem] mx-auto justify-center grid grid-cols-2 grid-rows-2 text-center gap-y-32'>
          {features.map(({ title, description, svg, id }) => {
            return (
              <figure key={id} className='relative z-10 flex flex-col gap-9'>
                <div className='flex items-center justify-center h-[9rem]'>
                  <Icon type={Icons[svg]} />
                </div>
                <figcaption className='max-w-xl mx-auto flex flex-col gap-4'>
                  <h4 className='text-[1.8rem] font-bold'>{title}</h4>
                  <p className='text-[1.4rem] font-thin'>{description}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
