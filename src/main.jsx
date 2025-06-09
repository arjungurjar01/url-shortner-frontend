import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routeTree } from './routing/routeTree.js'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
 
     <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
 
)
