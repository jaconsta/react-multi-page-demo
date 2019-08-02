import React from 'react'

import Abutton from './Abutton'

const App = props => (
  <div>
    <div>I am a superrrr component</div>
    <div><Abutton/></div>
    { props.posts && props.posts.length }
  </div>
)

export default App
