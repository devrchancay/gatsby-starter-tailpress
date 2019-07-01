import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { usePageHome } from '../hooks/use-home-querys';

const PageLayout = ({ children }) => {
  const { wordpressSiteMetadata } = usePageHome();

  return (
    <>
      <Header {...wordpressSiteMetadata} />
      <div>{children}</div>
      <Footer {...wordpressSiteMetadata} />
    </>
  );
};

export default PageLayout;
