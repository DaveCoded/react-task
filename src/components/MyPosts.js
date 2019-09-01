import React from 'react';

import Accordion from './Accordion';

const MyPosts = ({ posts, myId }) => {
  let filteredPosts = posts.filter(post => post.userId === Number(myId));
  return (
    <ul>
      {filteredPosts.map(({ id, title, body, userId }) => (
        <li key={id}>
          <Accordion title={title} content={body} postId={id} userId={userId} />
        </li>
      ))}
    </ul>
  );
};

export default MyPosts;
