import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ first, last, pathPrefix, index }) => {
  const nextUrl = last ? '' : `${pathPrefix}/${index + 1}`;
  const prevUrl = first
    ? ''
    : index > 2
    ? `${pathPrefix}/${index - 1}`
    : `${pathPrefix}`;
  return (
    <div className="py-6 flex flex-col justify-center items-center md:flex-row md:justify-between">
      {!first && (
        <Link rel="prev" to={prevUrl} className="underline text-gray-800 py-1">
          New posts
        </Link>
      )}
      {!last && (
        <Link rel="next" to={nextUrl} className="underline text-gray-800 py-1">
          Older posts
        </Link>
      )}
    </div>
  );
};

export default NavLink;
