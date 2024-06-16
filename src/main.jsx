import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextProvider from '../src/contextAPI/contextAPI.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
