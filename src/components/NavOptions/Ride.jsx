import Arrow from "../icons/Arrow";

const Ride = () => {
  return (
    <div className="w-full flex flex-col px-8 py-8">
      <h2 className="font-bold text-[36px] mb-6 lg:text-[48px] leading-[44px] md:leading-[52px] lg:mt-3">
        Request a ride now
      </h2>

      <div className="flex w-full mb-10">
        <div className="w-[10%] flex flex-col items-end px-3 py-2 gap-1">
          <div className="w-[8px] h-[8px] border border-black rounded-full"></div>
          <div className="w-[1px] h-[50px] border-l border-black mr-[3px]"></div>
          <div className="w-[8px] h-[8px] border border-black"></div>
        </div>
        <div className="w-[80%] flex flex-col gap-7">
          <input
            type="text"
            className="h-8 w-full focus:border-transparent focus:outline-none"
            placeholder="Enter pickup location"
          />
          <input
            type="text"
            className="h-8 w-full focus:border-transparent focus:outline-none"
            placeholder="Enter destination"
          />
        </div>
        <div className="w-[10%]">
          <Arrow />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-3  lg:mt-2">
        <button className="self-start w-full lg:w-[160px] h-[48px] rounded-md bg-black text-white mb-4 font-bold hover:bg-zinc-800 hover:transition-all hover:delay-75">
          Request now
        </button>

        <button className="self-start w-full lg:w-[160px] h-[48px] rounded-md bg-white text-black mb-4 font-bold hover:bg-zinc-300 hover:transition-all hover:delay-75">
          Schedule for later
        </button>
      </div>
    </div>
  );
};

export default Ride;
