import React from 'react';
import { Link } from 'react-router-dom';

const buttons = [
  { Name: "About", Address: "/" },
  { Name: "Works", Address: "/work" },
  { Name: "Contact", Address: "#" }
];

const Header = () => {
  return (
    <div className="  text-end pr-2 pt-4  w-screen">
     <h1 className='absolute pl-8 py-2 text-5xl font-semi-bold font-mono'>k.</h1>
      <ul className="flex text-lg justify-end space-x-8">
        {buttons.map((element, index) => (
          <li key={index}>
           <button className='rounded-full px-3
            py-1 bg-white/0 hover:scale-110 transition-transform'> <Link to={element.Address} className="text-white hover:text-gray-300">
              {element.Name}
            </Link></button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Header;
