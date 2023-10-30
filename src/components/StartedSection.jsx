import "./StartedSection.css";
const StartedSection = () => {
  return (
    <div className="css-kWlJJe w-full h-[320px] xl:h-[300px] top-[50%] left-[50%] p-6 py-12 md:flex md:justify-center">
      <div className="max-w-[1150px]">
        <h2
          className="text-[28px] font-bold mb-6"
          style={{ lineHeight: "36px" }}
        >
          The Uber you know, reimagined for business
        </h2>
        <p className="mb-8">
          A platform for managing global rides and meals, and local deliveries,
          for companies of any size.
        </p>

        <button className="w-[135px] h-[48px] bg-black text-white rounded-[8px]">
          Get started
        </button>
      </div>
    </div>
  );
};

export default StartedSection;
