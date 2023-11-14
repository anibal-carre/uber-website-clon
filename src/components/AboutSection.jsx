import personIcon from "../assets/person-icon.svg";
import documentIcon from "../assets/document-icon.svg";
import homeIcon from "../assets/home-icon.svg";

const AboutSection = () => {
  return (
    <section className="w-full h-auto max-w-[1400px] flex flex-col md:flex-row md:flex-wrap lg:justify-between px-6 mt-20 text-[#333333]">
      <div className="md:max-w-[360px]">
        <img src={personIcon} alt="person-icon" className="mb-5" />
        <h3 className="font-semibold mb-5 text-[18px]">About us</h3>

        <p className="mb-5">
          Find out how we startes, what drives us, and how we're reimagining how
          the world moves.
        </p>

        <div className="flex flex-col mb-12 cursor-pointer">
          <span>Learn more about Uber</span>
          <div className="h-[1px] w-[170px] bg-zinc-400"></div>
        </div>
      </div>

      <div className="md:max-w-[360px]">
        <img src={documentIcon} alt="person-icon" className="mb-5" />
        <h3 className="font-semibold mb-5 text-[18px]">Newsroom</h3>

        <p className="mb-5">
          See announcements about our latest releases, initiatives, and
          partnerships.
        </p>

        <div className="flex flex-col mb-12 cursor-pointer">
          <span>Go to Newsroom</span>
          <div className="h-[1px] w-[125px] bg-zinc-400"></div>
        </div>
      </div>

      <div className="md:max-w-[360px]">
        <img src={homeIcon} alt="person-icon" className="mb-5" />
        <h3 className="font-semibold mb-5 text-[18px]">Global citizenship</h3>

        <p className="mb-5">
          Read about our commitment to making a positive impact in the cities we
          serve.
        </p>

        <div className="flex flex-col mb-12 cursor-pointer">
          <span>See our partnerships</span>
          <div className="h-[1px] w-[155px] bg-zinc-400"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
