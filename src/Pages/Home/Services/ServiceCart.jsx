import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="w-full border  rounded-lg">
      <figure className="px-6 pt-6">
        <img src={img} alt="photo" className="rounded-lg h-[210px] w-full" />
      </figure>
      <div className="p-6">
        <h2 className="text-[#444] font-bold text-2xl">{title}</h2>
        <div className="flex justify-between items-center py-4 text-[#FF3811] font-semibold text-xl">
          <p>Price: ${price}</p>
          <Link>
            <BiRightArrowAlt className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCart.propTypes = {
  service: PropTypes.object,
};

export default ServiceCart;
