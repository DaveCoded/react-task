import React from 'react';

import Accordion from './Accordion';

const AllPosts = ({ posts, loading }) => {
  let jsx = loading ? (
    <p style={{ textAlign: 'center' }}>Loading...</p>
  ) : (
    <ul>
      {posts.map(({ id, title, body }) => (
        <li key={id}>
          <Accordion title={title} content={body} postId={id} />
        </li>
      ))}
    </ul>
  );

  return jsx;
};

export default AllPosts;
