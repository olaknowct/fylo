import { ReactComponent as Location } from '../../images/icon-location.svg';
import { ReactComponent as Twtr } from '../../images/twitter.svg';
import { ReactComponent as Fb } from '../../images/facebook.svg';
import { ReactComponent as Ig } from '../../images/instagram.svg';
import { ReactComponent as Phone } from '../../images/icon-phone.svg';
import { ReactComponent as Email } from '../../images/icon-email.svg';
import { ReactComponent as FyloLogoDark } from '../../images/logo-dark-mode.svg';
import { ReactComponent as FyloLogoLight } from '../../images/logo-light-mode.svg';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkmode.context';

const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <footer className='bg-darkBlue2 dark:bg-white '>
      <div className=' pb-[12rem] px-[2rem] max-w-[124rem] mx-auto flex flex-col gap-14'>
        <a href='#fylo' className='md:mx-auto lg:mx-0'>
          {isDarkMode ? <FyloLogoLight /> : <FyloLogoDark />}
        </a>
        <nav className='grid md:grid-cols-4 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-7 text-2xl gap-y-16'>
          <p className='gap-12 md:col-span-2 lg:col-span-3 flex flex-row tracking-wide md:order-1 lg:order-1'>
            <Location className='self-start flex' />
            <span className='max-w-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </span>
          </p>
          <ul className='flex col-span-1 md:mr-auto lg:ml-auto flex-col gap-8 lg:order-2 md:order-2'>
            <li className='flex gap-6'>
              <Phone />
              +1-543-123-4567
            </li>
            <li className='flex gap-6'>
              <Email />
              example@fylo.com
            </li>
          </ul>
          <ul className='flex flex-col lg:ml-auto md:ml-auto md:col-span-2 lg:col-span-1 md:flex-row lg:flex-col gap-7 lg:order-3 md:order-4'>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className='flex flex-col lg:flex-col md:mr-auto lg:ml-auto md:flex-row gap-7 lg:order-4 md:order-3'>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul className='flex items-center justify-center flex-row md:mr-auto lg:ml-auto self-start gap-6 lg:order-5 md:order-5'>
            <li className='p-1 rounded-full border'>
              <Fb />
            </li>
            <li className='p-1 rounded-full border'>
              <Twtr />
            </li>

            <li className='p-1 rounded-full border'>
              <Ig />
            </li>
          </ul>
        </nav>
        <p class='text-center text-2xl mt-[4rem]'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href='https://github.com/olaknowct' className='text-accentCyan'>
            Christopher Olano
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
