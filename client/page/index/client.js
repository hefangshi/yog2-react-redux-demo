import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../../containers/App'
import configureStore from '../../store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore(window.__PRELOADED_STATE__)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

