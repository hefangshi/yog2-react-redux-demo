import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, hashHistory, Router } from 'react-router'
import routes from '../../routes/index'
import configureStore from '../../store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore(window.__PRELOADED_STATE__)
render(
  <Provider store={store}>
    <Router history={browserHistory}>
        {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
