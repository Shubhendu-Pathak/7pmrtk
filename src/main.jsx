import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './AsyncThunk/store/index.js'
// import { store } from './moviertk2/store2/index2.js'
// import { store } from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   {/* <Provider store={store}>
   <App />
   </Provider> */}

   {/* <Provider store={store}>
   <App />
   </Provider> */}

   {/* thunk */}
   <Provider store={store}>
    <App/>
   </Provider>
   
  </React.StrictMode>,
)
