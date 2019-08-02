console.log('hello');
import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App';
let posts = [];

setInterval(() => {
  fetch('https://my-json-server.typicode.com/typicode/demo/comments')
  .then(res => res.json())
  .then(thePosts => {
    console.log(posts.length);
    posts = [...posts, ...thePosts]
    ReactDOM.render(<App posts={posts} />,
      document.getElementById('withjquery'))
  })
}, 3000);
