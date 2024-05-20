import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const items = [
  {
    id: 1,
    title: "Project1",
    subtitle: "It was a great project.",
    description: "This project involved building a robust web application with React and Node.js.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project1+Image1",
      "https://via.placeholder.com/400x300.png?text=Project1+Image2",
    ],
  },
  {
    id: 2,
    title: "Project2",
    subtitle: "It was another great project.",
    description: "This project focused on developing a mobile app using Flutter.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project2+Image1",
      "https://via.placeholder.com/400x300.png?text=Project2+Image2",
    ],
  },
  {
    id: 3,
    title: "Project3",
    subtitle: "It was a great project too.",
    description: "This project was an e-commerce platform with Django and React.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project3+Image1",
      "https://via.placeholder.com/400x300.png?text=Project3+Image2",
    ],
  },
  {
    id: 4,
    title: "Project4",
    subtitle: "It was a fantastic project.",
    description: "This project involved creating a machine learning model to predict stock prices.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project4+Image1",
      "https://via.placeholder.com/400x300.png?text=Project4+Image2",
    ],
  },
  {
    id: 5,
    title: "Project5",
    subtitle: "It was an amazing project.",
    description: "This project focused on developing an IoT system for smart home automation.",
    images: [
      "https://via.placeholder.com/400x300.png?text=Project5+Image1",
      "https://via.placeholder.com/400x300.png?text=Project5+Image2",
    ],
  },
];

const Work = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.find((item) => item.id === selectedId).images.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < items.find((item) => item.id === selectedId).images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="h-screen w-screen bg-deep-purple">
      <Header />
      <main
      style={{height: "88vh"}} className="container mx-auto px-4 py-8 h-full overflow-hidden">
        <section
          className="mb-16 h-full overflow-y-auto"
          style={{
            
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
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
          <h1 className="text-4xl font-bold mb-8">Projects</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layoutId={item.id.toString()}
                onClick={() => {
                  setSelectedId(item.id);
                  setCurrentImageIndex(0);
                }}
                className="p-4 bg-white rounded-lg shadow-md cursor-pointer transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h5 className="text-xl font-semibold text-gray-800 mt-2">
                  {item.subtitle}
                </motion.h5>
                <motion.h2 className="text-2xl font-bold mt-2">
                  {item.title}
                </motion.h2>
              </motion.div>
            ))}
          </div>
        </section>

        <AnimatePresence>
          {selectedId && (
            <motion.section
              layoutId={selectedId.toString()}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.article className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto relative">
                <motion.img
                  src={
                    items.find((item) => item.id === selectedId).images[
                      currentImageIndex
                    ]
                  }
                  alt={items.find((item) => item.id === selectedId).title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <motion.h5 className="text-xl font-semibold text-gray-800 mt-4">
                  {items.find((item) => item.id === selectedId).subtitle}
                </motion.h5>
                <motion.h2 className="text-2xl font-bold mt-2">
                  {items.find((item) => item.id === selectedId).title}
                </motion.h2>
                <motion.p className="mt-4">
                  {items.find((item) => item.id === selectedId).description}
                </motion.p>
                <div className="flex justify-between mt-4">
                  <motion.button
                    onClick={handlePrevImage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                  >
                    Previous
                  </motion.button>
                  <motion.button
                    onClick={handleNextImage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                  >
                    Next
                  </motion.button>
                </div>
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 absolute top-4 right-4"
                >
                  Close
                </motion.button>
              </motion.article>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
