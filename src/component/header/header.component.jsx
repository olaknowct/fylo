import { useContext } from 'react';
import { ReactComponent as FyloLogoDark } from '../../images/logo-dark-mode.svg';
import { ReactComponent as FyloLogoLight } from '../../images/logo-light-mode.svg';
import { DarkModeContext } from '../../context/darkmode.context';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className='max-w-[144rem] flex flex-col md:flex-row items-center justify-between mx-auto px-32 py-[7.3rem]'>
      <a href='#fylo'>{isDarkMode ? <FyloLogoLight /> : <FyloLogoDark />}</a>
      <DarkModeSwitch
        className='ml-auto mr-auto self-center'
        checked={isDarkMode}
        onChange={toggleDarkMode}
        sunColor={'hsl(216, 53%, 9%)'}
        moonColor={'hsl(176, 68%, 64%)'}
        size={50}
      />
      <nav className=''>
        <ul className='md:flex flex-row gap-[5.8rem] text-[1.6rem] items-center justify-center hidden '>
          <li className='group'>
            <a href='#features'>
              Features
              <span class='block mt-2 mx-2 opacity-0 group-hover:opacity-100 transition-all duration-500 h-0.5 bg-white'></span>
            </a>
          </li>
          <li className='group'>
            <a href='#team'>Team</a>
            <span class='block mt-2 mx-2 opacity-0 group-hover:opacity-100 transition-all duration-500 h-0.5 bg-white'></span>
          </li>
          <li className='group'>
            <a href='#signin'>
              Sign in
              <span class='block mt-2 mx-2 opacity-0 group-hover:opacity-100 transition-all duration-500 h-0.5 bg-white'></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
