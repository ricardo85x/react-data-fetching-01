import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClientProvider } from 'react-query'
import { client } from './services/queryClient'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
