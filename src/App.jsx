import './App.css';
import Header from './component/header/header.component';
import Main from './component/main/main.component';

const App = () => {
  return (
    <div className='bg-darkBlue3 text-whiteNeutral font-opensans'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
