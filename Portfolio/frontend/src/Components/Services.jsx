import React from "react";
import ServiceCard from "./ServiceCard.jsx";

function Services() {
  const serviceData = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/217676ce17099d65de0aacbe21cb28e0eebd22241331d8e745e7eb806616a0c0?apiKey=78edfb5432bb454ba45341ffa54eb21f&",
      title: "Text One",
      description: "Lorem ipsum dolor sit amet consectetur. Dapibus et libero",
      readMoreSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/69e504340211480713d9655a59760e710bb71ca93f9631390037c05f1bee17be?apiKey=78edfb5432bb454ba45341ffa54eb21f&",
      readMoreAlt: "Read more about Text One",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b77dfa6b9596877fb0e1f1ca7b13cd4b931efe6f526032e666784317aa5c7a00?apiKey=78edfb5432bb454ba45341ffa54eb21f&",
      title: "Text Two",
      description: "Lorem ipsum dolor sit amet consectetur. Dapibus et libero",
      readMoreSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a3362b6d7ecbcf2404be71f2fba03093c8c4f829092b3ecd2bd0dfc880252780?apiKey=78edfb5432bb454ba45341ffa54eb21f&",
      readMoreAlt: "Read more about Text Two",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3ed0adeb71f03eae79922ea0b3fa04532f00ea8a62621e3d96836024feb6be86?apiKey=78edfb5432bb454ba45341ffa54eb21f&",
      title: "Text Three",
      description: "Lorem ipsum dolor sit amet consectetur. Dapibus et libero",
      readMoreSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4bc1622fe13ded77bec163c2b0f0dcbe740122791226f63984f59ec56837d2c8?apiKey=78edfb5432bb454ba45341ffa54eb21f&",
      readMoreAlt: "Read more about Text Three",
    },
    // Add more service items as needed
  ];

  const handleReadMoreClick = (title) => {
    alert(`Read more about ${title}`);
  };

  return (
    <div className="flex justify-center items-center px-16 py-20 max-md:px-5">
      <div className="flex flex-col mt-5 w-full max-w-[1480px] max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-4 text-2xl text-right text-gray-50">
              <div className="flex-1 shrink-0 my-auto h-0.5 bg-gray-50" />
            
            </div>
            <div className="gradient-text py-12 text-5xl px-8s font-medium text- ">
              What Can
              <br />
              <span className="text-orange-600">I Do?</span>
            </div>
          </div>
          <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
            <div className="flex-1 my-auto text-base text-right text-white max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Tincidunt sed semper
              gravida amet pretium nulla eget feugiat quam. Libero risus
              dictumst dolor nunc aliquet.
            </div>
            <div className="justify-center items-center px-16 py-3 text-2xl font-semibold text-center text-orange-600 bg-gray-50 rounded-lg max-md:px-5">
              Let’s Talk!
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between pr-6 mt-16 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
              readMoreSrc={service.readMoreSrc}
              readMoreAlt={service.readMoreAlt}
              onReadMoreClick={() => handleReadMoreClick(service.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
