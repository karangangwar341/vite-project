import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineInstagram } from "react-icons/ai";
import { RiFileDownloadLine } from "react-icons/ri";
import image from "../assets/image.png"
import resume from "../assets/karan_resume.pdf"
const ContactForm = () => {
  const email = "karangangwar341@gmail.com";
  const phoneNumber = "+919520569400";
  const address = "Lucknow, Uttar Pradesh, India";
  const instagramLink = "https://instagram.com/the_silent_boy_1101"; 
  const resumePdfPath = {resume}; // Update this path according to where your resume PDF is located

  return (
    <div className="mt-96 flex items-center justify-center w-screen min-h-screen">
      <div className="w-full md:w-3/5 p-10 bg-white/0 border-2 border-white/20 shadow-white/20 shadow-2xl md:rounded-xl text-center space-y-6">
        <h1 className="text-4xl text-white mb-8 font-bold">Contact Me</h1>

        <div className="flex justify-center">
          <div className="w-1/2 mr-4">
            <img
              src={image} // Replace with actual contact form image
              alt="Contact Form"
              className="w-full rounded-lg shadow-md mb-8"
            />
          </div>
          <div className="w-1/2 ml-4 flex flex-col justify-center">
            <div className="space-y-6 text-left">
              <ContactMethod
                icon={<AiOutlineMail className="w-12 h-12" />}
                text={` ${email}`}
                link={`mailto:${email}`}
              />
              <ContactMethod
                icon={<AiOutlinePhone className="w-12 h-12" />}
                text={`${phoneNumber}`}
                link={`tel:${phoneNumber}`}
              />
              <ContactMethod
                icon={<AiOutlineEnvironment className="w-12 h-12" />}
                text={`${address}`}
                link={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address
                )}`}
              />
              <ContactMethod
                icon={<AiOutlineInstagram className="w-12 h-12" />}
                text="Follow me on Instagram"
                link={instagramLink}
              />
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href={resume}
                  download="Your_Name_Resume.pdf"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <RiFileDownloadLine className="inline-block mr-2 -mt-1" />
                  Download Resume
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Download my professional resume for more details about my skills and experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactMethod = ({ icon, text, link }) => (
  <div className="flex items-center space-x-4">
    {icon}
    <a href={link} className="text-lg text-white hover:underline">
      {text}
    </a>
  </div>
);

export default ContactForm;
