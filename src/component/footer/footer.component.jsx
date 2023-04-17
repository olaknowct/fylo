import { ReactComponent as FyloLogo } from '../../images/logo-dark-mode.svg';
import { ReactComponent as Location } from '../../images/icon-location.svg';
import { ReactComponent as Twtr } from '../../images/twitter.svg';
import { ReactComponent as Fb } from '../../images/facebook.svg';
import { ReactComponent as Ig } from '../../images/instagram.svg';
import { ReactComponent as Phone } from '../../images/icon-phone.svg';
import { ReactComponent as Email } from '../../images/icon-email.svg';

const Footer = () => {
  return (
    <footer className='bg-darkBlue2'>
      <div className=' py-[20rem] px-[2rem] max-w-[124rem] mx-auto flex flex-col gap-14'>
        <a href='#fylo' className='md:mx-auto lg:mx-0'>
          <FyloLogo />
        </a>
        <nav className='grid grid-cols-6 text-2xl '>
          <p className='gap-12 col-span-2 flex flex-row tracking-wide'>
            <Location className='self-start flex' />
            <span className='max-w-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </span>
          </p>
          <ul className='flex col-span-1 ml-auto flex-col gap-8'>
            <li className='flex gap-6'>
              <Phone />
              +1-543-123-4567
            </li>
            <li className='flex gap-6'>
              <Email />
              example@fylo.com
            </li>
          </ul>
          <ul className='flex ml-auto flex-col gap-7'>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className='flex flex-col ml-auto gap-7'>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul className='flex items-center justify-center flex-row ml-auto self-start gap-6'>
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
      </div>
    </footer>
  );
};

export default Footer;
