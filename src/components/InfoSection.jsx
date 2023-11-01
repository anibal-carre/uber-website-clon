const InfoSection = () => {
  return (
    <section className="w-full h-auto flex flex-col justify-center">
      <div className="flex flex-col w-full h-auto justify-center md:flex-row md:items-center md:pt-16">
        <div className="max-w-[1400px] flex flex-col pt-10 md:pt-0 px-6 text-[#333333]">
          <h2 className="font-bold text-[32px] mb-8 leading-[36px]">
            Focused on safety, wherever you go
          </h2>

          <div className="w-full h-auto flex flex-col md:w-[558px]">
            <img
              className="mb-5 md:hidden"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1026,h_684/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
              alt="driver"
            />
            <img
              className="hidden md:flex w-[558px] h-[372px]"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
              alt="driver"
            />
            <span className="text-[18px] font-[500] mb-3">
              Our commitment to your safety
            </span>
            <p className="mb-10">
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </p>

            <div className="flex flex-col mb-4 cursor-pointer">
              <span>Read about our Community Guidelines</span>
              <div className="h-[1px] w-[290px] bg-zinc-400"></div>
            </div>

            <div className="flex flex-col cursor-pointer">
              <span>See all safety features</span>
              <div className="h-[1px] w-[165px] bg-zinc-400"></div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-0 px-6">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1026,h_684/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
            alt="cars"
            className="mb-4 md:hidden"
          />

          <img
            className="hidden md:flex"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
            alt="cars"
          />

          <span className="text-[18px] font-[500]">
            Setting 10,000+ cities in motion
          </span>

          <p className="mt-4 mb-8">
            The app is available in thousands of cities worldwide, so you can
            request a ride even when you're far from home.
          </p>

          <div className="flex flex-col cursor-pointer">
            <span>View all cities</span>
            <div className="h-[1px] w-[100px] bg-zinc-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
