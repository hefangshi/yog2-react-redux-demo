import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../../containers/App'
import configureStore from '../../store/configureStore'
import 'todomvc-app-css/index.css'

export default function (state) {
    const store = configureStore(state)
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
}

