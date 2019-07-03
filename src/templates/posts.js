import React from 'react';
import BasicMetas from '../components/BasicMetas';

const Post = ({ pageContext }) => {
  const pageDescription = pageContext.excerpt
    ? pageContext.excerpt.replace(/(<([^>]+)>)/gi, '')
    : '';
  return (
    <>
      <BasicMetas title={pageContext.title} description={pageDescription} />
      <div className="bg-gray-100 p-8">
        <h1 className="text-xl font-lora font-bold text-center my-4 md:text-4xl">
          {pageContext.title}
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 px-4 mt-6 post-body">
          <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </div>
      </div>
    </>
  );
};

export default Post;
