if (process.env !== 'production') {
  require('dotenv').config({
    path: `./.env`
  });
}

module.exports = {
  siteMetadata: {
    title: `Gatsby starter Wordpress + Tailwindcss`,
    description: `Start kit for gatsby, wordpress and tailwindcss`
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.WORDPRESS_BASE_URL,
        protocol: process.env.WORDPRESS_PROTOCOL,
        hostingWPCOM: process.env.WORDPRESS_WPCOM === 'true',
        useACF: process.env.WORDPRESS_ACF === 'true',
        verboseOutput: process.env.WORDPRESS_VERBOSE_OUTPUT === 'true',
        searchAndReplaceContentUrls: {
          sourceUrl: process.env.WORDPRESS_SOURCE_URL,
          replacementUrl:
            process.env.WORDPRESS_REPLACE_URL || `http://localhost:8000`
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./config/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelist: [],
        whitelistPatternsChildren: [
          /post-body$/,
          /more-link$/,
          /screen-reader-text$/
        ]
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    }
  ]
};
