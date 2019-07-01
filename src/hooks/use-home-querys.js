import { useStaticQuery, graphql } from 'gatsby';

export const usePageHome = () => {
  const { wordpressSiteMetadata, lastestPosts } = useStaticQuery(graphql`
    {
      wordpressSiteMetadata {
        name
        description
      }
    }
  `);

  return { lastestPosts, wordpressSiteMetadata };
};
