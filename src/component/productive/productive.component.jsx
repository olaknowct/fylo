import StayProductive from '../../images/illustration-stay-productive.png';
import { ReactComponent as Arrow } from '../../images/icon-arrow.svg';

const Productive = () => {
  return (
    <section className='bg-darkBlue1'>
      <div className='max-w-[127rem] px-[2rem] mx-auto pt-[14rem]'>
        <figure className='flex flex-col lg:flex-row gap-20 justify-center items-center '>
          <img src={StayProductive} alt='Stay Productive' />
          <figcaption className='flex flex-col gap-6 pt-[3rem] pl-[0.6rem]'>
            <h2 className='text-[4rem] leading-[5rem] max-w-2xl font-bold '>
              Stay productive, wherever you are
            </h2>
            <p className='text-[1.6rem]'>
              Never let location be an issue when accessing your files. Fylo has you covered for all
              of your file storage needs.
            </p>
            <p className='text-[1.6rem]'>
              Securely share files and folders with friends, family and colleagues for live
              collaboration. No email attachments required
            </p>
            <a
              href='#home'
              className='text-accentCyan text-[1.6rem] border-b border-accentCyan self-start py-2 flex flex-row items-center gap-2'
            >
              <span>See how Fylo works</span>
              <Arrow className='inline ' />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Productive;
