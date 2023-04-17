import { FeatureProvider } from '../../context/feature.context';
import Productive from '../productive/productive.component';
import Features from '../features/features.component';
import Hero from '../hero/hero.component';
import Reviews from '../reviews/reviews.component';

const Main = () => {
  return (
    <main>
      <Hero />
      <FeatureProvider>
        <Features />
      </FeatureProvider>
      <Productive />
      <Reviews />
    </main>
  );
};

export default Main;
