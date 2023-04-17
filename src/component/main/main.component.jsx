import { FeatureProvider } from '../../context/feature.context';
import Features from '../features/features.component';
import Hero from '../hero/hero.component';

const Main = () => {
  return (
    <main>
      <Hero />
      <FeatureProvider>
        <Features />
      </FeatureProvider>
    </main>
  );
};

export default Main;
