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
      <div className=' py-[20rem] max-w-[120rem] mx-auto flex flex-col gap-14'>
        <a href='#fylo'>
          <FyloLogo />
        </a>
        <nav className='flex text-2xl flex-row justify-between'>
          <p className=' gap-12 flex flex-row tracking-wide'>
            <Location />
            <span className='max-w-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </span>
          </p>
          <ul className='flex flex-col gap-8'>
            <li className='flex gap-6'>
              <Phone />
              +1-543-123-4567
            </li>
            <li className='flex gap-6'>
              <Email />
              example@fylo.com
            </li>
          </ul>
          <ul className='flex flex-col gap-7'>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className='flex flex-col gap-7'>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul className='flex items-center justify-center flex-row self-start  gap-6'>
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
