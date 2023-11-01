import driver from "../assets/driver.webp";
import city from "../assets/city.webp";
import StartedSection from "./StartedSection";
import { useState } from "react";

const HeroSection = () => {
  const [selectOption, setSelectOption] = useState("drive");

  const changeOption = (e) => {
    setSelectOption(e);
  };

  return (
    <section className="w-full h-auto flex flex-col text-black lg:relative items-center ">
      <div className="w-full max-w-[1400px] h-auto lg:h-[667px] lg:absolute flex justify-start items-center lg:pl-[120px]">
        <div className="w-full flex flex-col lg:w-[576px] lg:z-10 bg-white lg:h-[539px]">
          <div className="w-full flex lg:justify-center gap-8 lg:gap-20 px-4 border-b">
            <div
              onClick={() => changeOption("drive")}
              className="flex flex-col justify-center items-center w-[80px] lg:w-[20%] h-[130px] gap-4 cursor-pointer"
            >
              <img
                src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg"
                alt="Earn"
                role="presentation"
                aria-hidden="true"
                className="css-iTMoEO w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mr-4 mt-4"
              />
              <span className="w-[60px] h-[50px] font-medium text-[14px]">
                Drive or deliver
              </span>
            </div>
            <div
              onClick={() => changeOption("ride")}
              className="flex flex-col justify-center items-center w-[80px] lg:w-[20%] h-[130px] gap-4 cursor-pointer"
            >
              <img
                src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg"
                alt="Car"
                role="presentation"
                aria-hidden="true"
                className="css-iTMoEO w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mr-7 mt-4"
              />
              <span className="w-[60px] h-[50px] font-medium text-[14px]">
                Ride
              </span>
            </div>
            <div
              onClick={() => changeOption("rent")}
              className="flex flex-col justify-center items-center w-[80px] lg:w-[20%] h-[130px] gap-4 cursor-pointer"
            >
              <img
                src="https://www.uber-assets.com/image/upload/v1674075480/assets/27/7a50c1-0782-405e-947c-83a2f4d78137/original/keys_car_filled.svg"
                alt="key-car-filled-icon"
                role="presentation"
                aria-hidden="true"
                className="css-iTMoEO w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mr-5 mt-4"
              />
              <span className="w-[80px] h-[50px] font-medium text-[14px]">
                Rent your fleet
              </span>
            </div>
          </div>

          <div className="w-full flex gap-9 lg:px-[60px] lg:gap-[100px] px-5">
            <div
              className={
                selectOption === "drive"
                  ? "h-[3px] w-[70px] lg:w-[80px] bg-black"
                  : "h-[3px] w-[70px] lg:w-[80px] invisible"
              }
            ></div>
            <div
              className={
                selectOption === "ride"
                  ? "h-[3px] w-[70px] lg:w-[80px] bg-black"
                  : "h-[3px] w-[70px] lg:w-[80px] invisible"
              }
            ></div>
            <div
              className={
                selectOption === "rent"
                  ? "h-[3px] w-[70px] lg:w-[80px] bg-black"
                  : "h-[3px] w-[70px] lg:w-[80px] invisible"
              }
            ></div>
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
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <button className="self-start w-[160px] h-[48px] rounded-md bg-black text-white mb-4">
                Sign up to drive
              </button>

              <span>
                Learn more about driving and delivering
                <div className="w-[294px] h-[1px] bg-zinc-300"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[292px] md:h-[500px] lg:h-[667px] xl:h-[675px]">
        <img src={driver} alt="driver-img" className="w-full h-full" />
      </div>

      <StartedSection />
    </section>
  );
};

export default HeroSection;
