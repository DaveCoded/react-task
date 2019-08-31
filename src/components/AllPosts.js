import React from 'react';

import Accordion from './Accordion';

const AllPosts = ({ posts, loading }) => {
  let jsx = loading ? (
    <p style={{ textAlign: 'center' }}>Loading...</p>
  ) : (
    <ul>
      {posts.map(({ id, title, body, userId }) => (
        <li key={id}>
          <Accordion title={title} content={body} postId={id} userId={userId} />
        </li>
      ))}
    </ul>
  );

  return jsx;
};

export default AllPosts;
