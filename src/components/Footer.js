import React from 'react';

export const Footer = () => {
  return (
    <footer className="px-3 py-4">
      <p className="text-center flex flex-col">
        <span className="font-lora italic">© 2019 by Ramón Chancay</span>
        <span className="font-lora italic">
          Made with
          <span role="img" aria-label="Heart">
            💜
          </span>
          using GatsbyJS and Netlify
        </span>
      </p>
    </footer>
  );
};
export default Footer;
