// import img1 from "../../../assets/images/products/1.png";
// import img2 from "../../../assets/images/products/2.png";
// import img3 from "../../../assets/images/products/3.png";
// import img4 from "../../../assets/images/products/4.png";
// import img5 from "../../../assets/images/products/5.png";
// import img6 from "../../../assets/images/products/6.png";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-28">
      <div className="text-center space-y-5">
        <h3 className="text-[#FF3811] font-bold text-xl">Popular Products</h3>
        <h2 className="text-[#151515] text-5xl font-bold">
          Browse Our Products
        </h2>
        <p className="max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
        {/* <div className="w-full border  rounded-lg p-4 text-center">
          <figure className="h-56 px-6 bg-base-200 rounded-lg flex justify-center items-center">
            <img src={img1} alt="photo" className="w-40 h-40" />
          </figure>
          <div className="pt-6">
            <h2 className="text-[#444] font-bold text-2xl">Cools Led Light</h2>
            <div className="py-2 text-[#FF3811] font-semibold text-xl">
              <p>Price: $ 20.0</p>
            </div>
          </div>
        </div>
        <div className="w-full border  rounded-lg p-4 text-center">
          <figure className="h-56 px-6 bg-base-200 rounded-lg flex justify-center items-center">
            <img src={img2} alt="photo" className="w-40 h-40" />
          </figure>
          <div className="pt-6">
            <h2 className="text-[#444] font-bold text-2xl">Cools Led Light</h2>
            <div className="py-2 text-[#FF3811] font-semibold text-xl">
              <p>Price: $ 20.0</p>
            </div>
          </div>
        </div>
        <div className="w-full border  rounded-lg p-4 text-center">
          <figure className="h-56 px-6 bg-base-200 rounded-lg flex justify-center items-center">
            <img src={img3} alt="photo" className="w-40 h-40" />
          </figure>
          <div className="pt-6">
            <h2 className="text-[#444] font-bold text-2xl">Car Air Filter</h2>
            <div className="py-2 text-[#FF3811] font-semibold text-xl">
              <p>Price: $ 20.0</p>
            </div>
          </div>
        </div>
        <div className="w-full border  rounded-lg p-4 text-center">
          <figure className="h-56 px-6 bg-base-200 rounded-lg flex justify-center items-center">
            <img src={img4} alt="photo" className="w-40 h-40" />
          </figure>
          <div className="pt-6">
            <h2 className="text-[#444] font-bold text-2xl">Cools Led Light</h2>
            <div className="py-2 text-[#FF3811] font-semibold text-xl">
              <p>Price: $ 20.0</p>
            </div>
          </div>
        </div>
        <div className="w-full border  rounded-lg p-4 text-center">
          <figure className="h-56 px-6 bg-base-200 rounded-lg flex justify-center items-center">
            <img src={img5} alt="photo" className="w-40 h-40" />
          </figure>
          <div className="pt-6">
            <h2 className="text-[#444] font-bold text-2xl">Cools Led Light</h2>
            <div className="py-2 text-[#FF3811] font-semibold text-xl">
              <p>Price: $ 20.0</p>
            </div>
          </div>
        </div>
        <div className="w-full border  rounded-lg p-4 text-center">
          <figure className="h-56 px-6 bg-base-200 rounded-lg flex justify-center items-center">
            <img src={img6} alt="photo" className=" w-40 h-40 " />
          </figure>
          <div className="pt-6">
            <h2 className="text-[#444] font-bold text-2xl">Car Engine Plug</h2>
            <div className="py-2 text-[#FF3811] font-semibold text-xl">
              <p>Price: $ 20.0</p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default OurProducts;
