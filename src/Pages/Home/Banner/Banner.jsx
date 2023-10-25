import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={banner1} className="w-full rounded-xl" />
        <div className="absolute h-full w-full flex items-center rounded-xl  gap-5 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 w-full md:w-1/2 lg:w-[470px] pl-6  lg:pl-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="py-3 px-4 font-medium rounded-md bg-[#FF3811] text-white border border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]  duration-300 mr-3">
                Discover More
              </button>
              <button className="py-3 px-4 font-medium rounded-md bg-transparent text-white border border-white hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5 mr-10 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-xl" />
        <div className="absolute h-full w-full flex items-center  gap-5 rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 w-full md:w-1/2 lg:w-[470px] pl-6  lg:pl-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="py-3 px-4 font-medium rounded-md bg-[#FF3811] text-white border border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]  duration-300 mr-3">
                Discover More
              </button>
              <button className="py-3 px-4 font-medium rounded-md bg-transparent text-white border border-white hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5 mr-10 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-xl" />
        <div className="absolute h-full w-full flex items-center  gap-5 rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 w-full md:w-1/2 lg:w-[470px] pl-6  lg:pl-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="py-3 px-4 font-medium rounded-md bg-[#FF3811] text-white border border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]  duration-300 mr-3">
                Discover More
              </button>
              <button className="py-3 px-4 font-medium rounded-md bg-transparent text-white border border-white hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5 mr-10 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-xl" />
        <div className="absolute h-full  w-full flex items-center  gap-5 rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 w-full md:w-1/2 lg:w-[470px] pl-6  lg:pl-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="py-3 px-4 font-medium rounded-md bg-[#FF3811] text-white border border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]  duration-300 mr-3">
                Discover More
              </button>
              <button className="py-3 px-4 font-medium rounded-md bg-transparent text-white border border-white hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5 mr-10 ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={banner5} className="w-full rounded-xl" />
        <div className="absolute h-full w-full flex items-center  gap-5 rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 w-full md:w-1/2 lg:w-[470px] pl-6  lg:pl-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="py-3 px-4 font-medium rounded-md bg-[#FF3811] text-white border border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]  duration-300 mr-3">
                Discover More
              </button>
              <button className="py-3 px-4 font-medium rounded-md bg-transparent text-white border border-white hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5 mr-10 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={banner6} className="w-full rounded-xl" />
        <div className="absolute h-full w-full flex items-center  gap-5 rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 w-full md:w-1/2 lg:w-[470px] pl-6  lg:pl-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="py-3 px-4 font-medium rounded-md bg-[#FF3811] text-white border border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]  duration-300 mr-3">
                Discover More
              </button>
              <button className="py-3 px-4 font-medium rounded-md bg-transparent text-white border border-white hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5 mr-10 ">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
