const CallToAction = () => {
  return (
    <section className='bg-darkBlue2 px-[2rem] dark:bg-white'>
      <div className='mx-auto px-[2rem] max-w-[86rem] bg-darkBlue shadow-lg text-white text-center -translate-y-2/4 py-16 flex flex-col items-center gap-8'>
        <h2 className='font-bold text-[3rem] tracking-wide'>Get early access today</h2>
        <p className='text-[1.4rem] max-w-5xl mx-auto'>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you
          have any questions, our support team would be happy to help you. lorem
        </p>
        <form className='flex flex-row max-w-[71rem] justify-between w-full gap-10 mt-[2rem] mb-[4rem]'>
          <input
            type='text'
            placeholder='email@example.com'
            className='py-[1.5rem] rounded-full grow pl-10 text-black'
          />
          <button className='bg-accentCyan rounded-full text-[1.5rem] px-12 ml-auto hover:opacity-70 '>
            Get Started For Free
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
