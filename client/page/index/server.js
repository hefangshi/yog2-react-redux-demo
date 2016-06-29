import * as React from 'react'
import { renderToString } from 'react-dom/server.js'
import { Provider } from 'react-redux'
import App from '../../containers/App'
import configureStore from '../../store/configureStore'
import 'todomvc-app-css/index.css'

export default function (state) {
    const store = configureStore(state)
    return renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
}

