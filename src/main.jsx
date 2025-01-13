
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Store} from './store/Store.jsx'

createRoot(document.getElementById('root')).render(
  // BrowserRouter for routing used to 
  <Provider store={Store}>
<BrowserRouter>
    <App />
</BrowserRouter>
</Provider>
)
