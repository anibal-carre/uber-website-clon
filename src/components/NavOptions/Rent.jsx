const Rent = () => {
  return (
    <div className="w-full flex flex-col px-10 py-8">
      <h2 className="font-bold text-[36px] mb-6 lg:text-[48px] leading-[44px] md:leading-[52px] lg:mt-3">
        Make money by renting out your car
      </h2>

      <p className="w-full mb-6 lg:mt-2">
        Connect with thousands of drivers and earn more per week with Uber's
        free fleet management tools.
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-3 lg:flex-col lg:items-start lg:mt-2">
        <button className="self-start w-[160px] h-[48px] rounded-md bg-black text-white mb-4">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Rent;
