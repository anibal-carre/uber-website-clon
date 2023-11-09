const Drive = () => {
  return (
    <div className="w-full flex flex-col px-10 py-8">
      <h2 className="font-bold text-[36px] mb-6 lg:text-[48px] leading-[44px] md:leading-[52px] lg:mt-3">
        Get in the driver's seat and get paid
      </h2>

      <p className="w-full mb-6 lg:mt-2">
        Drive on the platform with the largest network of active riders.
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-3 lg:flex-col lg:items-start lg:mt-2">
        <button className="self-start w-[160px] h-[48px] rounded-md bg-black text-white mb-4">
          Sign up to drive
        </button>

        <span className="lg:mt-3">
          Learn more about driving and delivering
          <div className="w-[294px] h-[1px] bg-zinc-300"></div>
        </span>
      </div>
    </div>
  );
};

export default Drive;
