import React from 'react';

import Header from './components/Header';
import Accordion from './components/Accordion';
import AllPosts from './components/AllPosts';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='column'>
          <h2>All posts</h2>
          <AllPosts />
        </div>
        <div className='column'>
          <h2>My posts</h2>
          <Accordion
            title='ea molestias quasi exercitationem repellat qui ipsa sit aut'
            content='et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
          />
        </div>
      </main>
    </>
  );
}

export default App;
