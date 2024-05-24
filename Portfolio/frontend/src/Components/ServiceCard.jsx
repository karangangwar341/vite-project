import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({
  imgSrc,
  title,
  description,

  onReadMoreClick,
}) => {
  return (
    <div className="flex md:flex-col grow justify-center px-auto py-14 mx-auto w-full text-white rounded-lg border-2 border-white/30 bg-white/5 shadow-lg shadow-white/20 max-md:px-5 max-md:mt-8">
      <img
        loading="lazy"
        src={imgSrc}
        alt="hi"
        className="aspect-square w-[93px]"
      />
      <div className="mt-5 text-5xl max-md:text-4xl">{title}</div>
      <div className="mt-2 text-base">{description}</div>
      <div className="flex gap-4 pr-9 mt-5 text-sm max-md:pr-5">
        <div className="my-auto"><button className="text-white font-semibold flex p-2 gap-3 text-nowrap bg-transparent">Read more  <FaLongArrowAltRight className="pt-1 text-xl"></FaLongArrowAltRight></button></div>
     
      </div>
    </div>
  );
};

export default ServiceCard;
