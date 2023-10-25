import { MdDateRange } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div className="w-full bg-[#151515] text-white py-20 flex flex-col md:flex-row gap-5 justify-evenly  items-center  rounded-xl ">
      <div className=" flex gap-3 items-center">
        <MdDateRange className="text-5xl" />
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className=" flex gap-3 items-center">
        <MdWifiCalling3 className="text-5xl" />
        <div>
          <p>Have a question?</p>
          <h3 className="text-2xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className=" flex gap-3 items-center">
        <CiLocationOn className="text-5xl" />
        <div>
          <p>Need a repair? our address</p>
          <h3 className="text-2xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
