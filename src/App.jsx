import './App.css';
import { ReactComponent as FyloLogo } from './images/logo-dark-mode.svg';

const App = () => {
  return (
    <div className='bg-darkMain text-whiteNeutral font-opensans'>
      <header className='max-w-[144rem] flex flex-row items-center justify-between mx-auto px-32 py-[7.3rem]'>
        <a href='#fylo'>
          <FyloLogo />
        </a>
        <nav className=''>
          <ul className='flex flex-row gap-[5.8rem] text-[1.6rem] items-center justify-center'>
            <li>
              <a href='#features'>Features</a>
            </li>
            <li>
              <a href='#team'>Team</a>
            </li>
            <li>
              <a href='#signin'>Sign in</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
