import * as React from 'react'
import { Router, Route, Link } from 'react-router'
import App from '../containers/App'
import About from '../containers/About'

export default (
  <Route>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
  </Route>
)
