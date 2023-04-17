import Feature from '../feature/feature.component';
import { useContext } from 'react';
import { FeatureContext } from '../../context/feature.context';

const Features = () => {
  const { features } = useContext(FeatureContext);

  return (
    <section className='bg-darkBlue1'>
      <div className='max-w-[100rem] mx-auto justify-center grid grid-cols-2 grid-rows-2 text-center gap-y-32'>
        {features.map((feature) => (
          <Feature key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
