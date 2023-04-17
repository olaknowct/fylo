import Icon from '../icons/icon.component';

const Feature = ({ feature }) => {
  const { title, description, svg } = feature;

  return (
    <figure className='relative z-10 flex flex-col gap-9'>
      <div className='flex items-center justify-center h-[9rem]'>
        <Icon type={svg} />
      </div>
      <figcaption className='max-w-xl mx-auto flex flex-col gap-4'>
        <h4 className='text-[1.8rem] font-bold'>{title}</h4>
        <p className='text-[1.4rem] font-thin'>{description}</p>
      </figcaption>
    </figure>
  );
};

export default Feature;
