import React, { useState, useEffect, useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";
import "./Ds.css";
const items = [
  {
    id: 1,
    title: "Project1",
    subtitle: "It was a great project.",
    description:
      "This project involved building a robust web application with React and Node.js.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project1+Image1",
      "https://via.placeholder.com/400x300.png?text=Project1+Image2",
    ],
  },
  {
    id: 2,
    title: "Project2",
    subtitle: "It was another great project.",
    description:
      "This project focused on developing a mobile app using Flutter.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project2+Image1",
      "https://via.placeholder.com/400x300.png?text=Project2+Image2",
    ],
  },
  {
    id: 3,
    title: "Project3",
    subtitle: "It was a great project too.",
    description:
      "This project was an e-commerce platform with Django and React.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project3+Image1",
      "https://via.placeholder.com/400x300.png?text=Project3+Image2",
    ],
  },
  {
    id: 4,
    title: "Project4",
    subtitle: "It was a fantastic project.",
    description:
      "This project involved creating a machine learning model to predict stock prices.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project4+Image1",
      "https://via.placeholder.com/400x300.png?text=Project4+Image2",
    ],
  },
  {
    id: 5,
    title: "Project5",
    subtitle: "It was an amazing project.",
    description:
      "This project focused on developing an IoT system for smart home automation.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project5+Image1",
      "https://via.placeholder.com/400x300.png?text=Project5+Image2",
    ],
  },
];

const Work = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = items.reduce(
    (total, item) => total + item.images.length,
    0
  );
  const containerRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => clearInterval(timer);
  }, [selectedId, totalImages]); // Include totalImages in the dependency array

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalImages - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const items = Array.from(container.children);
      const center = container.scrollLeft + container.offsetWidth / 2;

      items.forEach((item) => {
        const distanceFromCenter = Math.abs(
          item.offsetLeft + item.offsetWidth / 2 - center
        );
        const scale = Math.max(
          0.5,
          1 - Math.min(0.5, distanceFromCenter / 700)
        );
        item.style.transform = `scale(${scale})`;
      });
    };

    const container = containerRef.current;
    const items = Array.from(container.children);
    const center = container.scrollLeft + container.offsetWidth / 2;

    items.forEach((item) => {
      const distanceFromCenter = Math.abs(
        item.offsetLeft + item.offsetWidth / 2 - center
      );
      const scale = Math.max(0.5, 1 - 2.2*Math.min(0.5, distanceFromCenter / 1000));
      item.style.transform = `scale(${scale})`;
    });

    containerRef.current.addEventListener("scroll", handleScroll);
    return () =>
      containerRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bbbbbbbbbbbb h-screen z-40 w-screen bg-deep-purple">
      <Header />
      
      <h1 className="text-4xl mb-3 pt-24 flex items-center justify-center  text-center font-semibold ">
        Projects
      </h1>
      <main
        style={{ height: "75vh" , zIndex: 0
         }}
        className=" mx-1 px-0 pt-24 h-full z-0 overflow-hidden"
      >
        <section className="mb-16  z-0 h-full overflow-y-auto">
          <style>
            {`
              ::-webkit-scrollbar {
                width: 0px; /* Safari and Chrome */
              }
              ::-webkit-scrollbar-thumb {
                background: transparent;
              }
            `}
          </style>

          <div
            ref={containerRef}
            className=" ml-3 flex overflow-x-scroll py-12 px-0 mx-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="p-6 z-0 shadow-2xl hover:shadow-white/40 rounded-xl shadow-white/20 cursor-pointer transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex-shrink-0"
                style={{ minWidth: "400px" }}
                onClick={() => {
                  setSelectedId(item.id);
                  setCurrentImageIndex(0);
                }}
              >
                <img
                  src={item.images[currentImageIndex]}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-lg transition-all duration-300 ease-in-out"
                />
                <h5 className="text-xl font-semibold mt-2">{item.subtitle}</h5>
                <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
              </div>
            ))}
          </div>
        </section>

        {selectedId && (
          <div
            className={`fixed backdrop-blur-lg inset-0 bg-black/70  flex items-center justify-center z-50 ${
              selectedId ? "modal-fade-in" : "modal-fade-out"
            }`}
          >
            <article className="flex-col bg-white/20 backdrop:blur-2xl rounded-xl shadow-lg p-8 max-w-sm mx-auto">
              <img
                src={
                  items.find((item) => item.id === selectedId).images[
                    currentImageIndex
                  ]
                }
                alt={items.find((item) => item.id === selectedId).title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h5 className="text-xl font-semibold text-gray-800 mt-4">
                {items.find((item) => item.id === selectedId).subtitle}
              </h5>
              <h2 className="text-2xl font-bold mt-2">
                {items.find((item) => item.id === selectedId).title}
              </h2>
              <p className="mt-4">
                {items.find((item) => item.id === selectedId).description}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Next
                </button>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 absolute top-4 right-4"
              >
                Close
              </button>
            </article>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Work;
