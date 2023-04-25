import './App.css';
import Footer from './component/footer/footer.component';
import Header from './component/header/header.component';
import Main from './component/main/main.component';

const App = () => {
  return (
    <div className='bg-darkBlue3 text-whiteNeutral font-opensans dark:bg-white text-white dark:text-darkBlue'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
