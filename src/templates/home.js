import React from 'react';

import PageLayout from '../components/PageLayout';
import Navigation from '../components/Navigation';
import { Link } from 'gatsby';
import '../base.css';
import BasicMetas from '../components/BasicMetas';
import { usePageHome } from '../hooks/use-home-querys';
const Home = ({ pageContext }) => {
  const { group, index } = pageContext;
  const { wordpressSiteMetadata } = usePageHome();

  return (
    <PageLayout wordpressSiteMetadata={wordpressSiteMetadata}>
      <BasicMetas
        title={wordpressSiteMetadata.name}
        description={wordpressSiteMetadata.description}
      />
      <section className="py-2 px-3 mt-4">
        <div className="flex flex-col md:items-center">
          {index === 1 && (
            <h2 className="text-xl font-lora italic px-1 md:w-1/2">
              Recent posts
            </h2>
          )}
          <div className="flex flex-col px-1 md:w-1/2">
            {group.map(({ node }) => {
              const url = new URL(node.link) || {};
              return (
                <article
                  className="border-b border-gray-300 my-1 py-2"
                  key={node.id}
                >
                  <header>
                    <div>
                      <time
                        className="text-gray-500 font-sans"
                        dateTime={node.datetime}
                      >
                        {node.date}
                      </time>
                    </div>
                    <div>
                      <Link
                        to={url.pathname}
                        className="text-gray-800 hover:underline"
                      >
                        <h2 className="text-xl my-2 font-bold font-lora md:text-2xl">
                          {node.title}
                        </h2>
                      </Link>
                    </div>
                  </header>
                  <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </article>
              );
            })}
          </div>
          <div className="flex flex-col px-1 md:w-1/2">
            <Navigation {...pageContext} />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
