import { useEffect } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-28">
      <div className="text-center space-y-5">
        <h3 className="text-[#FF3811] font-bold text-xl">Services</h3>
        <h2 className="text-[#151515] text-5xl font-bold">Our Service Area</h2>
        <p className="max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {services?.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
      <div className="text-center ">
        <button className="py-3 px-4 font-medium rounded-md bg-transparent text-[#FF3811] border border-[#FF3811] hover:bg-[#FF3811] hover:text-white  duration-300 ">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
