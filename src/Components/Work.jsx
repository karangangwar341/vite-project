import React, { useState,useEffect } from "react";

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

  const totalImages = items.reduce((total, item) => total + item.images.length, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => clearInterval(timer);
  }, [selectedId, totalImages]); // Include totalImages in the dependency array

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0
       ? prevIndex - 1
        : totalImages - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < totalImages - 1
       ? prevIndex + 1
        : 0
    );
  };

  return (
    <div className="h-screen w-screen bg-deep-purple">
      <Header />
      <h1 className="text-4xl pt-8 mb-3  text-center font-semibold ">
        Projects
      </h1>
      <main
        style={{ height: "75vh" }}
        className="container mx-auto px-4 pt-0 h-full overflow-hidden"
      >
        <section className="mb-16 h-full overflow-y-auto">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedId(item.id);
                  setCurrentImageIndex(0);
                }}
                className="p-4 bg-white rounded-lg shadow-md cursor-pointer transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <img
                  src={item.images[currentImageIndex]}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg transition-all duration-300 ease-in-out"
                />
                <h5 className="text-xl font-semibold text-gray-800 mt-2">
                  {item.subtitle}
                </h5>
                <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
              </div>
            ))}
          </div>
        </section>

        {selectedId && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ${
              selectedId ? "modal-fade-in" : ""
            }`}
          >
            <article className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto relative">
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
