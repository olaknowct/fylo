import './App.css';
import Header from './component/header/header.component';
import Main from './component/main/main.component';
import { FeatureProvider } from './context/feature.context';

const App = () => {
  return (
    <div className='bg-darkBlue3 text-whiteNeutral font-opensans'>
      <Header />
      <FeatureProvider>
        <Main />
      </FeatureProvider>
    </div>
  );
};

export default App;
