import Review from '../review/review.component';
import { ReviewProvider } from '../../context/review.context';
import quotes from '../../images/bg-quotes.png';

const Reviews = () => {
  return (
    <section className='bg-darkBlue1 pt-[18rem] relative'>
      <div className='max-w-[119rem] mx-auto justify-center grid grid-cols-3 text-center gap-x-16 '>
        <ReviewProvider>
          <Review />
        </ReviewProvider>
        <img src={quotes} alt='' className='absolute top-[14rem] left-[11.5rem]' />
      </div>
    </section>
  );
};

export default Reviews;
