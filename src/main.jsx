import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {Home, About, Login, Signup, AddPost, Posts, Post, Verify} from "./pages"

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/posts",
        element: <Posts />
      },
      {
        path:"/login",
        element: <Login />
      },
      {
        path:"/signup",
        element: <Signup />
      },
      {
        path:"/verify-user",
        element: <Verify />
      },
      {
        path:"/add-post",
        element: <AddPost />
      },
      {
        path:"post/:postid",
        element: <Post />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
