import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="py-28">
      <div className=" flex flex-col lg:flex-row gap-10">
        <div className="w-full h-fit lg:w-1/2 relative md:mb-20 lg:mb-0">
          <img src={person} className="w-full md:w-5/6 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 hidden md:block absolute -bottom-20  right-5 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className=" text-[#FF3811] font-bold text-lg">About Us</h3>
          <h1 className="text-5xl font-bold max-w-sm text-[#151515] ">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <button className="py-3 px-4 font-medium rounded-md bg-[#FF3811] text-white border border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]  duration-300 mr-3">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
