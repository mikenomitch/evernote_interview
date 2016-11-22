// folder structure

// src
  // index.js

// VVVVV the app VVVVV

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  (<div> Hello World </div>),
  document.getElementById('app')
)

// the following is incorrect but if you code something
// like this, we'll just pretend that it works :)

// React.renderInto(
//   '#app',
//   <div> Hello World </div>
// )