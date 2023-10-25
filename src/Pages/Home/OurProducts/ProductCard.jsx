const ProductCard = ({ product }) => {
  const { image, name, price } = product;
  return (
    <div className="w-full border  rounded-lg p-4 text-center">
      <figure className="h-56 px-6 bg-base-200 rounded-lg flex justify-center items-center">
        <img src={image} alt="photo" className="w-40 h-40" />
      </figure>
      <div className="pt-6">
        <h2 className="text-[#444] font-bold text-2xl">{name}</h2>
        <div className="py-2 text-[#FF3811] font-semibold text-xl">
          <p>Price: $ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
