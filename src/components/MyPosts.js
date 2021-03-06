import React from 'react';

import Accordion from './Accordion';

const MyPosts = ({ posts, myId }) => {
  // create array of posts matching 'myId' input by user
  let filteredPosts = posts.filter(post => post.userId === Number(myId));
  return (
    <ul>
      {filteredPosts.map(({ id, title, body }) => (
        <li key={id}>
          <Accordion title={title} content={body} postId={id} />
        </li>
      ))}
    </ul>
  );
};

export default MyPosts;
