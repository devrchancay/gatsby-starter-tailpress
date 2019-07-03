import React from 'react';
import Helmet from 'react-helmet';

const BasicMetas = ({ title, description, lang = 'en' }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | Starter kit for gatsby, wordpress and tailwindcss`}
      meta={[
        {
          property: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ]}
    />
  );
};

export default BasicMetas;
