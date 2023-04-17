import { FeatureProvider } from '../../context/feature.context';
import CallToAction from '../cta/cta.component';
import Features from '../features/features.component';
import Hero from '../hero/hero.component';

const Main = () => {
  return (
    <main>
      <Hero />
      <FeatureProvider>
        <Features />
      </FeatureProvider>
      <CallToAction />
    </main>
  );
};

export default Main;
