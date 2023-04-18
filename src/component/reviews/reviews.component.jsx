import Review from '../review/review.component';
import { ReviewProvider } from '../../context/review.context';
import quotes from '../../images/bg-quotes.png';

const Reviews = () => {
  return (
    <section className='bg-darkBlue1 pt-[18rem] pb-[33.6rem] relative dark:bg-gray-50'>
      <div className='max-w-[123rem] px-[2rem] mx-auto gap-y-10 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-x-16 '>
        <ReviewProvider>
          <Review />
        </ReviewProvider>
        <img src={quotes} alt='' className='absolute top-[14rem] left-[11.5rem]' />
      </div>
    </section>
  );
};

export default Reviews;
