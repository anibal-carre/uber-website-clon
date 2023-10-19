import driver from "../assets/driver.webp";
const HeroSection = () => {
  return (
    <section className="w-full flex flex-col text-black">
      <div className="w-full flex flex-col">
        <div className="w-full flex gap-8 px-4 border-b">
          <div className="flex flex-col justify-center items-center w-[80px] h-[130px] gap-4">
            <img
              src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg"
              alt="Earn"
              role="presentation"
              aria-hidden="true"
              className="css-iTMoEO w-[18px] h-[18px] mr-4"
            />
            <span className="w-[60px] h-[50px] font-medium text-[14px]">
              Drive or deliver
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[80px] h-[130px] gap-4">
            <img
              src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg"
              alt="Car"
              role="presentation"
              aria-hidden="true"
              className="css-iTMoEO w-[18px] h-[18px] mr-7"
            />
            <span className="w-[60px] h-[50px] font-medium text-[14px]">
              Ride
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[80px] h-[130px] gap-4">
            <img
              src="https://www.uber-assets.com/image/upload/v1674075480/assets/27/7a50c1-0782-405e-947c-83a2f4d78137/original/keys_car_filled.svg"
              alt="key-car-filled-icon"
              role="presentation"
              aria-hidden="true"
              className="css-iTMoEO w-[18px] h-[18px] mr-5"
            />
            <span className="w-[80px] h-[50px] font-medium text-[14px]">
              Rent your fleet
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col px-6 py-8">
          <h2
            className="font-bold text-[36px] mb-6"
            style={{ lineHeight: "44px" }}
          >
            Get in the driver's seat and get paid
          </h2>

          <p className="w-full mb-6">
            Drive on the platform with the largest network of active riders.
          </p>
          <button className="self-start w-[160px] h-[48px] rounded-md bg-black text-white mb-4">
            Sign up to drive
          </button>

          <span>
            Learn more about driving and delivering
            <div className="w-[294px] h-[1px] bg-zinc-300"></div>
          </span>
        </div>
      </div>
      <div className="border w-full h-[290px] md:h-[500px] 2xl:h-[660px]">
        <img src={driver} alt="driver-img" className="w-full h-full" />
      </div>
    </section>
  );
};

export default HeroSection;
