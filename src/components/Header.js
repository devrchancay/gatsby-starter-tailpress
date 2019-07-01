import React from 'react';

export const Header = ({ name, description }) => {
  return (
    <header className="px-4 py-8 bg-gray-100">
      <h1 className="text-4xl text-center font-lora font-bold md:mt-6">
        {name}
      </h1>
      <h2 className="text-2xl text-center leading-tight mt-2 font-lora md:mb-6">
        {description}
      </h2>
    </header>
  );
};

export default Header;
