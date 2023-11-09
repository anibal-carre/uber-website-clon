import driver from "../assets/driver.webp";
import ride from "../assets/ride.webp";
import rent from "../assets/rent.webp";
import StartedSection from "./StartedSection";
import { useState } from "react";
import InfoSection from "./InfoSection";
import Drive from "./NavOptions/Drive";
import Ride from "./NavOptions/Ride";
import Rent from "./NavOptions/Rent";

const HeroSection = () => {
  const [selectOption, setSelectOption] = useState("ride");

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
                  ? "h-[4px] w-[70px] lg:w-[80px] bg-black"
                  : "h-[4px] w-[70px] lg:w-[80px] invisible"
              }
            ></div>
            <div
              className={
                selectOption === "ride"
                  ? "h-[4px] w-[70px] lg:w-[80px] bg-black"
                  : "h-[4px] w-[70px] lg:w-[80px] invisible"
              }
            ></div>
            <div
              className={
                selectOption === "rent"
                  ? "h-[4px] w-[70px] lg:w-[80px] bg-black"
                  : "h-[4px] w-[70px] lg:w-[80px] invisible"
              }
            ></div>
          </div>
          {selectOption === "drive" ? <Drive /> : ""}
          {selectOption === "ride" ? <Ride /> : ""}
          {selectOption === "rent" ? <Rent /> : ""}
        </div>
      </div>
      <div className="w-full h-[292px] md:h-[500px] lg:h-[667px] xl:h-[675px]">
        {selectOption === "drive" ? (
          <img src={driver} alt="driver-img" className="w-full h-full" />
        ) : (
          ""
        )}

        {selectOption === "ride" ? (
          <img src={ride} alt="driver-img" className="w-full h-full" />
        ) : (
          ""
        )}

        {selectOption === "rent" ? (
          <img src={rent} alt="driver-img" className="w-full h-full" />
        ) : (
          ""
        )}
      </div>

      <StartedSection />
      <InfoSection />
    </section>
  );
};

export default HeroSection;
