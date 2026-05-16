import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Offers from './Components/Offers.jsx'
import SignIn from './Components/SignIn.jsx'
import Body from './Components/Body.jsx'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/offers',
        element: <Offers/>
      },
      {
        path:'/signin',
        element: <SignIn/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
  </RouterProvider>
)
