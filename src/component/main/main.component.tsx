import { FeatureProvider } from '../../context/feature.context';
import Productive from '../productive/productive.component';
import Features from '../features/features.component';
import Hero from '../hero/hero.component';
import Reviews from '../reviews/reviews.component';
import CallToAction from '../cta/cta.component';

const Main = (): JSX.Element => {
  return (
    <main>
      <Hero />
      <FeatureProvider>
        <Features />
      </FeatureProvider>
      <Productive />
      <Reviews />
      <CallToAction />
    </main>
  );
};

export default Main;
