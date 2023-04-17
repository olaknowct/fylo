import { useContext } from 'react';
import { ReviewContext } from '../../context/review.context';
import Satish from '../../images/profile-1.jpg';
import Bruce from '../../images/profile-2.jpg';
import Iva from '../../images/profile-3.jpg';

const Review = () => {
  const { reviews } = useContext(ReviewContext);

  const Profile = {
    Satish,
    Bruce,
    Iva,
  };

  return reviews.map(({ id, name, reviews, position }) => (
    <figure className='relative z-10 flex flex-col gap-9 bg-darkBlue3 py-16 px-10 rounded-2xl shadow-xl shadow-darkBlue3'>
      <p className='text-[1.5rem]  text-left leading-2'>{reviews}</p>
      <div className='flex flex-row gap-2 items-center'>
        <img key={id} src={Profile[name.split(' ')[0]]} alt={name} className='rounded-full h-12' />
        <figcaption className='text-left'>
          <h5 className='font-bold '>{name}</h5>
          <p className='text-[0.8rem]'>{position}</p>
        </figcaption>
      </div>
    </figure>
  ));
};

export default Review;
