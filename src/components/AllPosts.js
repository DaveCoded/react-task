import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Accordion from './Accordion';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      console.log(result);
      setPosts(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

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
