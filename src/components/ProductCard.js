import React from "react";

const ProductCard = ({ title, price, images }) => {
  const thumbnail =
    images.find((url) => url.includes("thumbnail")) ?? images[0];

  const trunc = (string, maxLength) => {
    return string.length <= maxLength
      ? string
      : string.slice(0, maxLength) + "...";
  };

  const truncTitle = trunc(title, 18);
  return (
    <div
      id='product-card'
      className='group flex flex-col w-64 border border-black/15 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg'>
      <div id='thumbnail' className='w-full h-36 '>
        <img
          src={thumbnail}
          alt='thumbnail'
          className='w-full h-full object-cover'
        />
      </div>
      <div
        id='product-details'
        className='px-4 py-5 w-full h-full bg-neutral-100 flex flex-col gap-2'>
        <h3 className='text-xl font-semibold text-black/90'>{truncTitle}</h3>
        <p className='text-xl font-medium text-black/65'> ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
