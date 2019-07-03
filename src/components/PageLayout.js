import React from 'react';

import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ children, wordpressSiteMetadata }) => {
  return (
    <>
      <Header {...wordpressSiteMetadata} />
      <div>{children}</div>
      <Footer {...wordpressSiteMetadata} />
    </>
  );
};

export default PageLayout;
