const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allWordpressPost(limit: 100) {
          edges {
            node {
              id
              slug
              link
              title
              content
              timeDate: date
              date(formatString: "DD MMM YYYY")
              excerpt
              author {
                id
                name
                avatar_urls {
                  wordpress_48
                }
              }
            }
          }
        }
      }
    `).then(result => {
      createPaginatedPages({
        pageLength: 5,
        edges: result.data.posts.edges,
        createPage: createPage,
        pageTemplate: 'src/templates/home.js',
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`
      });

      result.data.posts.edges.map(({ node }) => {
        const url = new URL(node.link) || {};
        createPage({
          path: url.pathname,
          component: path.resolve('./src/templates/posts.js'),
          context: {
            slug: url.pathname,
            ...node
          }
        });
        resolve();
      });
    });
  });
};
