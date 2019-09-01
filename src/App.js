import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Column from './components/Column';
import Header from './components/Header';
import AllPosts from './components/AllPosts';
import MyPosts from './components/MyPosts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myId, setMyId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      setPosts(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = e => {
    setMyId(e.target.value);
  };

  return (
    <>
      <Header changeFunc={handleChange} inputVal={myId} />
      <main>
        <Column heading='All posts'>
          <AllPosts posts={posts} loading={loading} />
        </Column>
        <Column heading='My posts'>
          <MyPosts posts={posts} changeFunc={handleChange} myId={myId} />
        </Column>
      </main>
    </>
  );
};

export default App;
